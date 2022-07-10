import { GET_AUTORS } from './types';
import { getAuthors } from '../../service';

const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case GET_AUTORS:
			return [...state, getAuthors()];
		default:
			return state;
	}
};
