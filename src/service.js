import { loadCoursesAction } from './store/courses/actions';
import { getAuthorsAction } from './store/authors/actions';
import { loginUserAction } from './store/user/actions';

/*export const getCourses = () => async (dispatch) => {
	try {
		await fetch('http://localhost:4000/courses/all')
			.then((Response) => Response.json())
			.then((data) => dispatch({ type: GET_COURSES, payload: data }));
	} catch (error) {}
};*/

export const loadCourses = (dispatch) => {
	try {
		fetch('http://localhost:4000/courses/all')
			.then((Response) => Response.json())
			.then((data) => dispatch(loadCoursesAction(data.result[0])));
	} catch (error) {}
};

/*export const getAuthors = () => async (dispatch) => {
	try {
		await fetch('http://localhost:4000/authors/all')
			.then((Response) => Response.json())
			.then((data) => dispatch({ type: GET_AUTORS, payload: data }));
	} catch (error) {}
};*/

export const loadAuthors = (dispatch) => {
	try {
		fetch('http://localhost:4000/authors/all')
			.then((Response) => Response.json())
			.then((data) => dispatch(getAuthorsAction(data.result)));
	} catch (error) {}
};

export const loadUser = (newUser) => (dispatch) => {
	try {
		fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((Response) => Response.json())
			.then((data) => dispatch(loginUserAction(data)));
	} catch (error) {}
};
