// import PropTypes from 'prop-types';

import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const api_key = '39cac865cd97b5021efa5cb45c64bc17';


const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${api_key}`)
  // console.log(response.data.results);

  return response.data.results;

};


const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${api_key}&language=en-US`
  );
  // console.log(response);
  return response.data;
};


const fetchCast = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${api_key}&language=en-US`
  );
  // console.log(response.data.cast);

  return response.data.cast;
};


const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${api_key}&language=en-US&page=1`
  );


  return response.data.results;
};


const fetchSearchMovie = async movie => {
  const response = await axios.get(
    `search/movie?api_key=${api_key}&language=en-US&query=${movie}&page=1&include_adult=false`
  );
  // console.log(response.data.results);
  return response.data.results;
};



 export {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchSearchMovie,
  fetchCast,
  fetchReviews,
};

