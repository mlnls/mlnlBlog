import React from "react";
import styled from "styled-components";

import getCategoryName from "../../hooks/GetCategory";

const BlogList = ({ item, handleSelect }) => {
  return (
    <Post onClick={() => handleSelect(item)}>
      <PostCategory>{getCategoryName(item.category)}</PostCategory>
      <PostTitle>{item.title}</PostTitle>
      <PostDescription>{item.content}</PostDescription>
      <PostDate>{item.dateat}</PostDate>
    </Post>
  );
};

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

export default BlogList;
