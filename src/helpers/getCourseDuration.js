function GetCourseDuration(string) {
	const inputNum = parseInt(string);

	const hours = Math.floor(inputNum / 60);

	const minutes = inputNum - hours * 60;

	const aboutHour = hours < 11 ? `0${hours}` : hours;

	const aboutMinutes = minutes < 11 ? `0${minutes}` : minutes;

	const aboutEndHour = hours < 2 ? ' hour' : ' hours';

	return `${aboutHour}:${aboutMinutes}${aboutEndHour}`;
}

export default GetCourseDuration;
