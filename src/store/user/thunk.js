import { loginUserAction, logoutUserAction, UserMeAction } from './actions';

export const loadUser = (User) => async (dispatch) => {
	try {
		await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(User),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => dispatch(loginUserAction(data)));
	} catch (error) {
		console.log(error);
	}
};

export const logoutUser = (token) => async (dispatch) => {
	try {
		await fetch('http://localhost:4000/logout', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		dispatch(logoutUserAction());
	} catch (error) {
		console.log(error);
	}
};

export const loadUserMe = (token) => async (dispatch) => {
	try {
		await fetch('http://localhost:4000/users/me', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		})
			.then((response) => response.json())
			.then((data) => dispatch(UserMeAction(data)));
	} catch (error) {
		console.log(error);
	}
};
