// import PropTypes from 'prop-types';

import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const api_key = '39cac865cd97b5021efa5cb45c64bc17';


const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${api_key}`)
  console.log(response.data.results);

  return response.data.results;

};


const fetchMovieDetails = async (id) => {
  const resp = await axios.get(`movie/${id}?api_key=${api_key}&language=en-US`);
  console.log(resp.data);
 return resp.data;
};

console.log(fetchMovieDetails());

export { fetchTrendingMovies, fetchMovieDetails };
