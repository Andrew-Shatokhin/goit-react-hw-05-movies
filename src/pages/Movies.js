import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
   setSearchParams(query !== '' ? { query } : {});
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
    </div>
  );
}

export default Movies;




