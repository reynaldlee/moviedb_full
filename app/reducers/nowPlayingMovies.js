import {
    GET_NOWPLAYING_MOVIES,
    GET_NOWPLAYING_MOVIES_FAILED,
    GET_NOWPLAYING_MOVIES_SUCCESS,
} from "../actions/movies"

const initialState = {
    loading: false
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {

        //Now Playing
        case GET_NOWPLAYING_MOVIES:
            return {
                ...state,
                loading: true

            }
        case GET_NOWPLAYING_MOVIES_SUCCESS:
            return {
                ...state,
                ...action.data,
                loading: false,

            }
        case GET_NOWPLAYING_MOVIES_FAILED:
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