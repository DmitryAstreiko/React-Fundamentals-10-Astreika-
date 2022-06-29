import React, { useState } from 'react';
import '../../App.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Inpit';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

export function Login() {
	const [emailUser, setEmailUser] = useState(null);
	const [passUser, setPassUser] = useState(null);
	let navigate = useNavigate();

	function handleClick() {
		//navigate(`/invoices/${newInvoice.id}`);
		navigate(`/registration`);
	}

	function onChangeEmail(text) {
		setEmailUser(text);
	}

	function onChangePassword(text) {
		setPassUser(text);
	}

	function onSubmit(event) {
		alert(event.text);
	}

	return (
		<div>
			<Header isRegistration={true} />
			<div className='FormMain'>
				<form onSubmit={onSubmit} style={{ width: '350px' }}>
					<p style={{ textAlign: 'center', fontSize: '22px' }}>
						<label>
							<b>Login</b>
						</label>
					</p>
					<Input
						type='email'
						name='Email'
						placeholderText='Enter email'
						onChange={onChangeEmail}
					/>
					<Input
						type='password'
						name='Password'
						placeholderText='Enter password.'
						onChange={onChangePassword}
					/>

					<p style={{ textAlign: 'center' }}>
						<Button buttonText='Login' type='submit' />
					</p>
					<p style={{ textAlign: 'center' }}>
						<label>
							If you not have an account you can{' '}
							<b>
								<label onClick={handleClick}>
									<b>Registration</b>
								</label>
							</b>
						</label>
					</p>
				</form>
			</div>
		</div>
	);
}
