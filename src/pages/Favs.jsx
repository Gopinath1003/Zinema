import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";

function Favs() {
  const { favs } = useMovieContext();
  if (favs) {
    return (
      <div>
        <h1 className="p-4 font-bold text-2xl font-mono ">Favourites</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 transition">
          {favs.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Favs;
