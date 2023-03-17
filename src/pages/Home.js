import { useState, useEffect} from 'react';
import MovieList from 'components/MovieList';
import { fetchTrendingMovies } from '../fetchMovies';


const Home = () => {
  const [movies, setMovies] = useState([]);




  const createTrandingMovies = async () => {
  try {
    const response = await fetchTrendingMovies();

    setMovies(response);
  } catch (error) {
    alert('Sorry something wrong. Check the internet and try reload.');
    console.log(error);
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
      <h1>Trending today</h1>

      <MovieList movies={movies} />
    </main>
  );
};
export default Home;
