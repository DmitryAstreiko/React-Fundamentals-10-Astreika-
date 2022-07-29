import React from 'react';
import '../../../../App.css';
import AddAuthor from '../AddAuthor/AddAuthor';
import Duration from '../Duration/Duration';
import AuthorItem from '../AuthorItem/AuthorItem';
import { useSelector } from 'react-redux';

function Authors(props) {
	let selectedAuthors = [];
	let abilityAuthors = useSelector((state) => state.authors);

	let allAuthors = useSelector((state) => state.authors);

	function onDuration(text) {
		props.onDurationChange(text);
	}

	function onDelAuthorToList(id) {
		let tempAbilityAuthors = [];
		tempAbilityAuthors.push(...abilityAuthors);
		let tempSelectedAuthors = [];
		tempSelectedAuthors.push(...selectedAuthors);

		const indexSelectedId = tempSelectedAuthors.findIndex(
			(elem) => elem.id === id
		);

		if (indexSelectedId > -1) {
			tempAbilityAuthors.push({
				id: tempSelectedAuthors[indexSelectedId].id,
				name: tempSelectedAuthors[indexSelectedId].name,
			});

			abilityAuthors = tempAbilityAuthors;

			tempSelectedAuthors.splice(indexSelectedId, 1);

			selectedAuthors = tempSelectedAuthors;
		}
	}

	function onAddAuthorToList(id) {
		let tempAbilityAuthors = [];
		tempAbilityAuthors.push(...abilityAuthors);
		let tempSelectedAuthors = [];
		tempSelectedAuthors.push(...selectedAuthors);

		if (allAuthors) {
			allAuthors?.forEach((element) => {
				const foundId = element.id.indexOf(id);
				if (foundId > -1) {
					tempSelectedAuthors.push(element);

					const indexAbilityId = tempAbilityAuthors.findIndex(
						(elem) => elem.id === id
					);

					if (indexAbilityId > -1) {
						tempAbilityAuthors.splice(indexAbilityId, 1);

						abilityAuthors = tempAbilityAuthors;
					}
				}
			});
		}
		selectedAuthors = tempSelectedAuthors;

		props.onAuthorsSelected(tempSelectedAuthors);
	}

	return (
		<div className='AuthorsMain'>
			<div className='AuthorsAddAndDuration'>
				<AddAuthor />
				<Duration onDuration={onDuration} value={props.durationValue} />
			</div>
			<div className='AuthorsListAndDelete'>
				<label className='CreateCourseLabelsParagraph'>
					<b>Authors</b>
				</label>
				{abilityAuthors?.map((item, index) => (
					<AuthorItem
						key={index}
						id={item.id}
						AuthorName={item.name}
						ButtonName='Add author'
						onButtonPress={onAddAuthorToList}
					/>
				))}
				<label className='CreateCourseLabelsParagraph'>
					<b>Course authors</b>
				</label>
				{selectedAuthors.length > 0 ? (
					selectedAuthors?.map((item, index) => (
						<AuthorItem
							key={index}
							id={item.id}
							AuthorName={item.name}
							ButtonName='Delete author'
							onButtonPress={onDelAuthorToList}
						/>
					))
				) : (
					<label style={{ textAlign: 'center' }}>
						<b>Author list is empty</b>
					</label>
				)}
			</div>
		</div>
	);
}

export default Authors;
