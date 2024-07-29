import React, { useState, useEffect, useContext, forwardRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchContext } from '../utils/SearchContext';

const Banner = forwardRef((props, ref) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  const { setSearchTerm, setFilteredMovies, movies } = useContext(SearchContext);
  
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    setFilteredMovies(movies.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase())));
  };

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_APP_NOW_PLAYING_MOVIE; 
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const result = await response.json();
          setData(result.results);
          setError(null); // Clear any previous errors
        } else {
          const text = await response.text(); // Get response as text
          throw new Error(`Response is not in JSON format. Response text: ${text}`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message); // Store the error message for display
      }
    };

    if (apiUrl) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(current => (current + 1) % data.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [data]);

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div id="default-carousel" className="relative flex flex-col md:flex-row justify-between">
      <div className="relative overflow-hidden rounded-lg h-[355px] w-[280px] md:w-[50%] m-[2vh] ml-[5vh]">
        {data.map((movie, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="absolute block w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="w-full md:w-[50%] m-[5vh]">
        <h1 className="font-bold text-2xl">Temukan Film yang ingin anda tonton</h1>
        <div className="bg-color-primary w-full md:w-[25vh] h-[7vh] p-[0.4rem_1rem] rounded-[2vh] flex items-center gap-[0.5rem]">
          <FaSearch />
          <input
            className="border-none h-[3vh] w-full focus:outline-none rounded-lg"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
});

export default Banner;
