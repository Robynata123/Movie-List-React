import React,{ useState, useEffect } from 'react';

const Movie = ({ setMovie }) => {
  // const [data, setData] = useState([]);

  const handleApiChange = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setMovie(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleApiChange(import.meta.env.VITE_APP_NOW_PLAYING_MOVIE);
}, []);

  return (
    <div>
      {/* Button Section */}
      <div className="inline-flex rounded-md shadow-sm m-[5vh]" role="group">
        <button
          onClick={() => handleApiChange(import.meta.env.VITE_APP_NOW_PLAYING_MOVIE)}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Now Playing
        </button>
        <button
          onClick={() => handleApiChange(import.meta.env.VITE_APP_POPULAR_MOVIE)}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-r border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Popular
        </button>
        <button
          onClick={() => handleApiChange(import.meta.env.VITE_APP_TOP_RATED_MOVIE)}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Top Rated
        </button>
        <button
        onClick={() => handleApiChange(import.meta.env.VITE_APP_UPCOMING_MOVIE)}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Upcoming
        </button>
      </div>
    </div>
  );
};

export default Movie;
