// import { URL_CORS, API_BASEURL } from "../../constants/api";
// import { API_FILTERS } from "../../constants/filters";
import axios from "axios";
import usegeoLocation from "../hooks/useGeolocation";
console.log("hola");

const fetchCoordinates = async () => {
	try {
		const coords = await usegeoLocation();
		const { latitude, longitude } = coords;
		fetchDataWithLongLat(latitude.toFixed(2), longitude.toFixed(2));
		console.log();
	} catch (error) {
		alert(error);
		console.error(error);
	}
};
fetchCoordinates();

const fetchDataWithLongLat = (lat, long) => {
	axios
		.get(
			`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`
		)
		.then((response) => {
			const data = response.data[0];
			console.log(data);
			return fetchDatawithWoeid(data.woeid);
		});
};

const fetchDatawithWoeid = (id) => {
	axios
		.get(
			`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${id}/`
		)
		.then((response) => {
			const data = {
				data: response.data.consolidated_weather,
				location: response.data.title,
			};
			console.log(data);
		})
		.catch((error) => {
			alert(error);
			console.log(error);
		});
};
