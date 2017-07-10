import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import thunk from 'react-thunk';

const configureStore = (preloadedState) => {
	const store = createStore(
	    rootReducer,
	    preloadedState,
	    applyMiddleware(thunk)
	  )
	return store;
}

export default configureStore;