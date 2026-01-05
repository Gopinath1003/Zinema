import axios from "axios";

const API_KEY = "4f63d8d2dc46ecb660c356ef26c147a8";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async() => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = response.data.results;
    console.log(data);
    return data;
}

export const searchMovie = (query) => {
    return axios.get(`${BASE_URL}/search/movie`,{
        params : {
            api_key : API_KEY,
            query
        }
    });
};