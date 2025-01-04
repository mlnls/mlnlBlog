import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useCategoryStore from "../../store/categoryStore";

const BlogSidebar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState({});
  const { selectedCategory, setCategory } = useCategoryStore();

  const categories = [
    { name: "All", id: "0" },
    {
      name: "Language",
      subCategories: [
        { name: "C/C++", id: "1" },
        { name: "Python", id: "2" },
        { name: "JavaScript", id: "3" },
      ],
    },
    { name: "CS", id: "4" },
    {
      name: "Algorithm",
      subCategories: [
        { name: "Concept", id: "5" },
        { name: "Solving", id: "6" },
      ],
    },
    { name: "Network", id: "7" },
    {
      name: "FrontEnd",
      subCategories: [
        { name: "Concept", id: "8" },
        { name: "TroubleShooting", id: "9" },
      ],
    },
    {
      name: "BackEnd",
      subCategories: [
        { name: "Concept", id: "10" },
        { name: "TroubleShooting", id: "11" },
      ],
    },
    { name: "Security", id: "12" },
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
          {categories.map((category) => (
            <React.Fragment key={category.id}>
              <CategoryItem
                isSelected={selectedCategory === category.id}
                onClick={
                  category.subCategories
                    ? () => toggleExpand(category.name)
                    : () => setCategory(category.id)
                }
              >
                <CategoryArrow hasSubCategories={!!category.subCategories}>
                  {">"}
                </CategoryArrow>
                {category.name}
              </CategoryItem>
              {category.subCategories && expanded[category.name] && (
                <SubCategoryList>
                  {category.subCategories.map((subCategory) => (
                    <SubCategoryItem
                      key={subCategory.id}
                      isSelected={selectedCategory === subCategory.id}
                      onClick={() => setCategory(subCategory.id)}
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

const Side = styled.div`
  width: 260px;
  height: 93vh;
  background-color: #f0efef;
  border: solid;
  border-width: 0 2px 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const CategoryTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const CategoryList = styled.ul`
  list-style: none;
  margin: 10px;
  padding: 0;
`;

const CategoryItem = styled.li`
  font-size: 18px;
  margin: 10px 0;
  padding-top: 5px;
  cursor: pointer;
  color: #333;
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  &:hover {
    color: #1e90ff;
    font-weight: bold;
  }
`;

const SubCategoryList = styled.ul`
  list-style: none;
  padding-left: 30px;
`;

const SubCategoryItem = styled.li`
  font-size: 16px;
  margin: 5px 0;
  padding-top: 5px;
  cursor: pointer;
  color: #666;
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  &:hover {
    color: #1e90ff;
  }
`;

const CategoryArrow = styled.span`
  margin-right: 10px;
  color: ${(props) => (props.hasSubCategories ? "#333" : "transparent")};
  font-weight: bold;
`;

export default BlogSidebar;
