import { render, screen } from '@testing-library/react';
import CourseCard from '../CourseCard';
import { Provider } from 'react-redux';
import getCourseDuration from '../../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../../helpers/formatCreationDate';
import getAuthorsByIds from '../../../../../helpers/getAuthorsByIds';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Admin',
		role: 'ADMIN',
	},
	courses: [],
	authors: [
		{
			id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			name: 'Vasiliy Dobkin',
		},
		{
			id: 'f762978b-61eb-4096-812b-ebde22838167',
			name: 'Nicolas Kim',
		},
		{
			id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
			name: 'Anna Sidorenko',
		},
		{
			id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			name: 'Valentina Larina',
		},
	],
};

const courseItem = {
	id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
	title: 'JavaScript',
	description: `Lorem Ipsum is simply dummy text of the ...`,
	creationDate: '08/03/2021',
	duration: 160,
	authors: [
		'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		'f762978b-61eb-4096-812b-ebde22838167',
	],
};
/*
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};
/*
render(
	<Provider store={mockedStore}>
		<CourseCard
			key={courseItem.id}
			id={courseItem.id}
			title={courseItem.title}
			description={courseItem.description}
			authors={getAuthorsByIds(courseItem.authors, mockedState.authors)}
			duration={getCourseDuration(courseItem.duration)}
			created={formatCreationDate(courseItem.creationDate)}
			index='1'
		/>
	</Provider>
);

expect(screen.getByText('JavaScript')).toBeInTheDocument();
expect(screen.getByText('08.03.2022')).toBeInTheDocument();
expect(
	screen.getByText('Lorem Ipsum is simply dummy text of the ...')
).toBeInTheDocument();
expect(screen.getByText('02:40 hours')).toBeInTheDocument();
expect(screen.getByText('Vasiliy Dobkin, Nicolas Kim')).toBeInTheDocument();
*/

//describe('CourseCard', () => {
test('renders CourseCard component', () => {
	render(
		<CourseCard
			key={courseItem.id}
			id={courseItem.id}
			title={courseItem.title}
			description={courseItem.description}
			authors={getAuthorsByIds(courseItem.authors, mockedState.authors)}
			duration={getCourseDuration(courseItem.duration)}
			created={formatCreationDate(courseItem.creationDate)}
			index='1'
		/>
	);

	expect(screen.queryByText('JavaScript')).toBeInTheDocument();
	expect(screen.queryByText('08.03.2022')).toBeInTheDocument();
	expect(
		screen.queryByText('Lorem Ipsum is simply dummy text of the ...')
	).toBeInTheDocument();
	expect(screen.queryByText('02:40 hours')).toBeInTheDocument();
	expect(screen.queryByText('Vasiliy Dobkin, Nicolas Kim')).toBeInTheDocument();
});
//});
