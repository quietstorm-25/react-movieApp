import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList.jsx';
import Filter from './components/MovieFilter.jsx';
import AddMovie from './components/AddMovie';
import MovieDescription from './components/MovieDescription';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Shadow Force (2025)',
      description: 'A thrilling action-packed adventure.',
      posterURL: 'https://fzmovies.ng/wp-content/uploads/2025/05/l82AmqBBnD2O-675x1013.webp',
      rating: 8.8,
      trailer: 'https://youtube.com/embed/M7LhGytiHFM?si=leQwncSY_wZOvAvW'
    },
    {
      title: 'The Matrix (1999)',
      description: 'Welcome to the real world.',
      posterURL: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPail1A1ihQB2KAUOBpO3YPz01-u-r1UhedD2LCwv680oYlb6hPe8y31Oym7eR5WsGifEmXRiuj0ssE151JBvuZ38OzYpH-HRfyU_duuORxG6PpJvuWWrIRwrHGQ7IsXtT7PLY16ZVowoqszUzVGZf6xOVYjn_TnqBUpsu5eam3-d9MVi09WhgMxcJstE/w133-h200/oYoO8m91y040.webp',
      rating: 8.7,
      trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8'
    },
    {
      title: 'Straw (2025)',
      description: 'A gripping tale of survival.',
      posterURL: 'https://fzmovies.ng/wp-content/uploads/2025/06/QVwxm40gDBnm-675x1013.webp',
      rating: 8.6,
      trailer: 'https://youtube.com/embed/k1vWhii4tkE?si=e0Y-yrOBaonNWVVY'
    },
    {
      title: 'Chaava (2025)',
      description: 'A heartwarming story of friendship.',
      posterURL: 'https://fzmovies.ng/wp-content/uploads/2025/04/l38gopJwR02V-1-675x1013.webp',
      rating: 8.5,
      trailer: 'https://youtube.com/embed/hs3w32RG8L8?si=lnyUjHD91gIflY7V'
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (rateFilter === '' || movie.rating >= parseFloat(rateFilter))
  );

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <Router>
      <div>
        <h1>🎥 QS-Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
                <AddMovie addMovie={addMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movie/:title"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
