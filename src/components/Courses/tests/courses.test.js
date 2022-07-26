import { Provider } from 'react-redux';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import CourseForm from '../../CourseForm/CourseForm';
import Courses from '../Courses';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
//import { navigate } from '@reach/router';
import * as React from 'react';

const mockedState = {
	users: {
		isAuth: true,
		name: 'Admin',
		role: 'ADMIN',
	},
	courses: [
		{
			id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
			title: 'JavaScript',
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                      has been the industry's standard dummy text ever since the 1500s, when an unknown 
                      printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                      not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                      nchanged.`,
			creationDate: '08/03/2021',
			duration: 160,
			authors: [
				'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
				'f762978b-61eb-4096-812b-ebde22838167',
			],
		},
		{
			id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
			title: 'Angular',
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                      has been the industry's standard dummy text ever since the 1500s, when an unknown 
                      printer took a galley of type and scrambled it to make a type specimen book.`,
			creationDate: '10/11/2020',
			duration: 210,
			authors: [
				'df32994e-b23d-497c-9e4d-84e4dc02882f',
				'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			],
		},
	],
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

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

/*wjest.mock('@reach/router', () => ({
	navigate: jest.fn(),
}));

/*useNavigate: () => ({
	navigate: jest.fn().mockImplementation(() => ({})),
  }),

/*jest.mock("react-router-dom", () => ({
	...(jest.requireActual("react-router-dom"), // technically it passes without this too, but I'm not sure if its there for other tests to use the real thing so I left it in
	useNavigate: () => mockedNavigator,
  }));*/

describe('Courses', () => {
	test('renders Courses component with 2 courses', () => {
		const { container } = render(
			<Provider store={mockedStore}>
				<MemoryRouter initialEntries={['/courses/add']}>
					<Courses />
				</MemoryRouter>
			</Provider>
		);

		const boxes = container.getElementsByClassName('CourseCardMain');

		expect(boxes.length).toBe(2);
	});
});

describe('Courses', () => {
	test('render CourseForm', () => {
		const { container } = render(
			<Provider store={mockedStore}>
				<MemoryRouter initialEntries={['/login']}>
					<CourseForm />
				</MemoryRouter>
			</Provider>
		);

		const boxes = container.getElementsByClassName('CreateCourseMain');

		expect(boxes.length).toBe(1);
	});
});

/*describe('Courses', () => {
	test('open CourseForm after press Add new course', async () => {
		const history = createMemoryHistory();
		//const navigate = useNavigate();
		//const onClick = jest.fn();
		//const routeLogin = '/login';
		//const routeCourseAdd = '/courses/add';
		render(
			<Provider store={mockedStore}>
				<MemoryRouter initialEntries={['/login', '/courses/add']}>
					<Courses />
				</MemoryRouter>
			</Provider>
		);
		//fireEvent.click(screen.queryByText('Add new course'));
		fireEvent.click(screen.getByText('Add new course'));

		//expect(navigate).toHaveBeenCalledTimes(1);
		//expect(navigate).toHaveBeenCalledWith('/courses/add');

		//await waitFor(() => screen.queryByText('Create author'));

		//await waitFor(() => {
		//expect(screen.queryByText('Create author')).toBeInTheDocument();
		//	expect(history.location.pathname).toBe('/courses/add');
		//});

		//render(<SideBar />, { wrapper: createRouterWrapper(history) });
		//fireEvent.click(screen.getByText('location 2'));
		//expect(history.location.pathname).toBe('/courses/add');
	});
});*/
