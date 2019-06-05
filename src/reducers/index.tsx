import { combineReducers } from "redux";
import CatalogueReducer from "./CatalogueReducer";
import MovieDetailReducer from "./MovieDetailReducer";
import WishlistReducer from "./WishlistReducer";

export default combineReducers({
    catalogue: CatalogueReducer,
    moviedetail: MovieDetailReducer,
    wishlist: WishlistReducer
});