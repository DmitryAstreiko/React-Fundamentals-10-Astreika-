import React from 'react';
import '../../../../App.css';
import Button from '../../../../common/Button/Button';

function AuthorItem(props) {
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

	function onPress(id) {
		props.onButtonPress(id);
	}
}

export default AuthorItem;
