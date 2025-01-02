import React from "react";
import styled from "styled-components";

const BlogLists = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>All Posts</HeaderTitle>
        <HeaderLink href="#">12 Posts Found</HeaderLink>
      </Header>

      <Post>
        <PostCategory>FrontEnd / REACT</PostCategory>
        <PostTitle>UseEffect란 무엇일까?</PostTitle>
        <PostDescription>
          UseEffect란 React에서 다루는 수많은 hook 중에 하나로...
        </PostDescription>
        <PostDate>2024.12.20</PostDate>
      </Post>

      <Post>
        <PostCategory>FrontEnd / REACT</PostCategory>
        <PostTitle>Context API에 대해 알아보자</PostTitle>
        <PostDescription>
          전역 변수처럼 데이터를 다루고 싶을 때 사용하는 방법으로...
        </PostDescription>
        <PostDate>2024.12.16</PostDate>
      </Post>

      <Pagination>
        <PaginationLink href="#">&laquo;</PaginationLink>
        <PaginationLink href="#">1</PaginationLink>
        <PaginationLink href="#" className="active">
          2
        </PaginationLink>
        <PaginationLink href="#">3</PaginationLink>
        <PaginationLink href="#">4</PaginationLink>
        <PaginationLink href="#">5</PaginationLink>
        <PaginationLink href="#">&raquo;</PaginationLink>
      </Pagination>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const HeaderLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;

const Post = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostCategory = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
`;

const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const PostDescription = styled.p`
  margin: 10px 0;
`;

const PostDate = styled.div`
  font-size: 12px;
  color: #aaa;
  margin-top: 10px;
`;

const Pagination = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const PaginationLink = styled.a`
  margin: 0 5px;
  text-decoration: none;
  color: #007bff;

  &.active {
    font-weight: bold;
    color: #333;
  }
`;

export default BlogLists;
