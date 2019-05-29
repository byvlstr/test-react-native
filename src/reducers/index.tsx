import { combineReducers } from "redux";
import CatalogueReducer from "./CatalogueReducer";

export default combineReducers({
    catalogue: CatalogueReducer
});