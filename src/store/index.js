//import { createStore } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension'; // import dev tools
import rootReducer from './rootReducer';
//import { coursesInitialState } from './courses/reducer';
import { configureStore } from '@reduxjs/toolkit';

/*const appInitialState = {
	courses: coursesInitialState,
};*/
//const store = createStore(rootReducer, appInitialState, composeWithDevTools());

const store = configureStore({ reducer: rootReducer });

export default store;
