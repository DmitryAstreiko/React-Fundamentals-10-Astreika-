import React, { useState } from 'react';
import '../../App.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Inpit';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../store/user/actions';

export function Login() {
	const [emailUser, setEmailUser] = useState(null);
	const [passUser, setPassUser] = useState(null);

	let navigate = useNavigate();
	const dispatch = useDispatch();

	function handleClick() {
		navigate(`/registration`);
	}

	function onChangeEmail(text) {
		setEmailUser(text);
	}

	function onChangePassword(text) {
		setPassUser(text);
	}

	async function onSubmit(event) {
		event.preventDefault();

		const newUser = {
			password: passUser,
			email: emailUser,
		};

		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();

		if (result.successful === true) {
			//localStorage.setItem('courseUserToken', result.result);
			dispatch(loginUserAction(result));
			navigate(`/courses`);
		} else {
			alert('The username or password is incorrect');
		}
	}

	return (
		<div>
			<Header />
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
						<Button buttonText='Login' type='submit' id='1' />
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
