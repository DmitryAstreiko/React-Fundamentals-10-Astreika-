/*import { loadCoursesAction } from './store/courses/actions';
import { loadAuthorsAction } from './store/authors/actions';
//import { loginUserAction } from './store/user/actions';

export const loadCourses = async (dispatch) => {
	try {
		await fetch('http://localhost:4000/courses/all')
			.then((Response) => Response.json())
			.then((data) => dispatch(loadCoursesAction(data.result)));
	} catch (error) {}
};

export const loadAuthors = async (dispatch) => {
	try {
		await fetch('http://localhost:4000/authors/all')
			.then((Response) => Response.json())
			.then((data) => dispatch(loadAuthorsAction(data.result)));
	} catch (error) {}
};*/

/*export const loadUser = (newUser) => async (dispatch) => {
	try {
		await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((Response) => Response.json())
			.then((data) => dispatch(loginUserAction(data)));
	} catch (error) {}
};*/
