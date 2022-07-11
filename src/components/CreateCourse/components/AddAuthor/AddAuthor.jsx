import React, { useState } from 'react';
import '../../../../App.css';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Inpit';
import { useDispatch, useSelector } from 'react-redux';
import { addAuthorsAction } from '../../../../store/authors/actions';

function AddAuthor() {
	const [nameAuthor, setnameAuthor] = useState(null);

	const dispatch = useDispatch();

	function addAuthor() {
		if (nameAuthor !== '') {
			//props.onAddAuthors(nameAuthor);
			dispatch(addAuthorsAction(nameAuthor));
		}
	}

	function onInputText(name) {
		setnameAuthor(name);
	}
	return (
		<div className='AddAuthorMain'>
			<label className='CreateCourseLabelsParagraph'>
				<b>Add author</b>
			</label>
			<label className='CreateCourseLabels'>Author name</label>
			<Input
				placeholderText='Enter author name...'
				onChange={onInputText}
				type='text'
			/>
			<div style={{ textAlign: 'center' }}>
				<Button
					buttonText='Create author'
					onButtonPress={addAuthor}
					type='button'
				/>
			</div>
		</div>
	);
}

export default AddAuthor;
