import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const MoviesContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setmovies] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(599);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setmovies,
        isOpen,
        setIsOpen,
        price,
        setPrice,
        rentMovie,
        buyMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MovieProvider;
