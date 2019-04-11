import { all, put, call, takeLatest, } from "redux-saga/effects";
import {
    GET_POPULAR_MOVIES,
    GET_POPULAR_MOVIES_SUCCESS,
    GET_POPULAR_MOVIES_FAILED,
    GET_NOWPLAYING_MOVIES,
    GET_NOWPLAYING_MOVIES_SUCCESS,
    GET_NOWPLAYING_MOVIES_FAILED,
    GET_MOVIE_LIST,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_FAILED,
    SEARCH_MOVIE,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAILED,
    GET_MOVIE_DETAIL,
    GET_MOVIE_DETAIL_SUCCESS,
    GET_MOVIE_DETAIL_FAILED
} from "../actions/movies";

import { getMoviesAPI, searchMovieAPI, getMovieDetailAPI } from "../apis/movieAPI";

function* getPopularMoviesSaga(action) {
    try {
        const response = yield getMoviesAPI({
            category: "popular",
        });

        yield put({
            type: GET_POPULAR_MOVIES_SUCCESS,
            data: response.data
        })
    } catch (err) {
        yield put({
            type: GET_POPULAR_MOVIES_FAILED,
            error: err.response ? err.response.data.message : err.message
        })
    }
}

function* getNowPlayingMoviesSaga(action) {
    try {
        const response = yield getMoviesAPI({
            category: "now_playing",
        });

        yield put({
            type: GET_NOWPLAYING_MOVIES_SUCCESS,
            data: response.data
        })
    } catch (err) {
        yield put({
            type: GET_NOWPLAYING_MOVIES_FAILED,
            error: err.response ? err.response.data.message : err.message
        })
    }
}

function* getMovieListSaga(action) {
    try {
        const response = yield getMoviesAPI({
            category: action.category,
            page: action.page
        });

        yield put({
            type: GET_MOVIE_LIST_SUCCESS,
            data: response.data
        })
    } catch (err) {
        yield put({
            type: GET_MOVIE_LIST_FAILED,
            error: err.response ? err.response.data.message : err.message
        })
    }
}

function* searchMovie(action) {
    try {

        const response = yield searchMovieAPI({
            query: action.query
        });


        yield put({
            type: SEARCH_MOVIE_SUCCESS,
            data: response.data
        })
    } catch (err) {

        yield put({
            type: SEARCH_MOVIE_FAILED,
            error: err.response ? err.response.data.message : err.message
        })
    }
}

function* getMovieDetail(action) {
    try {
        const response = yield getMovieDetailAPI(action.id);
        yield put({
            type: GET_MOVIE_DETAIL_SUCCESS,
            data: response.data
        })
    } catch (err) {

        yield put({
            type: GET_MOVIE_DETAIL_FAILED,
            error: err.response ? err.response.data.message : err.message
        })
    }
}

export default function* () {
    yield all([
        takeLatest(GET_POPULAR_MOVIES, getPopularMoviesSaga),
        takeLatest(GET_NOWPLAYING_MOVIES, getNowPlayingMoviesSaga),
        takeLatest(GET_MOVIE_LIST, getMovieListSaga),
        takeLatest(SEARCH_MOVIE, searchMovie),
        takeLatest(GET_MOVIE_DETAIL, getMovieDetail),
    ])
}