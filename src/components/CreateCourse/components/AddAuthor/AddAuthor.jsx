import React, { useState } from 'react';
import '../../../../App.css';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Inpit';

function AddAuthor(props) {
	const [nameAuthor, setnameAuthor] = useState(null);
	return (
		<div className='AddAuthorMain'>
			<label className='CreateCourseLabelsParagraph'>
				<b>Add author</b>
			</label>
			<label className='CreateCourseLabels'>Author name</label>
			<Input placeholderText='Enter author name...' onChange={onInputText} />
			<div style={{ textAlign: 'center' }}>
				<Button buttonText='Create author' onButtonPress={addAuthor} />
			</div>
		</div>
	);

	function addAuthor() {
		if (nameAuthor !== '') {
			props.onAddAuthors(nameAuthor);
		}
	}

	function onInputText(name) {
		setnameAuthor(name);
	}
}

export default AddAuthor;
