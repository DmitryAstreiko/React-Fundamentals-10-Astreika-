export const GET_COURSES = 'courses/GET_COURSES';

//const moduleName = 'courses';

/*const defaultState = {
	courses: [],
};*/

//action
//const GET_COURSES = `${moduleName}/GET_COURSES`;

//reducer
/*export default (state = defaultState, { type, payload }) => {
	switch (type) {
		case GET_COURSES:
			return { ...state, courses: payload };
		default:
			return state;
	}
};*/
/*
export const getCourses = () => async (dispatch) => {
	//dispatch({ type: GET_COURSES, payload: [{ id: 1, title: 'sdfsdf' }] });
	try {
		await fetch('http://localhost:4000/courses/all')
			.then((Response) => Response.json())
			.then((data) => dispatch({ type: GET_COURSES, payload: data }));
	} catch (error) {}
};*/
