import GET_COURSES from './types';

export const coursesDefaultState = [{ title: 'asdasd', description: 'asdasd' }];
//courses: [],

//};

export const coursesReducer = (state = coursesDefaultState, action) => {
	switch (action.type) {
		case GET_COURSES:
			return [...state, { title: '123', description: '7653' }];
		default:
			return state;
	}
};
