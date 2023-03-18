import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../fetchMovies';
import { List, Image, ActorName } from './Cast.styled';

const placeHolder =
  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';
const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCast(movieId);
        setActors(data);
      } catch (error){
       toast.error('Sorry, something is wrong with cast request! ', {
         position: toast.POSITION.TOP_CENTER,
       });
      }
    })();
  }, [movieId]);

  return (
    <div>
      {actors && !!actors.length ? (
        <List>
          {actors.map(({ id, profile_path, name }) => (
            <li key={id}>
              <Image
                src={profile_path ? baseImgUrl + profile_path : placeHolder}
                alt={name}
              />
              <ActorName>{name}</ActorName>
            </li>
          ))}
        </List>
      ) : (
        <div>There is no information about the cast of the movie</div>
      )}
      <ToastContainer autoClose={1500} />
    </div>
  );
};
export default Cast;
