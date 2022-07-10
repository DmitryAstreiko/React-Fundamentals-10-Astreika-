import { GET_AUTHORS, ADD_AUTHOR } from './types';
import { getAuthors } from '../../service';

const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case GET_AUTHORS:
			return [...state, getAuthors()];
		case ADD_AUTHOR:
			return state;
		default:
			return state;
	}
};
