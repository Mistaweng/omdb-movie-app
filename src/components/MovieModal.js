import React from 'react';
import '../styles/MovieModal.css'; 

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <img src={movie.poster} alt={movie.title} className="modal-poster" />
        <h2>{movie.title} ({movie.year})</h2>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Actors:</strong> {movie.actors}</p>
        <p><strong>Plot:</strong> {movie.plot}</p>
      </div>
    </div>
  );
};

export default MovieModal;
