import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

const mockedState = {
	users: {
		isAuth: true,
		name: 'Admin',
	},
	courses: [],
	authors: [],
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('Header', () => {
	test('renders Header component', () => {
		const route = '/login';

		render(
			<Provider store={mockedStore}>
				<MemoryRouter initialEntries={[route]}>
					<Header />
				</MemoryRouter>
			</Provider>
		);

		expect(screen.queryByText('Admin')).toBeInTheDocument();
	});
});
