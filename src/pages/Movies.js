// import fetchMovies from '../fetchMovies'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {

  const [value, setValue] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const nameMovie = searchParams.get('name') ?? "";

  useEffect(() => {

  }, [])


  const handleChange = e => {
      setSearchParams({ name: e.target.value.toLowerCase()})}
    // setValue(event.currentTarget.value.toLowerCase());



  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {

      return alert('The search string cannot be empty!');

    }

    setValue(value);
    setValue('');

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder=""
          value={nameMovie}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        <li>{}</li>
      </ul>
    </div>
  );
}

export default Movies;
