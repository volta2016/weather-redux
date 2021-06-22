import { useState } from "react";
import { getCurrentWeatherLocation } from "../store/thunk";
import { useDispatch } from "react-redux";

const useGeolocation = () => {
	const [loadingApp, setLoadingApp] = useState(true);
	const dispatch = useDispatch();

	const getLocation = () => {
		const latlong = {
			latitude: 51.506321,
			longitude: -0.12714,
		};
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const latlong = {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					};
					dispatch(getCurrentWeatherLocation(latlong));
					// llamar a la api
					setLoadingApp(false);
				},
				() => {
					// console.log(err.message);

					dispatch(getCurrentWeatherLocation(latlong));
					setLoadingApp(false);
				}
			);
		} else {
			dispatch(getCurrentWeatherLocation(latlong));
			setLoadingApp(false);
		}
	};

	// useEffect(() => {
	// 	getLocation();
	// }, []); //dispatch

	return { loadingApp, getLocation };
};

export default useGeolocation;

// title: "London",
// location_type: "City",
// woeid: 44418,
// latt_long: "51.506321,-0.12714",
// timezone: "Europe/London"
