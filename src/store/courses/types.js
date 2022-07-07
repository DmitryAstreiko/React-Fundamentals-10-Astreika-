import { type } from "@testing-library/user-event/dist/type";

const moduleName = 'courses';

const defaultState = {
	courses: [],
};

//action
const GET_COURSES = `${moduleName}/GET_COURSES`; 

//reducer
export default (state = defaultState, { type, payload }) => {
switch (type) {
    case GET_COURSES
    return {... state, courses: payload}
    default:
        return state;

}
};

export const getCourses = () => async (dispatch) => {
dispatch({ type: GET_COURSES, payload: [{ id: 1, title: 'sdfsdf' }] });
}
