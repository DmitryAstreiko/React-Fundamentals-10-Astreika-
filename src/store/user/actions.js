import { LOGIN_USER } from './types.js';
import { LOGOUT_USER } from './types.js';
import { USER_ME } from './types.js';

export const loginUserAction = (payload) => ({ type: LOGIN_USER, payload });
export const logoutUserAction = (payload) => ({ type: LOGOUT_USER, payload });
export const UserMeAction = (payload) => ({ type: USER_ME, payload });
