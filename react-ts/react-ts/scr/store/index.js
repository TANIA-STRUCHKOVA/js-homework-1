import { applyMiddleware, combineReducers, compose,createStore } from "redux";

import thunk from "redux-thunk";
import { reducerMovies,  } from "./reducers/reducerMovies";
import { reducerInfo } from "./reducers/reducerInfo";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer =  combineReducers({
    movies: reducerMovies,
    info: reducerInfo
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))