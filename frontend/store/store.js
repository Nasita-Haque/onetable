import {createStore, applyMiddleware} from "redux";
import allReducers from '../reducer';
import thunk from 'redux-thunk';
//understands when you return a function 
//thunk is necessary if doing async actions. 




const store = createStore(
	allReducers, 
	applyMiddleware(thunk)
);


export default store;
