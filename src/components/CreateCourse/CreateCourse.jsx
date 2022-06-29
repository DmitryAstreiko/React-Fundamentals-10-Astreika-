import React, { useState } from 'react';
import '../../App.css';
import Button from '../../common/Button/Button';
import Authors from './components/Authors/Authors';
import Input from '../../common/Input/Inpit';
import { v4 as uuid } from 'uuid';
import Moment from 'moment';

function CreateCourse(props) {
	const [titleCourse, setTitleCourse] = useState(null);
	const [descCourse, setDescCourse] = useState(null);
	const [durCourse, setDurCourse] = useState(null);
	const [authorsCourse, setAuthorsCourse] = useState(null);
	return (
		<div className='CreateCourseMain'>
			<label className='CreateCourseLabels'>Title</label>
			<div className='CreateCourseTitle'>
				<Input placeholderText='Enter title...' onChange={onInputText} />
				<div className='CreateCourseButtons'>
					<Button
						buttonText='Cancel adding'
						onButtonPress={changeShowCreateCourse}
					/>
					<Button buttonText='Create course' onButtonPress={onCreateCourse} />
				</div>
			</div>
			<label className='CreateCourseLabels'>Description</label>
			<textarea
				minLength='2'
				className='CreateCourseTextArea'
				placeholder='Enter description'
				onChange={(event) => setDescCourse(event.target.value)}
			></textarea>
			<Authors
				itemsAuthors={props.itemAuthors}
				AddAuthor={addAuthors}
				onDurationChange={onDurationChange}
				onAuthorsSelected={onAuthorsSelected}
			/>
		</div>
	);

	function onAuthorsSelected(text) {
		setAuthorsCourse(text);
	}
	function onDurationChange(text) {
		setDurCourse(text);
	}
	function onInputText(text) {
		setTitleCourse(text);
	}

	function onCreateCourse(id) {
		if (checkFields()) {
			props.onCreateNewCourse(prepareCourse());
		}
	}

	function prepareCourse() {
		var authorsId = [];
		if (authorsCourse) {
			authorsCourse?.forEach((element) => {
				authorsId.push(element.id);
			});
		}

		var course = [];

		course.push({
			id: uuid(),
			title: titleCourse,
			description: descCourse,
			creationDate: Moment().format('MM/DD/YYYY'),
			duration: durCourse,
			authors: authorsId,
		});

		return course;
	}

	function checkFields() {
		if (titleCourse === null) {
			alert('Please, fill in all fields - Title');
			return false;
		}

		if (descCourse === null) {
			alert('Please, fill in all fields - Description');
			return false;
		}

		if (descCourse.length < 2) {
			alert('Description - text length should be at least 2 characters');
			return false;
		}

		if (parseInt(durCourse) < 1) {
			alert('Duration should be more than 0 minutes');
			return false;
		}

		if (durCourse === null) {
			alert('Please, fill in all fields - Duration');
			return false;
		}

		if (authorsCourse === null) {
			alert('Please, fill in all fields - Course authors');
			return false;
		}

		return true;
	}

	function addAuthors(value) {
		props.addNewAuthors(value);
	}

	function changeShowCreateCourse() {
		props.changeIsShowCreateCourse();
	}
}

export default CreateCourse;
