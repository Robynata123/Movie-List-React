import React, { useState,useEffect } from 'react';
import '../style/movie.css';
import { Link } from 'react-router-dom';
import Movie from '../components/Movie';

const Cards = () => {
    const [data, setData] = useState([]);
    
    const handleApiChange = async (apiUrl) => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setData(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        handleApiChange(import.meta.env.VITE_APP_NOW_PLAYING_MOVIE);
    }, []);

    return (
        <>
 <div className="container">
                {/* buttons */}
                <Movie setMovie={setData} />
                <div className='daftar flex flex-wrap'>
                    {data.map(movie => (
                        <Link to={`/deskripsi/${movie.id}`} key={movie.id}>
                            <div className='card position: relative m-[2vh] w-[20vh] bg-white rounded-[4.4vh] overflow-hidden shadow-[0_1.875vh_4.375vh_rgba(0,0,0,0.25)]'>
                                <div className='movie-item relative'>
                                    <div className='poster relative'>
                                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                                        <div className="details absolute bottom-0 left-0 w-full p-[1vh] opacity-0 transition-opacity duration-500 ease-in-out">
                                            {movie.name && 
                                                <h1 className='bold overflow-hidden text-white text-ellipsis whitespace-nowrap'>{movie.name}</h1>
                                            }
                                            {movie.title && 
                                                <h1 className='bold overflow-hidden text-white text-ellipsis whitespace-nowrap'>{movie.title}</h1>
                                            }
                                            <p className='overflow-hidden text-white'>{movie.vote_average}/10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cards;
