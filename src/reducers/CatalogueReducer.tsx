import Action from "../common/Action";
import { Type } from "../actions/Type";
import { INITIAL_STATE } from "../common/State";
import { MovieCategory } from "../common/Category";
import { Movie } from "../common/movie";

export default (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case Type.LOAD_MOVIES_SUCCESS:
            const updatedMovieMap = new Map<MovieCategory, Movie[]>(state.movies);
            const updatedPagesList = new Map<MovieCategory, number>(state.pages);
            const results: Movie[] = action.payload.data.data.Search;

            if (action.payload.page === 1) {
                updatedMovieMap.set(action.payload.category, results);
            } else {
                if (results) {
                    const extendedList = [...updatedMovieMap.get(action.payload.category)!, ...results]
                    updatedMovieMap.set(action.payload.category, extendedList)
                }
            }

            updatedPagesList.set(action.payload.category, action.payload.page);

            return {...state, movies: updatedMovieMap, pages: updatedPagesList}

        case Type.LOAD_MOVIES_ERROR:
            console.error(action.payload); // TODO show some toast or message to the user
            return {...state, error: action.payload}

        default:
            return {...state}
    }
}