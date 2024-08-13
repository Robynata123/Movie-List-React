import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useMultiApi from '../utils/useMultiApi';

const DescriptionPage = () => {
  const { id } = useParams();
  const apiConfigs = useMemo(() => [
    { url: import.meta.env.VITE_APP_NOW_PLAYING_MOVIE },
    { url: import.meta.env.VITE_APP_POPULAR_MOVIE },
    { url: import.meta.env.VITE_APP_TOP_RATED_MOVIE },
    { url: import.meta.env.VITE_APP_UPCOMING_MOVIE },
    { url: import.meta.env.VITE_APP_TV },
    { url: import.meta.env.VITE_APP_TV_POPULAR_API },
    { url: import.meta.env.VITE_APP_TV_TOP_RATE },
    { url: import.meta.env.VITE_APP_TV_TRENDING }
  ], []);

  const { data, loading, error } = useMultiApi(apiConfigs);
  const [content, setContent] = useState(null);

  const combinedData = useMemo(() => Object.values(data).flat(), [data]);

  useEffect(() => {
    if (combinedData.length > 0) {
      const selectedContent = combinedData.find(item => item.id === parseInt(id));
      setContent(selectedContent);
    }
  }, [id, combinedData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <div className="min-h-screen text-black flex justify-center items-center p-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start max-w-4xl">
        <img
          src={`https://image.tmdb.org/t/p/w200${content.poster_path}`}
          alt={content.title || content.name}
          className="rounded-lg shadow-lg sm:w-48 w-40"
        />
        <div className="sm:ml-8 mt-6 sm:mt-0 text-center sm:text-left">
          <h1 className="text-2xl font-bold">{content.title || content.name}</h1>
          <h2 className="mt-2 text-sm font-medium text-gray-400">{content.genre_ids.join(', ')}</h2>
          <p className="mt-4 text-base leading-relaxed text-black max-w-2xl">{content.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
