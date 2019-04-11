import axios from "axios";
import { TMDB_HOST, TMDB_API_KEY } from "../config/constants";

export const getMoviesAPI = ({ category, page = 1 }) => {
    return axios.get(`${TMDB_HOST}/movie/${category}?api_key=${TMDB_API_KEY}&page=${page}`)
}

export const searchMovieAPI = ({ query, page = 1 }) => {
    return axios.get(`${TMDB_HOST}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${page}`)
}

export const getMovieDetailAPI = (id) => {
    return axios.get(`${TMDB_HOST}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos,images,casts`)
}