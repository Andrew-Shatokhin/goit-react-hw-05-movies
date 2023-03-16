import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { StyledLink, Header } from './App.styled';

import { Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import NotFound from '../pages/NotFound';

export const App = () => {
  return (
    <Layout>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </Layout>
  );
};
