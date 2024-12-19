import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Card>
        <ProfileImage />
        <TextWrapper>
          <Name>SeungMin Oh</Name>
          <Title>Web Designer</Title>
          <Location>Anyang Gyeongi, South Korea</Location>
          <Buttons>
            <Button>BLOG</Button>
            <Button>GitHub</Button>
            <Button>Project</Button>
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
  flex-direction: row;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 30px;
  padding: 20px 40px;
  width: 835px;
  height: 330px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  margin-right: 20px;
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 24px;
  margin: 0;
  font-family: "Georgia", serif;
`;

const Title = styled.p`
  font-size: 18px;
  color: #333;
  margin: 5px 0 0;
`;

const Location = styled.p`
  font-size: 14px;
  color: #777;
  margin: 5px 0 20px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #444;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

export default App;
