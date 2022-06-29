import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import { Login } from './components/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='registration' element={<Registration />} />
				<Route path='login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
