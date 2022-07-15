import { LOAD_COURSES } from './types.js';
import { ADD_COURSE } from './types.js';
import { DELETE_COURSE } from './types.js';
import { UPDATE_COURSE } from './types.js';

export const loadCoursesAction = (payload) => ({ type: LOAD_COURSES, payload });
export const addCoursesAction = (payload) => ({ type: ADD_COURSE, payload });
export const updateCoursesAction = (payload) => ({
	type: UPDATE_COURSE,
	payload,
});
export const deleteCoursesAction = (payload) => ({
	type: DELETE_COURSE,
	payload,
});
