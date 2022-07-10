import './App.css';
import React, { useState, useEffect } from 'react';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { v4 as uuid } from 'uuid';
import Registration from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CoursesNew from './components/Courses/CoursesNew';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses, getAuthors as getAuthorsService } from './service';

function App() {
	const [isShowCreateCourse, setIsShowCreateCourse] = useState(false);
	const [authors, setAuthors] = useState(getAuthors());
	const [coursesItem, setCoursesItem] = useState(getCources());
	const [allCoursesItem, setAllCoursesItem] = useState(getCources());
	const [userName, setUserName] = useState('Test User');

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCourses());
		//getCourses();
		dispatch(getAuthorsService());
	}, []);

	function onCreateNewCourse(newCourse) {
		const tempArray = [...coursesItem, newCourse[0]];

		setCoursesItem(tempArray);
		setAllCoursesItem(tempArray);
		setIsShowCreateCourse(!isShowCreateCourse);
	}

	function getUserName(text) {
		setUserName(text);
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

	function getCurrentAuthors(courseAuthors) {
		let resAuthors = [];
		courseAuthors.forEach((element) => {
			let resFilter = authors.filter((x) => x.id === element);
			if (resFilter) {
				resAuthors.push(...resFilter);
			}
		});

		return resAuthors;
	}

	function getCurrentCourse(courseId) {
		return allCoursesItem.filter((x) => x.id === courseId);
	}

	function GoToCourse() {
		const params = useParams();

		const courseItem = getCurrentCourse(params.courseId);

		const courseAuthors = getCurrentAuthors(courseItem[0].authors);

		return (
			<CourseInfo
				courseItem={courseItem}
				courseAuthors={courseAuthors}
				userName={userName}
			/>
		);
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<CoursesNew />} />
				<Route path='registration' element={<Registration />} />
				<Route path='login' element={<Login userName={getUserName} />} />
				<Route path='courses/:courseId' element={<GoToCourse />} />
				<Route
					path='courses/add'
					element={
						<CreateCourse
							itemAuthors={authors}
							changeIsShowCreateCourse={changeIsShowCreateCourse}
							addNewAuthors={addNewAuthors}
							onCreateNewCourse={onCreateNewCourse}
							userName={userName}
						/>
					}
				/>
				<Route
					path='courses'
					element={
						<Courses
							courseItems={coursesItem}
							itemAuthors={authors}
							changeIsShowCreateCourse={changeIsShowCreateCourse}
							onSearchCourses={onSearchCourses}
							userName={userName}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
