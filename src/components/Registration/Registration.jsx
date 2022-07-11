import React, { useState } from 'react';
import '../../App.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Inpit';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

function Registration() {
	const [loginUser, setLoginUser] = useState(null);
	const [passUser, setPassUser] = useState(null);
	const [emailUser, setEmailUser] = useState(null);
	let navigate = useNavigate();

	function onChangeLogin(text) {
		setLoginUser(text);
	}

	function onChangePassword(text) {
		setPassUser(text);
	}

	function onChangeEmail(text) {
		setEmailUser(text);
	}

	function chekingFields() {
		console.log(loginUser);
		if (loginUser === null) {
			alert('Please, fill the field "Name"');
			return false;
		}

		return true;
	}

	async function onSubmit(event) {
		//if (chekingFields) {
		event.preventDefault();

		const newUser = {
			name: loginUser,
			password: passUser,
			email: emailUser,
		};

		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();

		if (result.successful === true) {
			navigate(`/login`);
		}
		//}
	}

	return (
		<div>
			<Header />
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
							If you have an account you can{' '}
							<b>
								<Link to='/login'>Login</Link>
							</b>
						</label>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Registration;
