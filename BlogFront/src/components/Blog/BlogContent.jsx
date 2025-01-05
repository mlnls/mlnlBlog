import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { marked } from "marked";

const BlogContent = ({ blog }) => {
  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState(null);

  const parsedContent = marked(blog.content);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(marked(blog.content), "text/html");
    const headingElements = doc.querySelectorAll("h1, h2, h3");
    const extractedHeadings = Array.from(headingElements).map((heading) => ({
      level: heading.tagName,
      text: heading.textContent,
      id: heading.textContent.replace(/\s+/g, "-").toLowerCase(),
    }));

    extractedHeadings.forEach((heading) => {
      const element = doc.getElementById(heading.id);
      if (!element) {
        const newElement = doc.createElement(heading.level);
        newElement.id = heading.id;
        newElement.textContent = heading.text;
        doc.body.appendChild(newElement);
      }
    });

    setHeadings(extractedHeadings);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header
      let currentHeading = null;

      extractedHeadings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentHeading = heading.id;
        }
      });

      setActiveHeading(currentHeading);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [blog.content]);

  const handleScrollTo = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ContentWrapper>
      <Content dangerouslySetInnerHTML={{ __html: parsedContent }} />
      <SidebarWrapper>
        <Sidebar>
          <SidebarTitle>Contents</SidebarTitle>
          <SidebarList>
            {headings.map((heading, index) => (
              <SidebarItem
                key={index}
                onClick={() => handleScrollTo(heading.id)}
                active={activeHeading === heading.id}
              >
                {heading.level === "H1" && (
                  <SidebarLinkH1>{heading.text}</SidebarLinkH1>
                )}
                {heading.level === "H2" && (
                  <SidebarLinkH2>{heading.text}</SidebarLinkH2>
                )}
                {heading.level === "H3" && (
                  <SidebarLinkH3>{heading.text}</SidebarLinkH3>
                )}
              </SidebarItem>
            ))}
          </SidebarList>
        </Sidebar>
      </SidebarWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
`;

const SidebarWrapper = styled.div`
  position: sticky;
  top: 20px;
  flex: 0 0 250px;
  margin-left: 20px;
`;

const Sidebar = styled.div`
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SidebarTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  text-decoration: ${(props) => (props.active ? "underline" : "none")};

  &:hover {
    text-decoration: underline;
  }
`;

const SidebarLinkH1 = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

const SidebarLinkH2 = styled.span`
  margin-left: 10px;
  font-size: 0.9rem;
`;

const SidebarLinkH3 = styled.span`
  margin-left: 20px;
  font-size: 0.8rem;
`;

const Content = styled.div`
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export default BlogContent;
