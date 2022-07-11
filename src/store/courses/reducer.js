import {
	LOAD_COURSES,
	ADD_COURSE,
	UPDATE_COURSE,
	DELETE_COURSE,
} from './types';

const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case LOAD_COURSES:
			return [action.payload];
		case ADD_COURSE:
			return [...state, action.payload];
		case UPDATE_COURSE:
			return state;
		case DELETE_COURSE:
			return state;
		default:
			return state;
	}
};
