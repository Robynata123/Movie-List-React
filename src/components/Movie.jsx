import React, { useState, useEffect } from 'react';
import '../style/movie.css';

const Movie = ({ search }) => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=541b83373ef4b537447062ae7cfcf3da")
            .then(res => res.json())
            .then(json => setMovieList(json.results));
    };

    return (
        <div className='daftar flex flex-wrap'>
            {movieList
                .filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
                .map(movie => (
                    <div key={movie.id} className='movie-item'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h1 className='bold'>{movie.title}</h1>
                        <p>{movie.vote_average}/10</p>
                    </div>
                ))}
        </div>
    );
};

export default Movie;
