import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Card>
        <ProfileImage />
        <TextWrapper>
          <Name>SeungMin Oh</Name>
          <Title>Web Designer</Title>
          <Location>Anyang Gyeongi, South Korea</Location>
          <Buttons>
            <Button onClick={() => navigate("/blog")}>BLOG</Button>
            <Button>GitHub</Button>
            <Button onClick={() => navigate("/project")}>Project</Button>
          </Buttons>
        </TextWrapper>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-color: #f7f7f7;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 30px;
  padding: 20px 40px;
  width: 835px;
  height: 330px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.div`
  width: 160px;
  height: 230px;
  background-color: white;
  border-radius: 10px;
  margin-right: 20px;
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 50px;
  margin: 0;
  color: #000000;
  padding: 0 0 20px 0;
`;

const Title = styled.p`
  font-size: 25px;
  color: #000000;
  margin: 5px 0 0;
`;

const Location = styled.p`
  font-size: 25px;
  color: #000000;
  margin: 5px 0 20px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 30px;
  padding: 10px 0 0 0;
`;

const Button = styled.button`
  background-color: #767474;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 110px;
  height: 30px;
  &:hover {
    background-color: #555;
  }
`;

export default HomePage;