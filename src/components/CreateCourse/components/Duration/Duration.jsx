import React, { useState } from 'react';
import '../../../../App.css';
import Input from '../../../../common/Input/Inpit';
import GetCourseDuration from '../../../../helpers/getCourseDuration';

function Duration(props) {
	const [duration, setDuration] = useState('00:00 hour');
	return (
		<div className='DurationMain'>
			<label className='CreateCourseLabelsParagraph'>
				<b>Duration</b>
			</label>
			<label className='CreateCourseLabels'>Duration</label>
			<Input
				placeholderText='Enter duration minutes...'
				onChange={onInputText}
			/>
			<label className='CreateCourseDuration'>Duration: {duration}</label>
		</div>
	);

	function onInputText(text) {
		//const isInteger = /^[0-9]+$/;
		//if (text === '' || isInteger.test(text)) {
		//}

		if (!text) {
			setDuration('00:00 hour');
			props.onDuration('0');
		} else {
			setDuration(GetCourseDuration(text));
			props.onDuration(text);
		}
	}
}

export default Duration;
