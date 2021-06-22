import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useGeolocation from "./hooks/useGeolocation";
import LoadingHome from "./components/common/Loading/LoadingHome";
import WeatherContent from "./components/common/routes/WeatherContent";
import "./assets/styles/App.scss";

function App() {
	const { loading } = useSelector((state) => state.currentLocation);
	const { getLocation } = useGeolocation();

	useEffect(() => {
		getLocation();
	}, []); //eslint-disable-line

	if (loading) {
		return <LoadingHome />;
	}

	return <WeatherContent />;
}

export default App;
