import React from 'react';
import '../../../../App.css';
import Button from '../../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
//import { deleteCoursesAction } from '../../../../store/courses/actions';
import { deleteCourse } from '../../../../store/courses/thunk';

function CourseCard(props) {
	const navigate = useNavigate();

	//const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.users);
	const role = userInfo.role;
	const token = userInfo.token;

	function onShowCourse(id) {
		navigate(`/courses/${id}`);
	}

	function onUpdateCourse(id) {
		navigate(`/courses/update/${id}`);
	}

	function onDeleteCourse(id) {
		//dispatch(deleteCoursesAction(id));
		deleteCourse(id, token);
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
					<Button
						buttonText='Show course'
						type='button'
						onButtonPress={() => onShowCourse(props.id)}
					/>
					{role === 'ADMIN' && (
						<div>
							<Button
								buttonText='Edit'
								type='button'
								onButtonPress={() => onUpdateCourse(props.id)}
							/>
							<Button
								buttonText='Delete'
								type='button'
								onButtonPress={() => onDeleteCourse(props.id)}
							/>
						</div>
					)}
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
