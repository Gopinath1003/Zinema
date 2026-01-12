import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/api";
import { searchMovie } from "../services/api";
import MovieCard from "../components/MovieCard";
import Timer from "../components/Timer";
import Favs from "./Favs";

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getPopularMovies()
      .then((res) => setMovies(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if(!query.trim())  return;

    const timer = setTimeout(() => {
      searchMovie(query)
      .then((res) => setMovies(res))
      .catch((err) => console.log(err));
    },500)

    return () => clearTimeout(timer)
  },[query]);
  

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    searchMovie(query)
      .then((res) => setMovies(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-1">
      <div className="flex justify-center items-center py-6">
        <form onSubmit={handleSubmit} action="">
          <input
          type="text"
          placeholder="Search for Movies..."
          value={query}
          onChange={handleQueryChange}
          className="w-[300px] border border-gray-400 rounded-3xl pl-6 p-2 mr-1  active:border-gray-500"
        />
        <button
          type="submit"
          className="w-[90px] bg-orange-400 hover:bg-amber-600 cursor-pointer transition hover:scale-103 text-white p-2 rounded-3xl"

        >
          Search
        </button>
        </form>
        
      </div>
      <h1 className="p-4 font-bold text-2xl font-mono ">Popular Movies</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 transition">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
