import React, { useState } from 'react';
import '../../App.css';

function Input(props) {
	const [inputValue, setInputValue] = useState('');

	function onHandleClick(symbols) {
		setInputValue(symbols);
		props.onChange(symbols);
	}

	return (
		<div className='InputMain'>
			<input
				id='searchIput'
				className='Inputs'
				value={inputValue}
				placeholder={props.placeholderText}
				//onChange={(event) => setInputValue(event.target.value)}
				onChange={(event) => onHandleClick(event.target.value)}
			/>
			<label for='searchIput'>{props.labelText}</label>
		</div>
	);
}

export default Input;
