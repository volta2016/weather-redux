import React from "react";
import { useSelector } from "react-redux";
import { dayCurrent } from "../../utils";
import WeatherDay from "../WeatherDay/WeatherDay";

const ListWeatherDays = () => {
	const weekdays = useSelector(
		(state) => state.currentLocation.nextFiveDaysWeather
	);

	return (
		<section>
			<ul className="listdayweather">
				{weekdays?.map((day, index) => (
					<WeatherDay
						key={day.id}
						nameDay={dayCurrent(day.applicable_date, index)}
						icon={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`}
						maxTemp={day.max_temp}
						minTemp={day.min_temp}
					/>
				))}
			</ul>
		</section>
	);
};

export default ListWeatherDays;
