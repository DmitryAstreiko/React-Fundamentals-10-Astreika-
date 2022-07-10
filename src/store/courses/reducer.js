import { GET_COURSES, ADD_COURSE, UPDATE_COURSE, DELETE_COURSE } from './types';
//import { getCourses } from '../../service';

const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case GET_COURSES:
			return [...state, action.payload];
		case ADD_COURSE:
			return [...state];
		case UPDATE_COURSE:
			return state;
		case DELETE_COURSE:
			return state;
		default:
			return state;
	}
};
