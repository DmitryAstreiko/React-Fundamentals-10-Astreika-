import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function GetUserRole() {
	const role = useSelector((state) => state.users.role);
	return role === 'ADMIN' ? true : false;
}

export function PrivateRoute({ children }) {
	const auth = GetUserRole(); // add logic to determine the value for the condition
	const navigate = useNavigate();

	return auth ? children : navigate(`/courses`);
}
