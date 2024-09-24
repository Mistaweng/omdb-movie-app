import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import movieService from "../services/movieService";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await movieService.getMovieById(id);
        setMovieDetails(response);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>Year: {movieDetails.year}</p>
    </div>
  );
};

export default MovieDetails;
