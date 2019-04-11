import { combineReducers } from "redux";

import nowPlayingMovies from "./nowPlayingMovies";
import popularMovies from "./popularMovies";
import list from "./list";
import searchResults from "./searchResults";
import details from "./details";



export default combineReducers({
    nowPlayingMovies,
    popularMovies,
    list,
    searchResults,
    details
})