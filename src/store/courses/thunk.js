import {
	loadCoursesAction,
	deleteCoursesAction,
	addCoursesAction,
	updateCoursesAction,
} from './actions';

export const loadCourses = async (dispatch) => {
	try {
		await fetch(`http://localhost:4000/courses/all`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((Response) => Response.json())
			.then((data) => dispatch(loadCoursesAction(data.result)));
	} catch (error) {}
};

/*export const deleteCourse = (courseId, userToken) => async (dispatch) => {
	try {
		await fetch(`http://localhost:4000/courses/${courseId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization: userToken,
			},
		})
			.then((Response) => Response.json())
			.then((data) => dispatch(deleteCoursesAction(data.result)));
	} catch (error) {}
};*/

export const deleteCourse = (courseId, userToken) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:4000/courses/${courseId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization: userToken,
			},
		});

		const result = await response.json();

		if (result.successfull) {
			dispatch(deleteCoursesAction(courseId));
		}
	} catch (error) {}
};

export const addCourse = (courseInfo, userToken) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:4000/courses/add`, {
			method: 'POST',
			body: JSON.stringify(courseInfo),
			headers: {
				'Content-Type': 'application/json',
				authorization: userToken,
			},
		});

		const result = await response.json();

		if (result.successfull) {
			dispatch(addCoursesAction(courseInfo));
		}
	} catch (error) {}
};

export const updateCourse =
	(courseId, courseInfo, userToken) => async (dispatch) => {
		try {
			const response = await fetch(
				`http://localhost:4000/courses/${courseId}`,
				{
					method: 'PUT',
					body: JSON.stringify(courseInfo),
					headers: {
						'Content-Type': 'application/json',
						authorization: userToken,
					},
				}
			);

			const result = await response.json();

			if (result.successfull) {
				dispatch(updateCoursesAction(courseInfo));
			}
		} catch (error) {}
	};
