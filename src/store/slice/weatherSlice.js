import { createSlice } from "@reduxjs/toolkit";
import {
	getCurrentWeatherLocation,
	getSearchWoeid,
	getSearchWeather,
} from "../thunk";

const initialState = {
	currentGeoLocation: null,
	todayWeather: {},
	nextFiveDaysWeather: [],
	searchLocation: null,
	loadinSearchLocation: false,
	loading: true,
	tempCF: "celsius",
	sidebar: false,
	error: null,
};

const currentWeatherSlice = createSlice({
	name: "currentLocation",
	initialState,
	reducers: {
		convertToCelsius: (state) => {
			state.tempCF = "celsius";
		},
		convertToFahrenheit: (state) => {
			state.tempCF = "fahrenheit";
		},
		openSidebar: (state) => {
			state.sidebar = true;
		},
		closeSidebar: (state) => {
			state.sidebar = false;
		},
		setState: (state) => {
			state.searchLocation = [];
		},
	},
	extraReducers: {
		[getCurrentWeatherLocation.pending]: (state, action) => {
			state.loading = true;
		},
		[getCurrentWeatherLocation.fulfilled]: (state, action) => {
			state.currentGeoLocation = action.payload.title;
			state.todayWeather = action.payload?.consolidated_weather[0];
			state.nextFiveDaysWeather = action.payload.consolidated_weather.slice(1);
			state.loading = false;
		},
		[getCurrentWeatherLocation.rejected]: (state, action) => {
			
			state.error = action.payload;
		},
		[getSearchWeather.pending]: (state) => {
			state.loadinSearchLocation = true;
		},
		[getSearchWeather.fulfilled]: (state, action) => {
			state.searchLocation = action.payload;
			state.loadinSearchLocation = false;
		},
		[getSearchWoeid.pending]: (state) => {
			state.loading = true;
		},
		[getSearchWoeid.fulfilled]: (state, action) => {
			state.currentGeoLocation = action.payload.title;
			state.searchLocation = action.payload;
			state.todayWeather = action.payload?.consolidated_weather[0];
			state.nextFiveDaysWeather = action.payload.consolidated_weather.slice(1);
			state.loading = false;
		},
	},
});


export const {
	convertToCelsius,
	convertToFahrenheit,
	openSidebar,
	closeSidebar,
	setState,
} = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
