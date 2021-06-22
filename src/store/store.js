import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { applyMiddleware } from "redux";
import currentWeatherSlice from "./slice/weatherSlice";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

const store = configureStore({
	reducer: {
		currentLocation: currentWeatherSlice,
	},
	middlewares: applyMiddleware(...middlewares),
});

export default store;
