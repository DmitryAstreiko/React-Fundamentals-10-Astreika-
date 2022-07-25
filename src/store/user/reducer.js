import { LOGIN_USER, LOGOUT_USER, USER_ME } from './types';

const userInitialState = {
	isAuth: false, // default value - false. After success login - true
	name: null, // default value - empty string. After success login - name of user
	email: null, // default value - empty string. After success login - email of user
	token: null, // default value - empty string or token value from localStorage.
	role: null,
	// After success login - value from API /login response. See Swagger.
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				...state,
				isAuth: true,
				name:
					action.payload.user.email === 'admin@email.com'
						? 'ADMIN'
						: action.payload.user.name,
				email: action.payload.user.email,
				token: action.payload.result,
				role:
					action.payload.user.email === 'admin@email.com' ? 'ADMIN' : 'User',
			};
		case LOGOUT_USER:
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
				token: '',
				role: '',
			};
		case USER_ME:
			return {
				...state,
				isAuth: true,
				name:
					action.payload.user.email === 'admin@email.com'
						? 'ADMIN'
						: action.payload.user.name,
				email: action.payload.user.email,
				role:
					action.payload.user.email === 'admin@email.com' ? 'ADMIN' : 'User',
			};
		default:
			return state;
	}
};
