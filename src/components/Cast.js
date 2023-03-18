import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../fetchMovies'

const placeHolder ='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';
const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {

  const [actors, setActors] = useState([]);
  const { movieId } = useParams();


  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCast(movieId);
        setActors(data);
      } catch {
        console.log(Error);
      }
    })();
  }, [movieId]);


  return (
    <div>
      {actors && !!actors.length ? (
        <ul>
          {actors.map(({ id, profile_path, name }) => (
            <li key={id}>
              <img
                src={profile_path ? baseImgUrl + profile_path : placeHolder}
                alt={name} width='200'
              />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>There is no information about the cast of the movie</div>
      )}

    </div>
  );
};
export default Cast;
