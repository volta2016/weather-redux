import React from "react";
import { ReactComponent as SVGClose } from "../../../assets/img/sunny.svg";

const LoadingHome = () => {
	return (
		<div className="loading-home">
			<div>
				<SVGClose />
				<p>Loading Weather!</p>
			</div>
		</div>
	);
};

export default LoadingHome;
