import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import CombinedReducer from "./reducers/CombinedReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(CombinedReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;