import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BlogSidebar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState({});

  const categories = [
    { name: "All" },
    {
      name: "Language",
      subCategories: [
        { name: "C/C++" },
        { name: "Python" },
        { name: "JavaScript" },
      ],
    },
    { name: "CS" },
    {
      name: "Algorithm",
      subCategories: [{ name: "Concept" }, { name: "Solving" }],
    },
    { name: "Network" },
    {
      name: "FrontEnd",
      subCategories: [{ name: "Concept" }, { name: "TroubleShooting" }],
    },
    {
      name: "BackEnd",
      subCategories: [{ name: "Concept" }, { name: "TroubleShooting" }],
    },
    { name: "Security" },
  ];

  const toggleExpand = (categoryName) => {
    setExpanded((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <Side>
      <ImageContainer onClick={() => navigate("/intro")}>
        <Image />
        <Name>SeungMin Oh</Name>
      </ImageContainer>
      <CategoryContainer>
        <CategoryTitle>Category</CategoryTitle>
        <CategoryList>
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <CategoryItem
                onClick={
                  category.subCategories
                    ? () => toggleExpand(category.name)
                    : () => navigate(category.path)
                }
              >
                {">"} {category.name}
              </CategoryItem>
              {category.subCategories && expanded[category.name] && (
                <SubCategoryList>
                  {category.subCategories.map((subCategory, subIndex) => (
                    <SubCategoryItem
                      key={subIndex}
                      onClick={() => navigate(subCategory.path)}
                    >
                      {subCategory.name}
                    </SubCategoryItem>
                  ))}
                </SubCategoryList>
              )}
            </React.Fragment>
          ))}
        </CategoryList>
      </CategoryContainer>
    </Side>
  );
};

// Styled Components
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
  cursor: pointer;
`;

const Image = styled.div`
  height: 230px;
  width: 160px;
  background-color: white;
  border-radius: 30px;
  margin: 0 auto;
`;

const Name = styled.h3`
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;

const CategoryContainer = styled.div`
  height: 67%;
  padding: 20px;
`;

const CategoryTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #1e90ff;
    font-weight: bold;
  }
`;

const SubCategoryList = styled.ul`
  list-style: none;
  padding-left: 20px;
  margin: 5px 0;
`;

const SubCategoryItem = styled.li`
  font-size: 14px;
  margin: 5px 0;
  cursor: pointer;
  color: #666;
  &:hover {
    color: #1e90ff;
  }
`;

export default BlogSidebar;
