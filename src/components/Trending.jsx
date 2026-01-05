import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";

function Trending(){
    const [trending,setTrending] = useState({});
    useEffect(() => {
        getPopularMovies().then(res => setTrending(res[0])).catch(err => console.log(err));
    },[])
    return(
        <div className="w-full h-80 bg-no-repeat p-15 text-white" style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/w300${trending.backdrop_path})`,
  }}>
            <div>
                <h1>{trending.title}</h1>
                <h3>{trending.release_date}</h3>
                <p>{Math.round(trending.vote_average * 10)}</p>
                <p>{trending.overview}</p>
            </div>
        </div>
    );
}

export default Trending;