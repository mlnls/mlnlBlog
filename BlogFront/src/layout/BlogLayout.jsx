import { Outlet } from "react-router-dom";
import BlogHeader from "../components/Blog/BlogHeader";
import BlogSidebar from "../components/Blog/BlogSidebar";
import styled from "styled-components";

const BlogLayout = () => {
  return (
    <Container>
      <BlogHeader />
      <Main>
        <BlogSidebar />
        <ContentArea>
          <Outlet />
        </ContentArea>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 1024px;
`;

const Main = styled.div`
  display: flex;
  flex: 1;
`;

const ContentArea = styled.div`
  flex: 1;
`;

export default BlogLayout;
