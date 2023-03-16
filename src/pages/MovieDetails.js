import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../fetchMovies';


export const MovieDetails = () => {
  const [movieDetails, setmovieDetails] = useState({});

  const { id } = useParams();



    useEffect(() => {
      async function createMovieDetails() {
        try {
          const data = await fetchMovieDetails(id);

          setmovieDetails(data);
        } catch (error) {
          console.log(error);
        }
      }

      createMovieDetails();
    }, [id]);

  return (
    <div>
      {movieDetails && (
        <div>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
                : `http://www.suryalaya.org/images/no_image.jpg`
            }
            alt=""
          />
          <h2>{movieDetails.original_title}</h2>
          <p>User score:{} %</p>
          <p>Overview</p>
          <p>{movieDetails.overview}</p>
          <p>Genres</p>
          <p>{movieDetails.genres}</p>
        </div>
      )}
    </div>
  );
};

