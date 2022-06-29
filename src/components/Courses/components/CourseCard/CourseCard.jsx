import React from 'react';
import '../../../../App.css';
import Button from '../../../../common/Button/Button';

function CourseCard(props) {
	return (
		<div className='CourseCardMain'>
			<div className='CourseCardTitleDesc'>
				<div className='CourseCardTitle'>
					<b>{props.title}</b>
				</div>
				<div>{props.description}</div>
			</div>
			<div className='CourseCardOther'>
				<div className='CourseCardOtherOne'>
					<b>Authors: </b>
					{props.authors}
				</div>
				<div className='CourseCardOtherOne'>
					<b>Duration: </b>
					{props.duration}
				</div>
				<div className='CourseCardOtherOne'>
					<b>Created: </b>
					{props.created}
				</div>
				<div className='CourseCardName'>
					<div>
						<Button buttonText='Show course' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
