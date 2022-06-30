import '../../App.css';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';

export function CourseInfo(props) {
	let navigate = useNavigate();

	function showCourses() {
		navigate(`/courses`);
	}

	return (
		<div className='CourseInfoMain'>
			<Button
				type='button'
				buttonText='< Back to courses'
				onButtonPress={showCourses}
			/>
			<label style={{ textAlign: 'center', fontSize: '30px' }}>
				<b>Title</b>
			</label>
			<div className='CourseInfoDescriptionAndOther'>
				<div className='CourseInfoDescription'>Description</div>
				<div className='CourseInfoOther'>
					<label>
						<b>ID:</b>
					</label>
					<label>
						<b>Duration:</b>
					</label>
					<label>
						<b>Created:</b>
					</label>
					<label>
						<b>Authors:</b>
					</label>
					<label>Author 1</label>
					<label>Author 2</label>
				</div>
			</div>
		</div>
	);
}
