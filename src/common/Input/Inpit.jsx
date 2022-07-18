import React, { useState } from 'react';
import '../../App.css';

function Input(props) {
	const [inputValue, setInputValue] = useState(props.value);

	function onHandleClick(symbols) {
		setInputValue(symbols);
		props.onChange(symbols);
	}

	return (
		<div className='InputMain'>
			<label for={props.name} style={{ padding: '0 0 0 10px' }}>
				{props.name}
			</label>
			<input
				id={props.name}
				className='Inputs'
				value={inputValue}
				name={props.name}
				type={props.type}
				placeholder={props.placeholderText}
				//onChange={(event) => setInputValue(event.target.value)}
				onChange={(event) => onHandleClick(event.target.value)}
			/>
		</div>
	);
}

export default Input;
