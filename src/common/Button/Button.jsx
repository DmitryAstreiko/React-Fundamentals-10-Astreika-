import React from 'react';
import '../../App.css';

function Button(props) {
	return (
		<button
			className='Buttons'
			type={props.type}
			onClick={() => props.onButtonPress(props.id)}
		>
			{props.buttonText}
		</button>
	);
}

export default Button;
