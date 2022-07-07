import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // import dev tools
import rootReducer from './rootReducer';
import { coursesDefaultState } from './courses/reducer';
import { configureStore } from '@reduxjs/toolkit';

const appInitialState = {
	courses: coursesDefaultState,
};
const store = createStore(rootReducer, appInitialState, composeWithDevTools());

export default store;
