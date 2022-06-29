import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { v4 as uuid } from 'uuid';

function App() {
	const [isShowCreateCourse, setIsShowCreateCourse] = useState(false);
	const [authors, setAuthors] = useState(getAuthors());
	const [coursesItem, setCoursesItem] = useState(getCources());
	const [allCoursesItem, setAllCoursesItem] = useState(getCources());
	return (
		<div>
			<Header />
			{isShowCreateCourse ? (
				<CreateCourse
					itemAuthors={authors}
					changeIsShowCreateCourse={changeIsShowCreateCourse}
					addNewAuthors={addNewAuthors}
					onCreateNewCourse={onCreateNewCourse}
				/>
			) : (
				<Courses
					items={coursesItem}
					itemAuthors={authors}
					changeIsShowCreateCourse={changeIsShowCreateCourse}
					onSearchCourses={onSearchCourses}
				/>
			)}
		</div>
	);

	function onCreateNewCourse(newCourse) {
		var tempArray = [];
		tempArray.push(...coursesItem);
		tempArray.push(newCourse[0]);
		setCoursesItem(tempArray);
		setAllCoursesItem(tempArray);
		setIsShowCreateCourse(!isShowCreateCourse);
	}

	function addNewAuthors(text) {
		var tempAuthors = [];
		tempAuthors.push(...authors);
		tempAuthors.push({ id: uuid(), name: text });
		setAuthors(tempAuthors);
	}

	function onSearchCourses(text) {
		var resArray = [];
		//var mockedCourses = coursesItem;

		if (text === '') {
			setCoursesItem(allCoursesItem);
		} else {
			if (coursesItem) {
				coursesItem?.forEach((element) => {
					var foundTitle = element.title.toLowerCase().indexOf(text, 0);
					var foundId = element.id.toLowerCase().indexOf(text, 0);
					if (foundTitle > -1 || foundId > -1) {
						resArray.push(element);
					}
				});
			}

			if (resArray.length > 0) {
				setCoursesItem(resArray);
			}
		}
	}

	function changeIsShowCreateCourse() {
		setIsShowCreateCourse(!isShowCreateCourse);
	}

	function getAuthors() {
		return mockedAuthorsList;
	}

	function getCources() {
		return mockedCoursesList;
	}
}

export default App;
