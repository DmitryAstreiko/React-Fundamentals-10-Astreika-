import React from 'react';
import { Logo } from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { logoutUserAction } from '../../store/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/user/thunk';

function Header() {
	const navigate = useNavigate();

	const userIsAuth = useSelector((state) => state.users.isAuth);
	const userName = useSelector((state) => state.users.name);

	const dispatch = useDispatch();

	function onLogout() {
		//dispatch(logoutUserAction());
		logoutUser(localStorage.getItem('courseUserToken'));
		localStorage.removeItem('courseUserToken');
		navigate(`/login`);
	}

	return (
		<div className='HeaderMain'>
			<Logo />
			{userIsAuth === true && (
				<div>
					<label style={{ margin: '0 50px 0 0' }}>
						<b>{userName}</b>
					</label>
					<Button buttonText='Logout' type='button' onButtonPress={onLogout} />
				</div>
			)}
		</div>
	);
}

export default Header;
