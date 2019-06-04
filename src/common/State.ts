import { Movie } from "./Movie";
import { MovieCategory } from "./Category";

export interface State {
    selectedMovie: Movie | null,
    wishlist: Movie[],
    movies: Map<MovieCategory, Movie[]>
}

export const INITIAL_STATE: State = {
    selectedMovie: null,
    wishlist: [],
    movies: new Map<MovieCategory, Movie[]>()
}