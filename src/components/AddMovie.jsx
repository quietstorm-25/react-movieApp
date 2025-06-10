import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: ''
    });

    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie({ ...newMovie, rating: parseFloat(newMovie.rating) });
        setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} required />

            <input name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} required />
            
            <input name="link" placeholder="Watch link (YouTube, Netflix, etc.)" value={newMovie.link} onChange={handleChange} />
            <input name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleChange} required />
            <input name="rating" type="number" placeholder="Rating" value={newMovie.rating} onChange={handleChange} required min="0" max="10" />
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovie;
