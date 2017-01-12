import {createStore, applyMiddleware, compose} from "redux";
import allReducers from '../reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//understands when you return a function
//thunk is necessary if doing async actions.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	allReducers,
	composeEnhancers(applyMiddleware(logger(), thunk))
);

export default store;
