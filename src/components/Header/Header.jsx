import React from 'react';
import { Logo } from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { logoutUserAction } from '../../store/user/actions';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
	const navigate = useNavigate();

	const userIsAuth = useSelector((state) => state.users.isAuth);
	const userName = useSelector((state) => state.users.name);

	const dispatch = useDispatch();

	function onLogout() {
		localStorage.removeItem('courseUserToken');
		dispatch(logoutUserAction());
		navigate(`/login`);
	}

	return (
		<div className='HeaderMain'>
			<Logo />
			{userIsAuth && (
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
