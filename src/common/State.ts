import { Movie } from "./Movie";

export interface State {
    selectedMovie: Movie | null,
    wishlist: Movie[],
    movies: Movie[]
}

export const INITIAL_STATE: State = {
    selectedMovie: null,
    wishlist: [],
    movies: []
}