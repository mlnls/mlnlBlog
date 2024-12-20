import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProjectHeader = () => {
  const navigate = useNavigate();

  return (
    <Head>
      <ProjectText onClick={() => navigate("/")}>mlnl PROJECT</ProjectText>
    </Head>
  );
};

const Head = styled.div`
  display: flex;
  height: 66px;
  background-color: #d9d9d9;
  border: solid;
  border-width: 0px 0px 2px 0px;
`;

const ProjectText = styled.h1`
  padding: 10px 30px;
  font-size: 20px;
  cursor: pointer;
`;

export default ProjectHeader;
