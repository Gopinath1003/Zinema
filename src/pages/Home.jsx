import { useState, useEffect } from "react";
import { getPopularMovies, searchMovie } from "../services/api";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]); // ✅ new
  const [query, setQuery] = useState("");

  // Fetch popular movies ONCE
  useEffect(() => {
    getPopularMovies()
      .then((res) => {
        setMovies(res);
        setPopularMovies(res); // ✅ save original
      })
      .catch((err) => console.log(err));
  }, []);

  // Debounced search
  useEffect(() => {
    // ✅ If input empty → restore popular movies
    if (!query.trim()) {
      setMovies(popularMovies);
      return;
    }

    const timer = setTimeout(() => {
      searchMovie(query)
        .then((res) => setMovies(res))
        .catch((err) => console.log(err));
    }, 500);

    return () => clearTimeout(timer);
  }, [query, popularMovies]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setMovies(popularMovies); // ✅ safety
      return;
    }

    searchMovie(query)
      .then((res) => setMovies(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-1">
      <div className="flex justify-center items-center py-6">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for Movies..."
            value={query}
            onChange={handleQueryChange}
            className="w-[300px] border border-gray-400 rounded-3xl pl-6 p-2 mr-1"
          />
          <button
            type="submit"
            className="w-[90px] bg-orange-400 hover:bg-amber-600 transition text-white p-2 rounded-3xl"
          >
            Search
          </button>
        </form>
      </div>

      <h1 className="p-4 font-bold text-2xl font-mono">
        {query ? "Search Results" : "Popular Movies"}
      </h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
