import { Outlet } from "react-router-dom";
import ProjectHeader from "../components/Project/ProjectHeader";
import styled from "styled-components";

const ProjectLayout = () => {
  return (
    <Container>
      <ProjectHeader />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

const Container = styled.div``;

const Main = styled.div``;

export default ProjectLayout;
