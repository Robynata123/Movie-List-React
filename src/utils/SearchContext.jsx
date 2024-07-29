import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState('');
  const [movies, setMovies] = useState([])

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, filteredMovies, setFilteredMovies, movies, setMovies }}>
      {children}
    </SearchContext.Provider>
  );
};
