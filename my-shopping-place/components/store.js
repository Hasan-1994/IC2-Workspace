import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import basketReducer from "./reducer";

const rootReducer = combineReducers({
  basket: basketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
