import {
    GET_POPULAR_MOVIES,
    GET_POPULAR_MOVIES_SUCCESS,
    GET_POPULAR_MOVIES_FAILED,
} from "../actions/movies"

const initialState = {
    loading: false
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                loading: true

            }
        case GET_POPULAR_MOVIES_SUCCESS:
            return {
                ...state,
                ...action.data,
                loading: false,

            }
        case GET_POPULAR_MOVIES_FAILED:
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