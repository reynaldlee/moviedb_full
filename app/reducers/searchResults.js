import {
    SEARCH_MOVIE,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAILED
} from "../actions/movies"

const initialState = {
    loading: false
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        //SEARCH MOVIE
        case SEARCH_MOVIE:
            return {
                ...state,
                loading: true

            }
        case SEARCH_MOVIE_SUCCESS:
            return {
                ...action.data,
                loading: false
            }
        case SEARCH_MOVIE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }

}

export default moviesReducer;