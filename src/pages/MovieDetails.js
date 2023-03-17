import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../fetchMovies';
import { Link, Outlet } from 'react-router-dom';


export const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();
  console.log(movieId);

   const location = useLocation();
  //  const backLinkHref = location.state?.from ?? '/';
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
      (async () => {
        try {
          const data = await fetchMovieDetails(movieId);

          setMovie(data);
        } catch (error) {
          console.log(Error);
        }
      })();
    }, [movieId]);


  return (
    <div>
      <Link to={backLinkLocationRef.current}>
        <button type="button">Go back</button>
      </Link>

      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
      <h2>
        {movie.title} <span>({movie.release_date?.slice(0, 4)})</span>
      </h2>
      <p>User score: {Math.round(movie.vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h4>Gengers</h4>
      <p>{movie.genres?.map(genre => genre.name).join(', ')}</p>
      {/* <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : `http://www.suryalaya.org/images/no_image.jpg`
        }
        alt=""
      />
      <h2>Title:{movie.title}</h2>
      <p>User score:{movie.popularity} %</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movie.genres}</p> */}
      <ul>
        <p>Additional information</p>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

