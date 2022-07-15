import './App.css';
import React, { useEffect } from 'react';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import Registration from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router';
import { loadCourses } from './store/courses/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { loadAuthors } from './store/authors/thunk';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

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

	function GoToUpdateCourse() {
		const params = useParams();

		const courseItem = getCurrentCourse(params.courseId);

		return <CourseForm updateMode='true' course={courseItem} />;
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='/courses/:courseId' element={<GoToCourse />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/users/me' element={<Login />} />
				<Route
					path='/courses/add'
					element={
						<PrivateRoute>{<CourseForm addMode='true' />} </PrivateRoute>
					}
				/>
				<Route
					path='/courses/update/:courseId'
					element={<PrivateRoute>{<GoToUpdateCourse />} </PrivateRoute>}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
