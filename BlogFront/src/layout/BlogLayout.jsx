import { Outlet } from "react-router-dom";
import BlogHeader from "../components/Blog/BlogHeader";
import styled from "styled-components";

const BlogLayout = () => {
  return (
    <Container>
      <BlogHeader />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

const Container = styled.div``;

const Main = styled.div``;

export default BlogLayout;
