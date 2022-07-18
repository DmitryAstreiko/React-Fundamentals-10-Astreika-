import { loadAuthorsAction, addAuthorsAction } from './actions';

export const loadAuthors = async (dispatch) => {
	try {
		await fetch('http://localhost:4000/authors/all')
			.then((Response) => Response.json())
			.then((data) => dispatch(loadAuthorsAction(data.result)));
	} catch (error) {}
};

export const addAuthor = (authorName, userToken) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:4000/authors/add`, {
			method: 'POST',
			body: JSON.stringify(authorName),
			headers: {
				'Content-Type': 'application/json',
				Authorization: userToken,
			},
		});

		const result = await response.json();

		if (result.successful) {
			dispatch(addAuthorsAction(authorName));
		}
	} catch (error) {}
};
