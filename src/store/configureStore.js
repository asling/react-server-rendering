import React from 'react';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
const configureStore = (preloadedState) => {
	const middlewares = [ thunk ];
	const store = createStore(
	    combineReducers(
	    	...rootReducer,
	    	{
	    		routing: routerReducer
	    	}
	    ),
	    preloadedState,
	    applyMiddleware(...middlewares)
	  )
	return store;
}

export default configureStore