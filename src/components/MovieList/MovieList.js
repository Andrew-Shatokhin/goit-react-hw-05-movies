
import PropTypes from 'prop-types';
import { Item, List, Image, Title, Link } from './MovieList.styled';

const { useLocation } = require('react-router-dom');

const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
const placeHolder =
  'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <List>
        {movies.map(({ id, title, poster_path, name }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Image
                src={poster_path ? baseImgUrl + poster_path : placeHolder}
                alt={name}
                width="250"
              />
              <Title>{title}</Title>
            </Link>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
