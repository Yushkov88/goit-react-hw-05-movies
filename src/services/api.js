import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    '/trending/movie/day?api_key=14b75bd60be4e1f55dd0eb69335e5049'
  );
  return response.data;
};

function fetchMoviesWithId(id) {
  const response = axios.get(
    `/movie/${id}?api_key=14b75bd60be4e1f55dd0eb69335e5049`
  );
  return response;
}

function fetchMoviesWithQuery(query) {
  const response = axios.get(
    `/search/movie?api_key=14b75bd60be4e1f55dd0eb69335e5049&query=${query}`
  );
  return response;
}

function fetchCast(id) {
  const response = axios.get(
    `/movie/${id}/credits?api_key=14b75bd60be4e1f55dd0eb69335e5049`
  );
  return response;
}

function fetchReview(id) {
  const response = axios.get(
    `/movie/${id}/reviews?api_key=14b75bd60be4e1f55dd0eb69335e5049`
  );
  return response;
}

const api = {
  getTrendingMovies,
  fetchMoviesWithId,
  fetchMoviesWithQuery,
  fetchCast,
  fetchReview,
};

export default api;

fetchMoviesWithId.propTypes = {
  id: PropTypes.number.isRequired,
};

fetchMoviesWithQuery.propTypes = {
  query: PropTypes.string.isRequired,
};

fetchCast.propTypes = {
  id: PropTypes.number.isRequired,
};

fetchReview.propTypes = {
  id: PropTypes.number.isRequired,
};
