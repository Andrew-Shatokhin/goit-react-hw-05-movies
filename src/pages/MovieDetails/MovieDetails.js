import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TfiArrowLeft } from 'react-icons/tfi';
import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../fetchMovies';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  GoBackButton,
  LinkButton,
  Span,
  MovieBox,
  List,
} from './MovieDetail.styled';

const baseImgUrl = 'https://image.tmdb.org/t/p/w300';
const placeHolder =
  'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();
  // console.log(movieId);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMovieDetails(movieId);

        setMovie(data);
      } catch (error) {
        toast.error('Sorry, something is wrong with movie info request!', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    })();
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <div>
      <LinkButton to={backLinkLocationRef.current}>
        <GoBackButton type="button">
          <TfiArrowLeft></TfiArrowLeft>
          <Span>Go back</Span>
        </GoBackButton>
      </LinkButton>

      <MovieBox>
        <img
          src={poster_path ? baseImgUrl + poster_path : placeHolder}
          alt={title}
          width="250"
        />
        <div>
          <h2>
            {title} <span>({release_date?.slice(0, 4)})</span>
          </h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview || 'Sorry, overview not found!'}</p>
          <h4>Genres</h4>
          <p>
            {genres?.map(genre => genre.name).join(', ') ||
              'Sorry, genres not found!'}
          </p>
        </div>
      </MovieBox>

      <List>
        <b>Additional information</b>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </List>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default MovieDetails;
