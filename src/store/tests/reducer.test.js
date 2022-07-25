import { coursesReducer } from '../courses/reducer';
import { addCoursesAction } from '../courses/actions';

describe('coursesReducer', () => {
	test('should return the initial state', () => {
		expect(coursesReducer(undefined, {})).toEqual([]);
	});
});

describe('coursesReducer', () => {
	test('should handle a todo being added to an empty list', () => {
		const previousState = [];
		const newCourse = {
			title: 'Special course',
			description: 'Excellent course',
			duration: '01:00 hour',
			authors: [
				'df32994e-b23d-497c-9e4d-84e4dc02882f',
				'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			],
		};
		expect(coursesReducer(previousState, addCoursesAction(newCourse))).toEqual([
			{
				title: 'Special course',
				description: 'Excellent course',
				duration: '01:00 hour',
				authors: [
					'df32994e-b23d-497c-9e4d-84e4dc02882f',
					'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
				],
			},
		]);
	});
});
