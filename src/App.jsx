import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { v4 as uuid } from 'uuid';
import Registration from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [isShowCreateCourse, setIsShowCreateCourse] = useState(false);
	const [authors, setAuthors] = useState(getAuthors());
	const [coursesItem, setCoursesItem] = useState(getCources());
	const [allCoursesItem, setAllCoursesItem] = useState(getCources());
	const [isRegistration, setIsRegistration] = useState(true);

	function onCreateNewCourse(newCourse) {
		const tempArray = [...coursesItem, newCourse[0]];

		setCoursesItem(tempArray);
		setAllCoursesItem(tempArray);
		setIsShowCreateCourse(!isShowCreateCourse);
	}

	function addNewAuthors(text) {
		const tempAuthors = [...authors, { id: uuid(), name: text }];

		setAuthors(tempAuthors);
	}

	function onSearchCourses(text) {
		let resArray = [];

		if (text === '') {
			setCoursesItem(allCoursesItem);
		} else {
			if (coursesItem) {
				coursesItem?.forEach((element) => {
					const foundTitle = element.title.toLowerCase().indexOf(text, 0);
					const foundId = element.id.toLowerCase().indexOf(text, 0);
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
	/*{isShowCreateCourse ? (
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
			<div>
			<Header isRegistration={isRegistration} />
			{isRegistration && <Registration />}
		</div>*/
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Registration />} />
				<Route path='registration' element={<Registration />} />
				<Route path='login' element={<Login />} />
				<Route path='courses/:courseId' element={<CourseInfo />} />
				<Route
					path='courses/add'
					element={
						<CreateCourse
							itemAuthors={authors}
							changeIsShowCreateCourse={changeIsShowCreateCourse}
							addNewAuthors={addNewAuthors}
							onCreateNewCourse={onCreateNewCourse}
						/>
					}
				/>
				<Route
					path='courses'
					element={
						<Courses
							items={coursesItem}
							itemAuthors={authors}
							changeIsShowCreateCourse={changeIsShowCreateCourse}
							onSearchCourses={onSearchCourses}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
