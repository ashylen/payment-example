import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";

import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
