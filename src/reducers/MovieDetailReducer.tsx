import { INITIAL_STATE } from "../common/State";
import { Type } from "../actions/Type";
import Action from "../common/Action";

export default (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case Type.SELECT_MOVIE:
            return {...state, selectedMovie: action.payload}
        case Type.LOAD_MOVIES_ERROR:
            console.error(action.payload); // TODO show some toast or message to the user
            return {...state, error: action.payload}
        default:
            return {...state}
    }
}