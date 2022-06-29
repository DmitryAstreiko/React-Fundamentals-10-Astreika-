import React from 'react';
import '../../../../App.css';
import Button from '../../../../common/Button/Button';

function AuthorItem(props) {
	function onPress(id) {
		props.onButtonPress(id);
	}

	return (
		<div className='AuthorItemMain'>
			<label>{props.AuthorName}</label>
			<Button
				id={props.id}
				buttonText={props.ButtonName}
				onButtonPress={onPress}
			/>
		</div>
	);
}

export default AuthorItem;
