import { LOAD_AUTHORS, ADD_AUTHOR } from './types';
import { v4 as uuid } from 'uuid';

const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case LOAD_AUTHORS:
			return action.payload;
		case ADD_AUTHOR:
			return [...state, { id: uuid(), name: action.payload }];
		default:
			return state;
	}
};
