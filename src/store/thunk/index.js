import * as API from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentWeatherLocation = createAsyncThunk(
	"currentGeoLocation/getCurrentWeatherLocation",
	async (payload) => {
		try {
			const params = {
				latlong: `${payload.latitude},${payload.longitude}`,
			};
			const { latlong } = params;

			const response = await API.fetchCurrentLocaction(latlong);

			const woeid = await response[0].woeid;

			const getWeather = await API.fetchLocationSelected(woeid);

			return getWeather;
		} catch (error) {
			throw error;
		}
	}
);

//next 5 days weather
export const getSearchWoeid = createAsyncThunk(
	"searchLocation/getSearchWoeid",
	async (payload, { rejectWithValue }) => {
		try {
			const response = await API.fetchLocationSelected(payload);
			return response;
		} catch (error) {
			throw error;
		}
	}
);

//find City
export const getSearchWeather = createAsyncThunk(
	"getSearchWeatherCity/getSearchWeather",
	async (payload, { rejectWithValue }) => {
		try {
			const response = await API.fetchgetSearchWeather(payload);
			return response;
		} catch (error) {
			throw error;
		}
	}
);
