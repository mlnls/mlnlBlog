import React from "react";
import styled from "styled-components";

import BlogComment from "../../components/Blog/BlogComment";
import BlogContent from "../../components/Blog/BlogContent";

const BlogDetail = ({ blog }) => {
  return (
    <Container>
      <Header>
        <Date>{blog.dateat}</Date>
        <Title>{blog.title}</Title>
      </Header>
      <BlogContent blog={blog} />
      <BlogComment />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  line-height: 1.6;
  color: #333;
  max-height: 85vh;
  overflow-y: auto;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Date = styled.p`
  font-size: 1rem;
  color: #7b7b7b;
  margin-bottom: 2rem;
`;

export default BlogDetail;
