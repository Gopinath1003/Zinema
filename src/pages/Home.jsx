import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/api";
import { searchMovie } from "../services/api";
import MovieCard from "../components/MovieCard";
import Timer from "../components/Timer";
import Favs from './Favs'

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getPopularMovies()
      .then((res) => setMovies(res))
      .catch((err) => console.log(err));
  }, []);

  const handleQuery = () => {
    searchMovie(query)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="pt-1">
      <div className="flex justify-center items-center py-6">
        <input
          type="text"
          placeholder="Search for Movies..."
          value={query}
          onChange={handleQueryChange}
          className="w-[300px] border border-gray-400 rounded-3xl pl-6 p-2 mr-1  active:border-gray-500"
      
        />
        <button
          className="w-[90px] bg-orange-400 hover:bg-amber-600 cursor-pointer transition hover:scale-103 text-white p-2 rounded-3xl"
          onClick={handleQuery}
        >
          Search
        </button>
      </div>
      <h1 className="p-4 font-bold text-2xl font-mono ">Popular Movies</h1>
      <div className="grid grid-cols-5 gap-y-4">
        {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      </div>
      
    </div>
  );
}

export default Home;
