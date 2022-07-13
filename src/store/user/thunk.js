import { loginUserAction } from './store/user/actions';

export const loadUser = (newUser) => async (dispatch) => {
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
};
