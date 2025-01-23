import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as marked from "marked";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";

const BlogEdit = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: "확인",
    });
  };

  const convertTitle = () => {
    return { __html: marked.parse(title) };
  };

  const convertContent = () => {
    return { __html: marked.parse(content) };
  };

  const handleClick = async (e) => {
    if (!title || !content) {
      showAlert("입력 오류", "제목과 내용을 입력하세요.", "warning");
      return;
    }

    const { value: selectedCategory } = await Swal.fire({
      title: "Select a category",
      input: "select",
      inputOptions: {
        1: "C / C++",
        2: "Python",
        3: "JavaScript",
        4: "CS",
        5: "Algorithm - Concept",
        6: "Algorithm - Solving",
        7: "Network",
        8: "FE - Concept",
        9: "FE - TroubleShooting",
        10: "BE - Concept",
        11: "BE - TroubleShooting",
        12: "Security",
      },
      inputPlaceholder: "Choose a category",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage("카테고리를 선택해주세요!");
        }
        return value;
      },
    });

    if (selectedCategory) {
      const postData = {
        title: title,
        content: content,
        category: selectedCategory,
      };

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACK_URL}/blog/add`,
          postData
        );
        showAlert("등록 완료!", "포스팅이 완료되었습니다.", "success");
        navigate("/blog");
      } catch (e) {
        showAlert("에러 발생..", "오류가 발생했습니다.", "error");
      }
    }
  };

  return (
    <Container>
      <TextContainer>
        <TitleContainer>
          <TextTitle
            placeholder="Enter your Title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </TitleContainer>
        <TextArea
          placeholder="Enter your Content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <SubmitButton onClick={(e) => handleClick(e.target.value)}>
          Submit
        </SubmitButton>
      </TextContainer>
      <PreviewContainer>
        <TitleContainer>
          <PreviewTitle dangerouslySetInnerHTML={convertTitle()} />
        </TitleContainer>
        <Preview dangerouslySetInnerHTML={convertContent()} />
      </PreviewContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  margin: 0 0 20px 0;
  box-sizing: border-box;
`;

const TextTitle = styled.input`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 95%;
  height: 100%;
  padding: 15px;
  resize: none;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow-y: auto;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #a1a1a1;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3b3b3b;
  }
`;

const PreviewContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
  background-color: #f9f9f9;
`;

const PreviewTitle = styled.div`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Preview = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
`;

export default BlogEdit;
