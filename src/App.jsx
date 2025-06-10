import React, { useState } from 'react';
import MovieList from './components/MovieList.jsx';
import Filter from './components/MovieFilter.jsx';
import AddMovie from './components/AddMovie';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Shadow Force (2025)',
      description: 'A thrilling action-packed adventure.',
      posterURL: 'https://fzmovies.ng/wp-content/uploads/2025/05/l82AmqBBnD2O-675x1013.webp',
      rating: 8.8,
      link: 'https://www.lulacloud.com/d/BsjmQuYVH05-shadow-force-2025-awafim-tv-mkv' // watch link
    },
    {
      title: 'The Matrix (1999)',
      description: 'Welcome to the real world.',
      posterURL: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPail1A1ihQB2KAUOBpO3YPz01-u-r1UhedD2LCwv680oYlb6hPe8y31Oym7eR5WsGifEmXRiuj0ssE151JBvuZ38OzYpH-HRfyU_duuORxG6PpJvuWWrIRwrHGQ7IsXtT7PLY16ZVowoqszUzVGZf6xOVYjn_TnqBUpsu5eam3-d9MVi09WhgMxcJstE/w133-h200/oYoO8m91y040.webp',
      rating: 8.7,
      link: 'https://www.lulacloud.com/d/LDXORsTBH01-the-matrix-1999-awafim-tv-mkv' // watch link
    },
    {
      title: 'Straw (2025)',
      description: 'A gripping tale of survival.',
      posterURL: 'https://fzmovies.ng/wp-content/uploads/2025/06/QVwxm40gDBnm-675x1013.webp',
      rating: 8.6,
      link: 'https://www.lulacloud.com/d/QIaMQQTcE07-straw-2025-awafim-tv-mkv' // watch link
    },
    {
      title: 'Chaava (2025)',
      description: 'A heartwarming story of friendship.',
      posterURL: 'https://fzmovies.ng/wp-content/uploads/2025/04/l38gopJwR02V-1-675x1013.webp',
      rating: 8.5,
      link: 'https://www.lulacloud.com/d/MDbCzJYTj62-chhaava-2025-awafim-tv-mkv' // watch link
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
    <div>
      <h1>🎥 QS-Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        rateFilter={rateFilter}
        setRateFilter={setRateFilter}
      />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
