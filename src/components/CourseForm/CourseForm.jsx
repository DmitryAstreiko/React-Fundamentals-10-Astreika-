import React, { useState, useEffect } from 'react';
import '../../App.css';
import Button from '../../common/Button/Button';
import Authors from './components/Authors/Authors';
import Input from '../../common/Input/Inpit';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { addCourse, updateCourse } from '../../store/courses/thunk';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function CourseForm(props) {
	const [titleCourse, setTitleCourse] = useState(null);
	const [descCourse, setDescCourse] = useState(null);
	const [durCourse, setDurCourse] = useState(null);
	const [authorsCourse, setAuthorsCourse] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const userInfo = useSelector((state) => state.users);
	const token = userInfo.token;
	const isLogIn = userInfo.isAuth;
	const addMode = props.addMode;
	const updateMode = props.updateMode;
	const allCourses = useSelector((state) => state.courses);
	const courseForUpdate = props.course;

	useEffect(() => {
		if (isLogIn === false) {
			navigate(`/login`);
		}
	});

	function onAuthorsSelected(text) {
		setAuthorsCourse(text);
	}
	function onDurationChange(text) {
		setDurCourse(text);
	}
	function onInputText(text) {
		setTitleCourse(text);
	}

	function onCreateCourse() {
		if (checkFields()) {
			const countBefore = allCourses.length;
			//addCourse(prepareCourse(), token)(dispatch);
			dispatch(addCourse(prepareCourse(), token));
			const countAfter = allCourses.length;
			if (countAfter > countBefore) {
				navigate(`/courses`);
			}
		}
	}

	function onUpdateCourse() {
		if (checkFields()) {
			const countBefore = allCourses.length;
			dispatch(updateCourse(props.courseForUpdate.id, prepareCourse(), token));
			const countAfter = allCourses.length;
			if (countAfter > countBefore) {
				navigate(`/courses`);
			}
		}
	}

	function prepareCourse() {
		let authorsId = [];
		if (authorsCourse) {
			authorsCourse?.forEach((element) => {
				authorsId.push(element.id);
			});
		}

		const course = {
			title: titleCourse,
			description: descCourse,
			duration: parseInt(durCourse),
			authors: authorsId,
		};

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

	function onCancelAdding() {
		navigate(`/courses`);
	}

	return (
		<div>
			<Header />
			<div className='CreateCourseMain'>
				<label className='CreateCourseLabels'>Title</label>
				<div className='CreateCourseTitle'>
					<Input
						placeholderText='Enter title...'
						type='text'
						onChange={onInputText}
						value={updateMode ? courseForUpdate[0].title : ''}
					></Input>
					<div className='CreateCourseButtons'>
						<Button
							buttonText='Cancel adding'
							onButtonPress={onCancelAdding}
							type='button'
						/>
						{addMode && (
							<Button
								buttonText='Create course'
								onButtonPress={onCreateCourse}
								type='button'
							/>
						)}
						{updateMode && (
							<Button
								buttonText='Update course'
								onButtonPress={onUpdateCourse}
								type='button'
							/>
						)}
					</div>
				</div>
				<label className='CreateCourseLabels'>Description</label>
				<textarea
					minLength='2'
					className='CreateCourseTextArea'
					placeholder='Enter description'
					onChange={(event) => setDescCourse(event.target.value)}
				>
					{updateMode ? courseForUpdate[0].description : ''}
				</textarea>
				<Authors
					onDurationChange={onDurationChange}
					onAuthorsSelected={onAuthorsSelected}
					durationValue={updateMode ? courseForUpdate[0].duration : ''}
				/>
			</div>
		</div>
	);
}

export default CourseForm;
