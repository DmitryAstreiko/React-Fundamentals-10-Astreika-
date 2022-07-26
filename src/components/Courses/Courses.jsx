import React, { useEffect } from 'react';
import '../../App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import getCourseDuration from '../../helpers/getCourseDuration';
import formatCreationDate from '../../helpers/formatCreationDate';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import getAuthorsByIds from '../../helpers/getAuthorsByIds';

function Courses() {
	const navigate = useNavigate();
	const allCoursesItem = useSelector((state) => state.courses);
	let courses = useSelector((state) => state.courses);
	const itemAuthors = useSelector((state) => state.authors);
	const userInfo = useSelector((state) => state.users);
	const isLogIn = userInfo.isAuth;
	const userRole = userInfo.role;

	function changeShowCreateCourse() {
		navigate(`/courses/add`);
	}

	function onSearchCourse(text) {
		let resArray = [];

		if (text === '') {
			courses = allCoursesItem;
		} else {
			if (courses) {
				courses?.forEach((element) => {
					const foundTitle = element.title.toLowerCase().indexOf(text, 0);
					const foundId = element.id.toLowerCase().indexOf(text, 0);
					if (foundTitle > -1 || foundId > -1) {
						resArray.push(element);
					}
				});
			}

			if (resArray.length > 0) {
				courses = resArray;
			}
		}
	}

	useEffect(() => {
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
					{userRole === 'ADMIN' && (
						<div>
							<Button
								buttonText='Add new course'
								onButtonPress={changeShowCreateCourse}
								type='button'
							/>
						</div>
					)}
				</div>
				{courses.map((item, index) => (
					<CourseCard
						key={index}
						id={item.id}
						title={item.title}
						description={item.description}
						authors={getAuthorsByIds(item.authors, itemAuthors)}
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
	courseItems: PropTypes.object,

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
