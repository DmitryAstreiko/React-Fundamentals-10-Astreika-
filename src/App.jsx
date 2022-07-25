import './App.css';
import React, { useEffect } from 'react';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loadCourses, loadAuthors } from './service';

function App() {
	let allCoursesItem = useSelector((state) => state.courses);
	let authors = useSelector((state) => state.authors);

	const dispatch = useDispatch();

	useEffect(() => {
		loadCourses(dispatch);
		loadAuthors(dispatch);
	}, []);

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

		return <CourseInfo courseItem={courseItem} courseAuthors={courseAuthors} />;
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='registration' element={<Registration />} />
				<Route path='login' element={<Login />} />
				<Route path='courses/:courseId' element={<GoToCourse />} />
				<Route path='courses/add' element={<CreateCourse />} />
				<Route path='courses' element={<Courses />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
