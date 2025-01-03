import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BlogSidebar = () => {
  const navigate = useNavigate();

  return (
    <Side>
      <ImageContainer onClick={() => navigate("/intro")}>
        <Image />
        <Name>SeungMin Oh</Name>
      </ImageContainer>
      <CategoryContainer></CategoryContainer>
    </Side>
  );
};

const Side = styled.div`
  width: 260px;
  height: 100%;
  background-color: #f0efef;
  border: solid;
  border-width: 0 2px 0 0;
`;

const ImageContainer = styled.div`
  height: 33%;
  border: solid;
  border-width: 0 0 2px 0;
  justify-items: center;
  padding: 30px;
`;

const Image = styled.div`
  height: 230px;
  width: 160px;
  background-color: white;
  border-radius: 30px;
`;

const Name = styled.h3`
  font-size: 20px;
`;

const CategoryContainer = styled.div`
  height: 438px;
`;

export default BlogSidebar;
