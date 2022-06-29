import React from 'react';
import '../../App.css';

function Button(props) {
	return (
		<button className='Buttons' onClick={() => props.onButtonPress(props.id)}>
			{props.buttonText}
		</button>
	);
}

export default Button;
