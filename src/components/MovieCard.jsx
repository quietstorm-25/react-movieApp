import React from 'react';

const MovieCard = ({ movie }) => (
  <div className="card">
    <a href={movie.link} target="_blank" rel="noopener noreferrer">
      <img src={movie.posterURL} alt={movie.title} width="200" />
    </a>
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
    <p>⭐ {movie.rating}</p>
  </div>
);

export default MovieCard;
