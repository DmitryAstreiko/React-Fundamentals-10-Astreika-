import React from 'react';
import '../../../../App.css';
import Button from '../../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteCoursesAction } from '../../../../store/courses/actions';

function CourseCard(props) {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	function showCourse(id) {
		navigate(`/courses/${id}`);
	}

	function editCourse(id) {
		navigate(`/courses`);
	}

	function deleteCourse(id) {
		dispatch(deleteCoursesAction(id));
	}

	return (
		<div className='CourseCardMain'>
			<div className='CourseCardTitleDesc'>
				<div className='CourseCardTitle'>
					<b>{props.title}</b>
				</div>
				<div>{props.description}</div>
			</div>
			<div className='CourseCardOther'>
				<div className='CourseCardOtherOne'>
					<b>Authors: </b>
					{props.authors}
				</div>
				<div className='CourseCardOtherOne'>
					<b>Duration: </b>
					{props.duration}
				</div>
				<div className='CourseCardOtherOne'>
					<b>Created: </b>
					{props.created}
				</div>
				<div className='CourseCardName'>
					<div>
						<Button
							buttonText='Show course'
							type='button'
							onButtonPress={() => showCourse(props.id)}
						/>
						<Button
							buttonText='Edit'
							type='button'
							onButtonPress={() => editCourse(props.id)}
						/>
						<Button
							buttonText='Delete'
							type='button'
							onButtonPress={() => deleteCourse(props.id)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

CourseCard.propTypes = {
	description: PropTypes.string,
	title: PropTypes.string,
	authors: PropTypes.string,
	duration: PropTypes.string,
	created: PropTypes.string,
};

export default CourseCard;
