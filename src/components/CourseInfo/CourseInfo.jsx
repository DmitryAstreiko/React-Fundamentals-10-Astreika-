import '../../App.css';
import Button from '../../common/Button/Button';

export function CourseInfo(props) {
	return (
		<div className='CourseInfoMain'>
			<Button type='button' buttonText='< Back to courses' />
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
