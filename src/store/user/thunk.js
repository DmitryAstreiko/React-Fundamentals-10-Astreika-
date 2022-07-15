import { loginUserAction, logoutUserAction } from './actions';

export const loadUser = (User) => async (dispatch) => {
	try {
		await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(User),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((Response) => Response.json())
			.then((data) => dispatch(loginUserAction(data)));
	} catch (error) {}
};

export const logoutUser = (token) => async (dispatch) => {
	try {
		await fetch('http://localhost:4000/logout', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		})
			.then((Response) => Response.json())
			.then((data) => dispatch(logoutUserAction(data)));
	} catch (error) {}
};
