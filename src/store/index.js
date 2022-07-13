//import { createStore } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension'; // import dev tools
import rootReducer from './rootReducer';
//import { coursesInitialState } from './courses/reducer';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

/*const appInitialState = {
	courses: coursesInitialState,
};*/
//const store = createStore(rootReducer, appInitialState, composeWithDevTools());

const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

export default store;
