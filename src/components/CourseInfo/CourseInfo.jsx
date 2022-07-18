import '../../App.css';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import getCourseDuration from '../../helpers/getCourseDuration';
import Header from '../Header/Header';
import formatCreationDate from '../../helpers/formatCreationDate';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function CourseInfo(props) {
	const navigate = useNavigate();

	const isLogIn = useSelector((state) => state.users.isAuth);

	function showCourses() {
		navigate(`/courses`);
	}

	useEffect(() => {
		if (isLogIn === false) {
			navigate(`/login`);
		}
	});

	return (
		<div>
			<Header />
			<div className='CourseInfoMain'>
				<Button
					type='button'
					buttonText='< Back to courses'
					onButtonPress={showCourses}
				/>
				<label style={{ textAlign: 'center', fontSize: '30px' }}>
					<b>{props.courseItem[0].title}</b>
				</label>
				<div className='CourseInfoDescriptionAndOther'>
					<div className='CourseInfoDescription'>
						{props.courseItem[0].description}
					</div>
					<div className='CourseInfoOther'>
						<label className='CourseInfoLabels'>
							<b>ID:</b> {props.courseItem[0].id}
						</label>
						<label className='CourseInfoLabels'>
							<b>Duration:</b> {getCourseDuration(props.courseItem[0].duration)}
						</label>
						<label className='CourseInfoLabels'>
							<b>Created:</b>{' '}
							{formatCreationDate(props.courseItem[0].creationDate)}
						</label>
						<label className='CourseInfoLabels'>
							<b>Authors:</b>
						</label>
						{props.courseAuthors.map((item) => (
							<label className='CourseInfoLabels'>{item.name}</label>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

CourseInfo.propTypes = {
	courseItem: PropTypes.array,
	userName: PropTypes.string,
};

export default CourseInfo;
