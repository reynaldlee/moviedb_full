import movieDetailMock from "../mockData/movieDetail";

import {
    GET_MOVIE_DETAIL,
    GET_MOVIE_DETAIL_SUCCESS,
    GET_MOVIE_DETAIL_FAILED
} from "../actions/movies"

const initialState = {
    loading: false
};

const details = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                loading: true
            }
        case GET_MOVIE_DETAIL_SUCCESS:
            return {
                ...action.data,
                loading: false,

            }
        case GET_MOVIE_DETAIL_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }

}

export default details;