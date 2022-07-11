import { LOAD_AUTHORS } from './types.js';
import { ADD_AUTHOR } from './types.js';

export const loadAuthorsAction = (payload) => ({ type: LOAD_AUTHORS, payload });
export const addAuthorsAction = (payload) => ({ type: ADD_AUTHOR, payload });
