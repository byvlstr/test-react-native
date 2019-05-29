import Action from "../common/Action";
import { Type } from "../actions/Type";
import { INITIAL_STATE } from "../common/State";

export default (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case Type.LOAD_MOVIES_SUCCESS:
            console.log(action)
            return {...state, movies: action.payload.data.Search}
        default:
            return {...state}
    }
}