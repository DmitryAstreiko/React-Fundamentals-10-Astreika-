import React, { useState } from 'react';
import '../../../../App.css';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Inpit';
import { useDispatch } from 'react-redux';
import { addAuthor } from '../../../../store/authors/thunk';
import { useSelector } from 'react-redux';

function AddAuthor() {
	const [nameAuthor, setnameAuthor] = useState(null);
	const userInfo = useSelector((state) => state.users);
	const token = userInfo.token;

	const dispatch = useDispatch();

	function onAddAuthor() {
		if (nameAuthor !== '') {
			const authorInfo = {
				name: nameAuthor,
			};

			addAuthor(authorInfo, token)(dispatch);
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
					onButtonPress={onAddAuthor}
					type='button'
				/>
			</div>
		</div>
	);
}

export default AddAuthor;
