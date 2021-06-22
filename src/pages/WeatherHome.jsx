import React from "react";
import TempDegrees from "../components/TempDegrees/TempDegrees";
import ListWeatherDays from "../components/ListWeatherDays/ListWeatherDays";
import ListHightlights from "../components/ListHightlights/ListHightlights";
import Layout from "../components/common/layout";

const WeatherHome = () => {
	return (
		<Layout>
			<TempDegrees />
			<ListWeatherDays />
			<ListHightlights />
		</Layout>
	);
};

export default WeatherHome;
