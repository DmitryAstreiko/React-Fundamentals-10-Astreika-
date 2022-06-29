import React, { useState } from 'react';
import '../../App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import GetCourseDuration from '../../helpers/getCourseDuration';
import FormatCreationDate from '../../helpers/formatCreationDate';

function Courses(props) {
	const [itemAuthors] = useState(props.itemAuthors);
	return (
		<div className='CoursesMain'>
			<div className='CoursesSearchAddCourse'>
				<SearchBar onSearchCourse={onSearchCourse} />
				<div>
					<Button
						buttonText='Add new course'
						onButtonPress={changeShowCreateCourse}
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
					duration={GetCourseDuration(item.duration)}
					created={FormatCreationDate(item.creationDate)}
				/>
			))}
		</div>
	);

	function changeShowCreateCourse() {
		props.changeIsShowCreateCourse();
	}

	function onSearchCourse(text) {
		props.onSearchCourses(text);
	}

	function getAuthorsByIds(arrayAuthors) {
		var resAuthors = null;
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
}

export default Courses;
