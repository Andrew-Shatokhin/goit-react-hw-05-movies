import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../fetchMovies';
import { List } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchReviews(movieId);

        setReviews(data);
      } catch (error) {
        toast.error('Sorry, something is wrong with reviews request!', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    })();
  }, [movieId]);

  return (
    <div>
      {reviews && !!reviews.length ? (
        <List>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <b>Author: {author}</b>
              <p>{content}</p>
            </li>
          ))}
        </List>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
      <ToastContainer autoClose={1500} />
    </div>
  );
};
export default Reviews;
