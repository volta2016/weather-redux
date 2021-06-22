import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getSearchWoeid } from "../../../../store/thunk";
import { closeSidebar, setState } from "../../../../store/slice/weatherSlice";

const SelectLocation = ({ location, woeid }) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(getSearchWoeid(woeid));
		dispatch(closeSidebar());
		dispatch(setState());
	};

	return (
		<div onClick={handleClick} className="location-select">
			<span>{location}</span>
			<i className="fas fa-chevron-right"></i>
		</div>
	);
};

SelectLocation.propTypes = {
	location: PropTypes.string.isRequired,
	woeid: PropTypes.number.isRequired,
};

export default SelectLocation;
