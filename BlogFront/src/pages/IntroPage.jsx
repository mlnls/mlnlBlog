import React from "react";
import styled from "styled-components";

const IntroPage = () => {
  return (
    <Container>
      <Section>
        <Card>
          <CardHeader>Education</CardHeader>
          <CardContent>
            <ListItem>
              <strong>SoongSil University : Software</strong>
              <span>2020.01 ~ present</span>
            </ListItem>
            <ListItem>
              <strong>UMC : University Make Challenge 7th</strong>
              <span>2024.09 ~ present</span>
            </ListItem>
            <ListItem>
              <strong>SCCC : Soongsil Computer Contest Club</strong>
              <span>2024.09 ~ present</span>
            </ListItem>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Certificate</CardHeader>
          <CardContent>
            <span>No certificates listed.</span>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Card>
          <CardHeader>Tech Skills</CardHeader>
          <SkillGrid>
            <SkillCard>
              <SkillTitle>Languages</SkillTitle>
              <SkillList>
                <li>C</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </SkillList>
            </SkillCard>
            <SkillCard>
              <SkillTitle>FrontEnd</SkillTitle>
              <SkillList>
                <li>React</li>
                <li>Next.js</li>
              </SkillList>
            </SkillCard>
            <SkillCard>
              <SkillTitle>BackEnd</SkillTitle>
              <SkillList>
                <li>Node.js</li>
                <li>Express</li>
              </SkillList>
            </SkillCard>
            <SkillCard>
              <SkillTitle>Database</SkillTitle>
              <SkillList>
                <li>MySQL</li>
                <li>MongoDB</li>
              </SkillList>
            </SkillCard>
            <SkillCard>
              <SkillTitle>DevOps</SkillTitle>
              <SkillList>
                <li>Docker</li>
                <li>Kubernetes</li>
              </SkillList>
            </SkillCard>
            <SkillCard>
              <SkillTitle>Tools</SkillTitle>
              <SkillList>
                <li>VSCode</li>
                <li>Swagger</li>
                <li>Notion</li>
                <li>Trello</li>
              </SkillList>
            </SkillCard>
          </SkillGrid>
        </Card>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Card = styled.div`
  background-color: #e0e0e0;
  border-radius: 20px;
  padding: 20px;
  width: 48%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
  font-family: "Josefin Slab", serif;
`;

const CardContent = styled.div`
  font-size: 16px;
  color: #555;
`;

const ListItem = styled.div`
  margin-bottom: 10px;
  strong {
    display: block;
    color: #000;
  }
  span {
    font-size: 14px;
    color: #777;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SkillTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

const SkillList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    font-size: 14px;
    margin-bottom: 5px;
    color: #555;
  }
`;

export default IntroPage;
