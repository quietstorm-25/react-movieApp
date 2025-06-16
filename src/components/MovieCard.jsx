import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="card">
    <Link to={`/movie/${encodeURIComponent(movie.title)}`}>
      <img src={movie.posterURL} alt={movie.title} width="200" />
    </Link>
    <h3>{movie.title}</h3>
    <p>⭐ {movie.rating}</p>
  </div>
);

export default MovieCard;
