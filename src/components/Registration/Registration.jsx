import React, { useState } from 'react';
import '../../App.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Inpit';

function Registration() {
	const [nameUser, setNameUser] = useState(null);
	const [passUser, setPassUser] = useState(null);
	const [emailUser, setEmailUser] = useState(null);

	function onChangeLogin(text) {
		setNameUser(text);
	}

	function onChangePassword(text) {
		setPassUser(text);
	}

	function onChangeEmail(text) {
		setEmailUser(text);
	}

	function onSubmit(event) {
		alert(event.text);
	}

	return (
		<div className='FormMain'>
			<form onSubmit={onSubmit} style={{ width: '350px' }}>
				<p style={{ textAlign: 'center', fontSize: '22px' }}>
					<label>
						<b>Registration</b>
					</label>
				</p>
				<Input
					type='text'
					name='Name'
					placeholderText='Enter name'
					onChange={onChangeLogin}
				/>

				<Input
					type='email'
					name='Email'
					placeholderText='Enter email'
					onChange={onChangeEmail}
				/>

				<Input
					type='password'
					name='Password'
					placeholderText='Enter password'
					onChange={onChangePassword}
				/>

				<p style={{ textAlign: 'center' }}>
					<Button buttonText='Registration' type='submit' />
				</p>
				<p style={{ textAlign: 'center' }}>
					<label>
						If you have an account you can <b>Login</b>
					</label>
				</p>
			</form>
		</div>
	);
}

export default Registration;
