import { useMovieContext } from "../context/MovieContext";
function MovieCard({ movie }) {
  const {
    isFavorite,
    addToFavs,
    removeFromFavs,
    isInWatchlist,
    addToWatchlist,
    removeFromWatchlist,
    isWatched,
    addToWatched,
    removeFromWatched,
  } = useMovieContext();

  const fav = isFavorite(movie.id);

  function handleFavs(e) {
    e.preventDefault();
    if (fav) removeFromFavs(movie.id);
    else addToFavs(movie);
  }

  const watched = isWatched(movie.id);

  function handleWatched(e) {
    e.preventDefault();
    watched ? removeFromWatched(movie.id) : addToWatched(movie);
  }
  const inWatchlist = isInWatchlist(movie.id);

  function handleWatchlist(e) {
    e.preventDefault();
    inWatchlist ? removeFromWatchlist(movie.id) : addToWatchlist(movie);
  }

  const votePercent = Math.round(movie.vote_average * 10);

const voteBg =
  votePercent >= 80
    ? "bg-green-700"
    : votePercent >= 65
    ? "bg-green-400"
    : votePercent >= 50
    ? "bg-yellow-400"
    : votePercent >= 35
    ? "bg-orange-500"
    : "bg-red-600";


  return (
    <div
      className="group flex flex-col w-full rounded-lg border border-gray-300 
                hover:shadow-xl hover:scale-101 transition"
    >
      <div className="w-full relative">
        <img
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <div
  className={`absolute -bottom-3 left-1.5 p-2 rounded-4xl
    text-white border-2 border-white ${voteBg}`}
>
  {votePercent}
  <span className="text-[9px]">%</span>
</div>

        <div
          className="absolute top-0 right-0 p-2 flex flex-col gap-2
             opacity-0 -translate-y-3
             group-hover:opacity-100 group-hover:translate-y-0
             transition-all duration-300 ease-out"
        >
          <button
            className="p-2 w-10 bg-gray-200 rounded-full hover:bg-red-200 transition cursor-pointer"
            onClick={handleFavs}
          >
            <i
              className={`fa-heart ${
                fav ? "fa-solid text-red-500" : "fa-regular"
              }`}
            ></i>
          </button>
          <button
            className={`p-2 w-10 rounded-3xl cursor-pointer transition
    ${watched ? "bg-amber-500" : "bg-gray-200 hover:bg-gray-300"}
  `}
            onClick={handleWatched}
          >
            <i className="fa-solid fa-check"></i>
          </button>

          <button
            className={`p-2 w-10 rounded-3xl cursor-pointer transition
    ${inWatchlist ? "bg-amber-500" : "bg-gray-200 hover:bg-gray-300"}
  `}
            onClick={handleWatchlist}
          >
            <i className={`fa-bookmark ${
                inWatchlist ? "fa-solid" : "fa-regular"
              }`}></i>
          </button>
        </div>
      </div>
      <div className="mt-4 p-3 flex justify-between">
        <div>
          <p className="text-gray-600">{movie.release_date}</p>
          <h5 className="font-black text-md font-bold">{movie.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
