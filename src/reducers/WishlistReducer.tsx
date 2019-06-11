import { INITIAL_STATE } from "../common/State";
import Action from "../common/Action";
import { Type } from "../actions/Type";
import { Movie } from "../common/movie";

export default (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case Type.ADD_MOVIE_TO_WISHLIST:
            var updatedWishlist: Movie[] = [...state.wishlist];
            if (!updatedWishlist.find(movie => movie.imdbID === action.payload.imdbID)) {
                updatedWishlist.push(action.payload);
            }

            return {...state, wishlist: updatedWishlist}
        default:
            return {...state}
    }
}