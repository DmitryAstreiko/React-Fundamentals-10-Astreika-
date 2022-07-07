import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import reduxLogger from 'redux-logger';

import rootReducers from './rootReducer';

const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) =>
	createStore(
		combineReducers({ ...rootReducers, ...reducers }),
		preloadedState,
		compose(
			applyMiddleware(...middlewares, reduxLogger),
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

export default configureStore;
