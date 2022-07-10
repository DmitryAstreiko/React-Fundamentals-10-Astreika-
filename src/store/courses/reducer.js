import { GET_COURSES } from './types';
//import { getCourses } from '../../service';

const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case GET_COURSES:
			return [...state, action.payload];
		default:
			return state;
	}
};
