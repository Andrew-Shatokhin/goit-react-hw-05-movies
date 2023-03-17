import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useSearchParams} from 'react-router-dom';
import { fetchSearchMovie } from 'fetchMovies';
import MovieList from 'components/MovieList';

const Movies = () => {
  const [value, setValue] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();


  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.warn('The search string cannot be empty!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setSearchParams(query !== '' ? { query } : {});
    setQuery('');
  };

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    if (!query) {
      return;
    }
    (async () => {
      try {
        const data = await fetchSearchMovie(query);

        setValue(data);
      } catch {
        console.log(Error);
      }
    })();
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder=""
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={value} />
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default Movies;
