import { Outlet } from "react-router-dom";
import styled from "styled-components";
import IntroHeader from "../components/Intro/IntroHeader";

const IntroLayout = () => {
  return (
    <Container>
      <IntroHeader />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

const Container = styled.div``;

const Main = styled.div``;

export default IntroLayout;
