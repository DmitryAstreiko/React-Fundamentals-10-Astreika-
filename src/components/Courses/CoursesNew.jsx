import React, { useState, useEffect } from 'react';
import '../../App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import getCourseDuration from '../../helpers/getCourseDuration';
import formatCreationDate from '../../helpers/formatCreationDate';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCourses as getCoursesAction } from '../../store/courses/actions';

//https://www.youtube.com/watch?v=dgM9OGVfKCQ

function CoursesNew({ courses, getCourses }) {
	//const [itemAuthors] = useState(props.itemAuthors);
	const [itemAuthors] = useState();
	let navigate = useNavigate();

	function changeShowCreateCourse() {
		//props.changeIsShowCreateCourse();
		//navigate(`/courses/add`);
	}

	function onSearchCourse(text) {
		//props.onSearchCourses(text);
	}

	function getAuthorsByIds(arrayAuthors) {
		let resAuthors = null;
		for (let authorId of arrayAuthors) {
			for (let authorItem of itemAuthors) {
				if (authorItem.id === authorId) {
					if (resAuthors === null) {
						resAuthors = authorItem.name;
					} else {
						resAuthors = resAuthors.concat(', ').concat(authorItem.name);
					}
				}
			}
		}
		return resAuthors;
	}

	useEffect(() => {
		getCourses();
		/*const currentToken = localStorage.getItem('courseUserToken');
		if (currentToken === null) {
			navigate(`/login`);
		}*/
	});

	console.log(courses);

	return (
		<div>
			<Header isRegistration={false} userName={'Test'} />
			<div className='CoursesMain'>
				<div className='CoursesSearchAddCourse'>
					<SearchBar onSearchCourse={onSearchCourse} />
					<div>
						<Button
							buttonText='Add new course'
							onButtonPress={changeShowCreateCourse}
							type='button'
						/>
					</div>
				</div>
				{courses.map((item, index) => (
					<CourseCard
						key={index}
						id={item.id}
						title={item.title}
						description={item.description}
						authors={getAuthorsByIds(item.authors)}
						duration={getCourseDuration(item.duration)}
						created={formatCreationDate(item.creationDate)}
					/>
				))}
			</div>
		</div>
	);
}

CoursesNew.propTypes = {
	itemAuthors: PropTypes.array,
	userName: PropTypes.string,
	//courseItems: PropTypes.object,

	/*courseItems: React.PropTypes.shape({
		id: React.PropTypes.string,
		title: React.PropTypes.string,
		description: React.PropTypes.string,
		duration: React.PropTypes.string,
		creationDate: React.PropTypes.string,
		authors: React.PropTypes.string,
	}),*/
};

export default connect(({ courses }) => ({ courses: courses }), {
	getCourses: getCoursesAction,
})(CoursesNew);
