import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const IntroHeader = () => {
  const navigate = useNavigate();

  return (
    <Head>
      <IntroText onClick={() => navigate("/")}>mlnl</IntroText>
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

const IntroText = styled.h1`
  padding: 10px 30px;
  font-size: 20px;
  cursor: pointer;
`;

export default IntroHeader;
