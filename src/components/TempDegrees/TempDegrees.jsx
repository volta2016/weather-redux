import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	convertToCelsius,
	convertToFahrenheit,
} from "../../store/slice/weatherSlice";

const TempDegrees = () => {
	const dispatch = useDispatch();
	const [toggle, setToggle] = useState(false);
	const change = () => setToggle(!toggle);
	return (
		<section className="container-degrees">
			<button
				className={`button-celsius ${!toggle ? "active" : ""}`}
				onClick={() => {
					dispatch(convertToCelsius());
					change();
				}}
			>
				°C
			</button>

			<button
				className={`button-celsius ${toggle ? "active" : ""}`}
				onClick={() => {
					dispatch(convertToFahrenheit());
					change();
				}}
			>
				°F
			</button>
		</section>
	);
};

export default TempDegrees;
