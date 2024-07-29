import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useMultiApi from '../utils/useMultiApi';
// import '../style/deskripsi.css'

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
    <div className='flex flex-col items-center '>
  <img
    src={`https://image.tmdb.org/t/p/w200${content.poster_path}`}
    alt={content.title}
    className="mx-auto"
  />
  {content.name && 
    <div className='text-center mt-4'>
      <h1 className='font-bold'>{content.name}</h1>
      <h2 className='mt-2'>{content.genre_ids.join(', ')}</h2>
      <p className='mt-2'>{content.overview}</p>
    </div>
  }
  {content.title && 
    <div className='text-center mt-4'>
      <h1 className='font-bold'>{content.title}</h1>
      <h2 className='mt-2'>{content.genre_ids.join(', ')}</h2>
      <p className='mt-2'>{content.overview}</p>
    </div>
  }
</div>

  );
};

export default DescriptionPage;
