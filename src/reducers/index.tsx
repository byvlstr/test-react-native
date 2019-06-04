import { combineReducers } from "redux";
import CatalogueReducer from "./CatalogueReducer";
import MovieDetailReducer from "./MovieDetailReducer";

export default combineReducers({
    catalogue: CatalogueReducer,
    moviedetail: MovieDetailReducer
});