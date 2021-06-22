import axios from "axios";
import { API_BASEURL, API_SEARCH, URL_CORS } from "../constants/index";

export const fetchCurrentLocaction = (latlong) =>
	axios
		.get(`${URL_CORS}${API_SEARCH}?lattlong=${latlong}`)
		.then((res) => res.data);

export const fetchLocationSelected = (woeid) =>
	axios.get(`${URL_CORS}${API_BASEURL}${woeid}`).then((res) => res.data);

export const fetchgetSearchWeather = (searchcity) =>
	axios
		.get(`${URL_CORS}${API_SEARCH}?query=${searchcity}`)
		.then((res) => res.data);
