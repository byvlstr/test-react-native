import Action from "../common/Action";
import { Type } from "../actions/Type";
import { INITIAL_STATE } from "../common/State";
import { MovieCategory } from "../common/Category";
import { Movie } from "../common/movie";

export default (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case Type.LOAD_MOVIES_SUCCESS:
            const updatedMovieMap = new Map<MovieCategory, Movie[]>(state.movies);
            updatedMovieMap.set(action.payload.category, action.payload.data.data.Search);
            return {...state, movies: updatedMovieMap}
        default:
            return {...state}
    }
}