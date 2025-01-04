import React from "react";
import styled from "styled-components";
import { marked } from "marked";

const BlogDetail = (post) => {
  console.log(post);

  const parsedContent = marked(post.blog.content);

  return (
    <Container>
      <Date>{post.blog.dateat}</Date>
      <Title>{post.blog.title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: parsedContent }} />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  line-height: 1.6;
  color: #333;
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

const Content = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export default BlogDetail;
