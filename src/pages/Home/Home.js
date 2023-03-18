import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../fetchMovies';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const createTrandingMovies = async () => {
    try {
      const response = await fetchTrendingMovies();

      setMovies(response);
    } catch (error) {
      toast.error('Sorry something wrong. Check the internet and try reload!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    if (movies.length > 0) {
      return;
    }
    createTrandingMovies();
  }, [movies]);

  if (movies.length < 0) {
    return;
  }

  return (
    <main>
      <Title>Trending today</Title>
      <MovieList movies={movies} />
      <ToastContainer autoClose={1500} />
    </main>
  );
};
export default Home;
