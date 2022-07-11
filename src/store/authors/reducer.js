import { LOAD_AUTHORS, ADD_AUTHOR } from './types';

const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case LOAD_AUTHORS:
			return [action.payload];
		case ADD_AUTHOR:
			return state;
		default:
			return state;
	}
};
