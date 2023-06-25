import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import thunk from 'redux-thunk';

import { reducerCont } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    count: reducerCont,

})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))