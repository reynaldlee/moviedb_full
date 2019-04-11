import {
    GET_MOVIE_LIST,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_FAILED,
    CLEAR_MOVIE_LIST,
} from "../actions/movies"

const initialState = {
    loading: false
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        //MOVIE LIST
        case GET_MOVIE_LIST:
            return {
                ...state,
                loading: true,
            }
        case GET_MOVIE_LIST_SUCCESS:
            const prevResults = state.results || [];
            return {
                ...action.data,
                results: [...prevResults, ...action.data.results],
                loading: false,

            }
        case GET_MOVIE_LIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error

            }
        case CLEAR_MOVIE_LIST:
            return initialState
        default:
            return state;
    }

}

export default listReducer;