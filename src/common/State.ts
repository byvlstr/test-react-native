import { Movie } from "./Movie";
import { MovieCategory, Category } from "./Category";

export interface State {
    selectedMovie: Movie | null,
    wishlist: Movie[],
    movies: Map<MovieCategory, Movie[]>,
    pages: Map<MovieCategory, number>,
    error: any
}

export const INITIAL_STATE: State = {
    selectedMovie: null,
    wishlist: [],
    movies: new Map<MovieCategory, Movie[]>(),
    pages: new Map<MovieCategory, number>(),
    error: null
}