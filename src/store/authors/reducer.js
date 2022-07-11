import { LOAD_AUTHORS, ADD_AUTHOR } from './types';
import { loadAuthors } from '../../service';

const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case LOAD_AUTHORS:
			return [...state, loadAuthors()];
		case ADD_AUTHOR:
			return state;
		default:
			return state;
	}
};
