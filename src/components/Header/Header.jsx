import React from 'react';
import { Logo } from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import '../../App.css';

function Header(props) {
	return (
		<div className='HeaderMain'>
			<Logo />
			{!props.isRegistration && (
				<div>
					<label style={{ margin: '0 50px 0 0' }}>
						<b>Dzmitry</b>
					</label>
					<Button buttonText='Logout' type='button' />
				</div>
			)}
		</div>
	);
}

export default Header;
