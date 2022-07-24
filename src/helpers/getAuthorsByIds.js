function getAuthorsByIds(arrayAuthors, itemAuths) {
	let resAuthors = null;
	for (let authorId of arrayAuthors) {
		for (let authorItem of itemAuths) {
			if (authorItem.id === authorId) {
				if (resAuthors === null) {
					resAuthors = authorItem.name;
				} else {
					resAuthors = resAuthors.concat(', ').concat(authorItem.name);
				}
			}
		}
	}
	return resAuthors;
}

export default getAuthorsByIds;
