import React, { useState, useEffect } from "react";
import styled from "styled-components";

import BlogDetail from "./BlogDetail";
import BlogList from "../../components/Blog/BlogList";

import GetData from "../../hooks/GetData";
import getCategoryName from "../../hooks/GetCategory";

import useCategoryStore from "../../store/categoryStore";

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
            <HeaderSpan>{filteredPost?.length} Posts Found</HeaderSpan>
          </Header>

          {filteredPost?.map((it) => (
            <BlogList item={it} handleSelect={handleSelect} />
          ))}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
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

const HeaderSpan = styled.span`
  text-decoration: none;
`;

export default BlogLists;
