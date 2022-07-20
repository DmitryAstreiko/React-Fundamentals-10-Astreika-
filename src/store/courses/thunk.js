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
	} catch (error) {
		console.log(error);
	}
};

export const deleteCourse = (courseId, userToken) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:4000/courses/${courseId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				authorization: userToken,
			},
		});

		const result = await response.json();

		if (result.successful) {
			dispatch(deleteCoursesAction(courseId));
		}
	} catch (error) {
		console.log(error);
	}
};

export const addCourse = (courseInfo, userToken) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:4000/courses/add`, {
			method: 'POST',
			body: JSON.stringify(courseInfo),
			headers: {
				'Content-Type': 'application/json',
				Authorization: userToken,
			},
		});

		const result = await response.json();

		if (result.successful) {
			dispatch(addCoursesAction(courseInfo));
		}
	} catch (error) {
		console.log(error);
	}
};

/*export const addCourse = (courseInfo, userToken) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:4000/courses/add`, {
			method: 'POST',
			body: JSON.stringify(courseInfo),
			headers: {
				'Content-Type': 'application/json',
				Authorization: userToken,
			},
		});

		const result = await response.json();

		if (result.successful) {
			dispatch(addCoursesAction(courseInfo));
		}
	} catch (error) {
		console.log(error);
	}
};*/

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

			if (result.successful) {
				dispatch(updateCoursesAction(courseInfo));
			}
		} catch (error) {
			console.log(error);
		}
	};
