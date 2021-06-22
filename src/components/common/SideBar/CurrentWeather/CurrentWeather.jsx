import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openSidebar } from "../../../../store/slice/weatherSlice";
import SVGLocation from "../../../../assets/img/location.svg";
import useGeolocation from "../../../../hooks/useGeolocation";
import { formatDate, setConvertCToF, setUnitTemp } from "../../../../utils";
import MapMarket from "../../../../assets/img/mapmarker.svg";

const CurrentWeather = ({
	currentGeoLocation,
	todayWeather,
	tempCF,
	openSidebar,
}) => {
	const { getLocation } = useGeolocation();

	const handleSearchWeather = () => {
		getLocation();
	};

	return (
		<div className="wrapper">
			<div className="cloud"></div>
			<div className="flexelement">
				<button className="search-places" onClick={() => openSidebar()}>
					Search for place
				</button>
				<i onClick={handleSearchWeather}>
					<img className="location" src={SVGLocation} alt="Map Market" />
				</i>
			</div>
			{todayWeather && (
				<div className="currentweather">
					<img
						src={`https://www.metaweather.com//static/img/weather/${todayWeather.weather_state_abbr}.svg`}
						alt={`${todayWeather.weather_state_name}`}
					/>
					<h3 className="temp">
						{setConvertCToF(todayWeather?.the_temp, tempCF)}
						<span>{setUnitTemp(tempCF)}</span>
					</h3>
					<h3>{todayWeather.weather_state_name}</h3>

					<h4>Today · {formatDate(todayWeather.applicable_date)}</h4>
					<p>
						<i className="iconmap">
							<img src={MapMarket} alt="Map Market" />
						</i>
						{currentGeoLocation}
					</p>
				</div>
			)}
		</div>
	);
};

// def PropTypes

CurrentWeather.protoTypes = {
	currentGeoLocation: PropTypes.string.isRequired,
	todayWeather: PropTypes.object.isRequired,
	tempCF: PropTypes.string.isRequired,
	openSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {
		currentGeoLocation: state.currentLocation.currentGeoLocation,
		todayWeather: state.currentLocation.todayWeather,
		tempCF: state.currentLocation.tempCF,
	};
};

const mapDispatchToProps = (dispatch) => ({
	openSidebar: () => dispatch(openSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
