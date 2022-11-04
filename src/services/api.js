import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    '/trending/movie/day?api_key=14b75bd60be4e1f55dd0eb69335e5049'
  );
  return response.data;
};
