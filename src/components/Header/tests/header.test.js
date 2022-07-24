import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';

const mockedState = {
	user: {
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

render(
	<Provider store={mockedStore}>
		<Header />
	</Provider>
);

expect(screen.queryByText('Admin')).toBeInTheDocument();
