import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import movieService from "../services/movieService";
import MovieModal from "../components/MovieModal";  

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);  
  const [isModalOpen, setIsModalOpen] = useState(false);    

  const searchMovies = async (term) => {
    if (!term) return;

    try {
      const response = await movieService.searchMovies(term);
      setMovies(response);
      saveSearchToHistory(term);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const saveSearchToHistory = (query) => {
    const existingHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    const updatedHistory = [query, ...existingHistory.slice(0, 4)];
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    setSearchHistory(updatedHistory);
  };

  const fetchMovieDetails = async (imdbID) => {
    try {
      const response = await movieService.getMovieDetails(imdbID);  
      setSelectedMovie(response);  
      setIsModalOpen(true);  
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    const initialHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(initialHistory);
  }, []);

  return (
    <div className="app">
      <h1>OMDB Movie App</h1>
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        searchMovies={searchMovies} 
      />
      <div className="container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} onClick={() => fetchMovieDetails(movie.imdbID)}>
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <div>No movies found</div>
        )}
      </div>

      <h2>Search History:</h2>
      <ul>
        {searchHistory.map((query, index) => (
          <li key={index}>{query}</li>
        ))}
      </ul>

      {isModalOpen && selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Home;
