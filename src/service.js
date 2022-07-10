//import { GET_COURSES } from './store/courses/types';
import { GET_AUTORS } from './store/authors/types';

import { getCoursesAction } from './store/courses/actions';

import { getAuthorsAction } from './store/authors/actions';

/*export const getCourses = () => async (dispatch) => {
	try {
		await fetch('http://localhost:4000/courses/all')
			.then((Response) => Response.json())
			.then((data) => dispatch({ type: GET_COURSES, payload: data }));
	} catch (error) {}
};*/

export const getCourses = () => (dispatch) => {
	try {
		fetch('http://localhost:4000/courses/all')
			.then((Response) => Response.json())
			.then((data) => dispatch(getCoursesAction(data.result)));
	} catch (error) {}
};

/*export const getAuthors = () => async (dispatch) => {
	try {
		await fetch('http://localhost:4000/authors/all')
			.then((Response) => Response.json())
			.then((data) => dispatch({ type: GET_AUTORS, payload: data }));
	} catch (error) {}
};*/

export const getAuthors = () => (dispatch) => {
	try {
		fetch('http://localhost:4000/authors/all')
			.then((Response) => Response.json())
			.then((data) => dispatch({ type: GET_AUTORS, payload: data }));
	} catch (error) {}
};
