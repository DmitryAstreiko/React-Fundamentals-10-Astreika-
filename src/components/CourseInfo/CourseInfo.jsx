import '../../App.css';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import getCourseDuration from '../../helpers/getCourseDuration';
import Header from '../Header/Header';
import formatCreationDate from '../../helpers/formatCreationDate';

export function CourseInfo(props) {
	let navigate = useNavigate();

	function showCourses() {
		navigate(`/courses`);
	}

	return (
		<div>
			<Header />
			<div className='CourseInfoMain'>
				<Button
					type='button'
					buttonText='< Back to courses'
					onButtonPress={showCourses}
				/>
				<label style={{ textAlign: 'center', fontSize: '30px' }}>
					<b>{props.courseItem[0].title}</b>
				</label>
				<div className='CourseInfoDescriptionAndOther'>
					<div className='CourseInfoDescription'>
						{props.courseItem[0].description}
					</div>
					<div className='CourseInfoOther'>
						<label className='CourseInfoLabels'>
							<b>ID:</b> {props.courseItem[0].id}
						</label>
						<label className='CourseInfoLabels'>
							<b>Duration:</b> {getCourseDuration(props.courseItem[0].duration)}
						</label>
						<label className='CourseInfoLabels'>
							<b>Created:</b>{' '}
							{formatCreationDate(props.courseItem[0].creationDate)}
						</label>
						<label className='CourseInfoLabels'>
							<b>Authors:</b>
						</label>
						{props.courseAuthors.map((item) => (
							<label className='CourseInfoLabels'>{item.name}</label>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
