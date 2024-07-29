import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TvSectionPage = () => {
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
    handleApiChange(import.meta.env.VITE_APP_TV);
}, []);

  return (
    <div>
      {/* Button Section */}
      <div className="inline-flex rounded-md shadow-sm m-[5vh]" role="group">
        <button
          onClick={() => handleApiChange(import.meta.env.VITE_APP_TV)}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Popular
        </button>
        <button
          onClick={() => handleApiChange(import.meta.env.VITE_APP_TV_POPULAR)}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-r border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Popular
        </button>
        {/* <button
          onClick={() => handleApiChange(import.meta.env.VITE_APP_TV_TRENDING)}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Tending
        </button> */}
        <button
        onClick={() => handleApiChange(import.meta.env.VITE_APP_TV_TRENDING)}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Tending
        </button>
      </div>
      {/* End of button */}

      {/* Movie Section */}
      <div className="container">
                <div className='daftar flex flex-wrap'>
                    {data.map(movie => (
                        <Link to={`/deskripsi/${movie.id}`} replace key={movie.id}>
                            <div className='card position: relative m-[2vh] w-[20vh] bg-white rounded-[4.4vh] overflow-hidden shadow-[0_1.875vh_4.375vh_rgba(0,0,0,0.25)]'>
                                <div className='movie-item'>
                                    <div className='poster'>
                                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                                    </div>
                                    <div className="details">
                                        {movie.name && 
                                            <h1 className='bold'>{movie.name}</h1>
                                        }
                                        {movie.title && 
                                            <h1 className='bold'>{movie.title}</h1>
                                        }
                                        <p>{movie.vote_average}/10</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* end of movie section */}
    </div>
  );
};

export default TvSectionPage;