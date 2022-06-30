function FormatCreationDate(dateString) {
	const inputDate = Date.parse(dateString);

	const newDate = new Date(inputDate);

	return (
		('0' + newDate.getDate()).slice(-2) +
		'.' +
		('0' + (newDate.getMonth() + 1)).slice(-2) +
		'.' +
		newDate.getFullYear()
	);
}

export default FormatCreationDate;
