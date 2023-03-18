import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'fetchMovies';
import MovieList from 'components/MovieList/MovieList';
import { Input, SearchFormButton, Form } from './Movies.styled';

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

          if (data.length === 0) {
            return toast.error(`No results found for ${query}`, {
              position: toast.POSITION.TOP_CENTER,
            });
          }

        setValue(data);
      } catch (error){
       toast.error(error.message);
      }
    })();
  }, [searchParams, value.length]);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder=""
          value={query}
          onChange={handleChange}
        />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </Form>
      <MovieList movies={value} />
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default Movies;
