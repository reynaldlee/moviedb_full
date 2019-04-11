export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
export const GET_POPULAR_MOVIES_SUCCESS = "GET_POPULAR_MOVIES_SUCCESS";
export const GET_POPULAR_MOVIES_FAILED = "GET_POPULAR_MOVIES_FAILED";

export const GET_NOWPLAYING_MOVIES = "GET_NOWPLAYING_MOVIES";
export const GET_NOWPLAYING_MOVIES_SUCCESS = "GET_NOWPLAYING_MOVIES_SUCCESS";
export const GET_NOWPLAYING_MOVIES_FAILED = "GET_NOWPLAYING_MOVIES_FAILED";

export const GET_MOVIE_LIST = "GET_MOVIE_LIST";
export const GET_MOVIE_LIST_SUCCESS = "GET_MOVIE_LIST_SUCCESS";
export const GET_MOVIE_LIST_FAILED = "GET_MOVIE_LIST_FAILED";

export const CLEAR_MOVIE_LIST = "CLEAR_MOVIE_LIST";

export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const GET_MOVIE_DETAIL_SUCCESS = "GET_MOVIE_DETAIL_SUCCESS";
export const GET_MOVIE_DETAIL_FAILED = "GET_MOVIE_DETAIL_FAILED";

export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_FAILED = 'SEARCH_MOVIE_FAILED';

export const getPopularMovies = () => ({
    type: GET_POPULAR_MOVIES,
});

export const getNowPlayingMovies = () => ({
    type: GET_NOWPLAYING_MOVIES,
});

export const getMovieList = ({ category, page }) => ({
    type: GET_MOVIE_LIST,
    category,
    page
});

export const getMovieDetail = (id) => ({
    type: GET_MOVIE_DETAIL,
    id
});

export const searchMovie = (query) => ({
    type: SEARCH_MOVIE,
    query
})

export const clearMovieList = () => ({
    type: CLEAR_MOVIE_LIST
})