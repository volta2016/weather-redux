import CurrentWeather from "./CurrentWeather/CurrentWeather";
import SearchCity from "./SearchCity/SearchCity";

const SideBar = () => {
	return (
		<aside className="side-bar">
			<CurrentWeather />
			<SearchCity />
		</aside>
	);
};

export default SideBar;
