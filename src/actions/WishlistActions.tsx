import { Type } from "./Type";
import { Movie } from "../common/movie";

export const addToWishlist = (movie: Movie) => {
    return (dispatch: any) => {
        dispatch({
            type: Type.ADD_MOVIE_TO_WISHLIST,
            payload: movie
        });
    };
}