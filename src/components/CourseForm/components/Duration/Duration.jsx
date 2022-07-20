import React, { useState } from 'react';
import '../../../../App.css';
import Input from '../../../../common/Input/Inpit';
import GetCourseDuration from '../../../../helpers/getCourseDuration';

function Duration(props) {
	const [duration, setDuration] = useState('00:00 hour');

	function onInputText(text) {
		if (!text) {
			setDuration('00:00 hour');
			props.onDuration('0');
		} else {
			setDuration(GetCourseDuration(text));
			props.onDuration(text);
		}
	}

	return (
		<div className='DurationMain'>
			<label className='CreateCourseLabelsParagraph'>
				<b>Duration</b>
			</label>
			<label className='CreateCourseLabels'>Duration</label>
			<Input
				placeholderText='Enter duration minutes...'
				onChange={onInputText}
				type='text'
				value={props.value}
			/>
			<label className='CreateCourseDuration'>Duration: {duration}</label>
		</div>
	);
}

export default Duration;
