import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Inpit';
import '../../../../App.css';
import { useState } from 'react';

function SearchBar(props) {
	const [inputText, setInputText] = useState(null);

	function onInputText(text) {
		setInputText(text);
	}

	function onSearch() {
		props.onSearchCourse(inputText);
	}

	return (
		<div className='SearchBarMain'>
			<div style={{ width: '40%' }}>
				<Input placeholderText='Enter course name...' onChange={onInputText} />
			</div>
			<Button buttonText='Search' onButtonPress={onSearch} />
		</div>
	);
}

export default SearchBar;
