import GlobalStyle from './GlobalStyle';
import Layout from './Layout';
import { StyledLink, Header } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";

const SharedLayout = () => {
  return (
      <Layout>
        <Header>
          <nav>
            <StyledLink to="/" end>Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
      </Suspense>

      <GlobalStyle />
    </Layout>
  )
};

export default SharedLayout;
