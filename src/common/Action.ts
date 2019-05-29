import { Type } from "../actions/Type";

export default interface Action {
    type: Type,
    payload: any
}