import axios from 'axios';

const API_URL = 'https://omdb-movie-app-wrmx.onrender.com/api/Movie/';

const movieService = {
  searchMovies: async (title) => {
    const response = await axios.get(`${API_URL}search?title=${title}`);
    return response.data;
  },
  getMovieDetails: async (imdbID) => {
    const response = await axios.get(`${API_URL}${imdbID}`);
    return response.data;
  }
};

export default movieService;
