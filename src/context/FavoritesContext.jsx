import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (project) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.id === project.id);

      if (exists) {
        return prev.filter((p) => p.id !== project.id);
      } else {
        return [...prev, project];
      }
    });
  };

  const isFavorite = (id) => {
    return favorites.some((p) => p.id === id);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);