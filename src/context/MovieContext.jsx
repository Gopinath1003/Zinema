import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

// Storage keys
const FAV_KEY = "favorites";
const WATCHLIST_KEY = "watchlist";
const WATCHED_KEY = "watched";

// Safe localStorage loader
const loadFromStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const MovieProvider = ({ children }) => {
  const [favs, setFavs] = useState(() => loadFromStorage(FAV_KEY));
  const [watchlist, setWatchlist] = useState(() => loadFromStorage(WATCHLIST_KEY));
  const [watched, setWatched] = useState(() => loadFromStorage(WATCHED_KEY));

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  }, [favs]);

  useEffect(() => {
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    localStorage.setItem(WATCHED_KEY, JSON.stringify(watched));
  }, [watched]);

  /* ---------- Favorites ---------- */
  const addToFavs = (movie) => {
    setFavs((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const removeFromFavs = (id) => {
    setFavs((prev) => prev.filter((m) => m.id !== id));
  };

  const isFavorite = (id) => favs.some((m) => m.id === id);

  /* ---------- Watchlist ---------- */
  const addToWatchlist = (movie) => {
    setWatchlist((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== id));
  };

  const isInWatchlist = (id) => watchlist.some((m) => m.id === id);

  /* ---------- Watched ---------- */
  const addToWatched = (movie) => {
    setWatched((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const removeFromWatched = (id) => {
    setWatched((prev) => prev.filter((m) => m.id !== id));
  };

  const isWatched = (id) => watched.some((m) => m.id === id);

  const value = {
    favs,
    watchlist,
    watched,
    addToFavs,
    removeFromFavs,
    isFavorite,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    addToWatched,
    removeFromWatched,
    isWatched,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
