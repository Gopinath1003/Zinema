import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";

function Watched() {
  const { watched } = useMovieContext();
  if (watched) {
    return (
      <div>
        <h1 className="p-4 font-bold text-2xl font-mono ">Favourites</h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 transition">
          {watched.map((movie) => (
            <MovieCard movie={movie} key={movie.id}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Watched;
