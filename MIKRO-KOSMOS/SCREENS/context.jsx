// FavouriteContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const FavouriteContext = createContext();

// Create the provider component
export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Add item to favourites
  const addFavourite = (item) => {
    setFavourites((prevFavourites) => [...prevFavourites, item]);
  };

  // Remove item from favourites
  const removeFavourite = (item) => {
    setFavourites((prevFavourites) => prevFavourites.filter(fav => fav.id !== item.id));
  };

  // Context value to be provided to the children
  return (
    <FavouriteContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};
