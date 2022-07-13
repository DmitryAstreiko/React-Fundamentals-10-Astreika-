import React from 'react';
import { Logo } from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

function Header(props) {
	let navigate = useNavigate();

	function onLogout() {
		localStorage.removeItem('courseUserToken');
		navigate(`/login`);
	}

	return (
		<div className='HeaderMain'>
			<Logo />
			{!props.isRegistration && (
				<div>
					<label style={{ margin: '0 50px 0 0' }}>
						<b>{props.userName}</b>
					</label>
					<Button buttonText='Logout' type='button' onButtonPress={onLogout} />
				</div>
			)}
		</div>
	);
}

export default Header;
