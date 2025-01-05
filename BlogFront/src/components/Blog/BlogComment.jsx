import React from "react";
import styled from "styled-components";

const BlogComment = () => {
  return (
    <CommentsSection>
      <CommentsTitle>2 Comments</CommentsTitle>
      <CommentList>
        <CommentItem>
          <CommentAuthor>deokan</CommentAuthor>
          <CommentText>좋은 글 감사합니다 😊</CommentText>
          <CommentDate>2024.12.20 19:08</CommentDate>
          <ReplyButton>답글</ReplyButton>
        </CommentItem>
        <CommentReply>
          <CommentAuthorReply>mlnl - owner</CommentAuthorReply>
          <CommentTextReply>읽어주셔서 감사합니다!</CommentTextReply>
          <CommentDateReply>2024.12.20 22:12</CommentDateReply>
        </CommentReply>
      </CommentList>
      <CommentForm>
        <CommentInput placeholder="댓글을 작성해주세요..." />
        <CommentButton>작성하기</CommentButton>
      </CommentForm>
    </CommentsSection>
  );
};

const CommentsSection = styled.div`
  margin-top: 40px;
`;

const CommentsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

const CommentItem = styled.li`
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`;

const CommentAuthor = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const CommentText = styled.p`
  margin: 0 0 5px 0;
`;

const CommentDate = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const ReplyButton = styled.button`
  margin-top: 5px;
  padding: 5px 10px;
  background: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #333;

  &:hover {
    background: #e0e0e0;
  }
`;

const CommentReply = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  padding-left: 20px;
  border-left: 2px solid #ddd;
`;

const CommentAuthorReply = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const CommentTextReply = styled.p`
  margin: 0 0 5px 0;
`;

const CommentDateReply = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const CommentForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
`;

const CommentButton = styled.button`
  align-self: flex-end;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export default BlogComment;
