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
import { useDispatch, useSelector } from 'react-redux';

function Courses(props) {
	//const [itemAuthors] = useState(props.itemAuthors);
	let navigate = useNavigate();

	const courses = useSelector((state) => state.courses);
	const itemAuthors = useSelector((state) => state.authors);

	const isLogIn = useSelector((state) => state.users.isAuth);

	function changeShowCreateCourse() {
		//props.changeIsShowCreateCourse();
		navigate(`/courses/add`);
	}

	function onSearchCourse(text) {
		props.onSearchCourses(text);
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
		//const currentToken = localStorage.getItem('courseUserToken');
		//if (currentToken === null) {
		if (isLogIn === false) {
			navigate(`/login`);
		}
	});

	return (
		<div>
			<Header />
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
						index={index}
					/>
				))}
			</div>
		</div>
	);
}

Courses.propTypes = {
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

export default Courses;
