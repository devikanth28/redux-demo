import ValueReducer from "./ValueReducer";
import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";

export const CombinedReducer = combineReducers({
    value : ValueReducer,
    products:ProductReducer
});

export default CombinedReducer;