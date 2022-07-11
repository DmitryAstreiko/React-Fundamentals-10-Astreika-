import React, { useState, useEffect } from 'react';
import '../../../../App.css';
import AddAuthor from '../AddAuthor/AddAuthor';
import Duration from '../Duration/Duration';
import AuthorItem from '../AuthorItem/AuthorItem';
import { useSelector } from 'react-redux';

function Authors(props) {
	//const [allAuthors, setAuthors] = useState(props.itemsAuthors);
	const [selectedAuthors, setSelectedAuthors] = useState([]);
	const [abilityAuthors, setAbilityAuthors] = useState(props.itemsAuthors);
	//const [abilityAuthors, setAbilityAuthors] = useState([]);

	let allAuthors = useSelector((state) => state.authors);
	//setAbilityAuthors(allAuthors);

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

			setAbilityAuthors(tempAbilityAuthors);

			tempSelectedAuthors.splice(indexSelectedId, 1);

			setSelectedAuthors(tempSelectedAuthors);
		}
	}

	function onAddAuthorToList(id) {
		let tempAbilityAuthors = [];
		tempAbilityAuthors.push(...abilityAuthors);
		let tempSelectedAuthors = [];
		tempSelectedAuthors.push(...selectedAuthors);
		if (allAuthors) {
			allAuthors?.forEach((element) => {
				const foundId = element.id.toLowerCase().indexOf(id, 0);
				if (foundId > -1) {
					tempSelectedAuthors.push(element);

					const indexAbilityId = tempAbilityAuthors.findIndex(
						(elem) => elem.id === id
					);

					if (indexAbilityId > -1) {
						tempAbilityAuthors.splice(indexAbilityId, 1);

						setAbilityAuthors(tempAbilityAuthors);
					}
				}
			});
		}
		setSelectedAuthors(tempSelectedAuthors);

		props.onAuthorsSelected(tempSelectedAuthors);
	}

	function onAddAuthor(value) {
		props.AddAuthor(value);
	}

	useEffect(() => {
		//setAuthors(props.itemsAuthors);

		let tempAuthors = [];
		tempAuthors.push(...allAuthors);
		setAbilityAuthors(tempAuthors);
	}, [props.itemsAuthors, allAuthors]);

	return (
		<div className='AuthorsMain'>
			<div className='AuthorsAddAndDuration'>
				<AddAuthor itemsAuthors={allAuthors} onAddAuthors={onAddAuthor} />
				<Duration onDuration={onDuration} />
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
