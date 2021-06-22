import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { setConvertCToF, setUnitTemp } from "../../utils";

const ContentImage = lazy(() => import("../common/ContentImage"));

const WeatherDay = ({ nameDay, icon, maxTemp, minTemp }) => {
	const tempCF = useSelector((state) => state.currentLocation.tempCF);

	return (
		<li>
			<p>{nameDay}</p>
			<Suspense fallback={<p className="loadingtxt">Loading ...</p>}>
				<ContentImage image={icon} title={nameDay} />
			</Suspense>
			<div>
				<p>
					{setConvertCToF(maxTemp, tempCF)}
					{setUnitTemp(tempCF)}
				</p>
				<p>
					{setConvertCToF(minTemp, tempCF)}
					{setUnitTemp(tempCF)}
				</p>
			</div>
		</li>
	);
};

export default WeatherDay;
