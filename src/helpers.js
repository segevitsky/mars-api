export const todaysDate = () => {
	let today = new Date();
	const dd = String(today.getDate()).padStart(2, "0");
	const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	const yyyy = today.getFullYear();

	today = `${yyyy}-${mm}-${dd}`;
	return today;
};

// const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
// export const getImages = async (url) => {
// 	const response = await fetch(url);
// 	const data = await response.json();
// 	const photos = await data.photos;
// 	return photos;
// };
