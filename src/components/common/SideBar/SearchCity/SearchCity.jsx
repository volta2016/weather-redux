import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../../../store/slice/weatherSlice";
import { getSearchWeather } from "../../../../store/thunk";
import Loading from "../../Loading/Loading";
import SelectLocation from "./SelectLocation";
import Close from "../../../../assets/img/close.svg";
import Search from "../../../../assets/img/search.svg";

const SearchCity = () => {
	const [city, setCity] = useState("");
	const { searchLocation, loadinSearchLocation } = useSelector(
		(state) => state.currentLocation
	);
	const sidebarToggle = useSelector((state) => state.currentLocation.sidebar);

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setCity(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (city) {
			dispatch(getSearchWeather(city));
		}
		setCity("");
	};

	return (
		<div className={`search-city  ${sidebarToggle ? "slideIn" : "slideOut"}`}>
			<figure className="close" onClick={() => dispatch(closeSidebar())}>
				<img src={Close} alt="Close" />
			</figure>

			<form className="flexelement" onSubmit={handleSubmit}>
				<div className="search-location">
					{/* <i className="fas fa-search" /> */}
					<i>
						<img src={Search} alt="Search" />
					</i>
					<input
						type="text"
						className="input"
						placeholder="search location"
						value={city}
						onChange={handleChange}
					/>
				</div>
				<button className="search-button">Search</button>
			</form>

			{loadinSearchLocation ? (
				<Loading />
			) : (
				<>
					{searchLocation?.length === 0 && (
						<div className="message">
							<p>We have no information about that location 😕</p>
							<p>try again 😁</p>
						</div>
					)}
					{searchLocation?.length > 0 &&
						searchLocation?.map((city) => (
							<SelectLocation
								location={city.title}
								key={city.woeid}
								woeid={city.woeid}
							/>
						))}
				</>
			)}
		</div>
	);
};

export default SearchCity;
