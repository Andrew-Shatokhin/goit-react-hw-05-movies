import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../fetchMovies';
import { Link, Outlet } from 'react-router-dom';


export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);

  const { filmId } = useParams();



    useEffect(() => {
      (async () => {
        try {
          const data = await fetchMovieDetails(filmId);

          setMovie(data);
        } catch (error) {
          console.log(Error);
        }
      })();

    }, [filmId]);

  return (
    <div>

        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : `http://www.suryalaya.org/images/no_image.jpg`
            }
            alt=""
          />
          <h2>Title:{movie.original_title}</h2>
          <p>User score:{movie.popularity} %</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres}</p>
        </div>

      <div>
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
    </div>
  );
};

