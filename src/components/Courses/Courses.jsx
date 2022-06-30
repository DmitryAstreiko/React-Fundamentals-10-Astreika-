import React, { useState } from 'react';
import '../../App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import getCourseDuration from '../../helpers/getCourseDuration';
import formatCreationDate from '../../helpers/formatCreationDate';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

function Courses(props) {
	const [itemAuthors] = useState(props.itemAuthors);
	let navigate = useNavigate();

	function changeShowCreateCourse() {
		props.changeIsShowCreateCourse();
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
				{props.items.map((item, index) => (
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

export default Courses;
