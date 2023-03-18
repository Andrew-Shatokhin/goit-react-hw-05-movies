
import {fetchReviews } from '../fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {

 const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();


  useEffect(() => {
    (async () => {
      try {
        const data = await fetchReviews(movieId);

        setReviews(data);
      } catch {
        console.log(Error);
      }
    })();
  }, [movieId]);




  return (
    <div>
      {reviews && !!reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </div>
  );
};
export default Reviews;
