import React, { useState, useEffect } from "react";
import styled from "styled-components";

import BlogDetail from "../components/Blog/BlogDetail";

import GetData from "../hooks/GetData";
import getCategoryName from "../hooks/GetCategory";

import useCategoryStore from "../store/categoryStore";

const BlogLists = () => {
  const { data: post, isLoading, isError } = GetData("/blog");
  const [selectedPost, setSelectedPost] = useState(null);
  const [filteredPost, setFilteredPost] = useState([]);

  const { selectedCategory } = useCategoryStore();

  useEffect(() => {
    if (!post?.data) return;
    let result = post.data;

    if (selectedCategory !== "0") {
      result = result.filter((it) => it.category === selectedCategory);
    }

    setFilteredPost(result);
  }, [post, selectedCategory]);

  const handleSelect = (it) => {
    setSelectedPost(it);
  };

  if (isLoading) return <Container>로딩 중 입니다.</Container>;
  if (isError) return <Container>에러 발생..</Container>;

  return (
    <Container>
      {selectedPost ? (
        <BlogDetail blog={selectedPost} onClose={() => setSelectedPost(null)} />
      ) : (
        <>
          <Header>
            <HeaderTitle>{getCategoryName(selectedCategory)} Posts</HeaderTitle>
            <HeaderLink href="#">{filteredPost?.length} Posts Found</HeaderLink>
          </Header>

          {filteredPost?.map((it) => (
            <Post onClick={() => handleSelect(it)}>
              <PostCategory>{getCategoryName(it.category)}</PostCategory>
              <PostTitle>{it.title}</PostTitle>
              <PostDescription>{it.content}</PostDescription>
              <PostDate>{it.dateat}</PostDate>
            </Post>
          ))}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
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

export default BlogLists;
