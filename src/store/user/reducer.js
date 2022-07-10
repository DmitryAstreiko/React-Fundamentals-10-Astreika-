import { GET_USER } from './types';
//import { getUser } from '../../service';

const userInitialState = {
	isAuth: false, // default value - false. After success login - true
	name: null, // default value - empty string. After success login - name of user
	email: null, // default value - empty string. After success login - email of user
	token: null, // default value - empty string or token value from localStorage.
	// After success login - value from API /login response. See Swagger.
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case GET_USER:
			return [...state, 'asdads'];
		default:
			return state;
	}
};
