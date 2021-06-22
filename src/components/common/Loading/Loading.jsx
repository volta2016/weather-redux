import React from "react";
import { ReactComponent as SVGClose } from "../../../assets/img/sunny.svg";

const Loading = () => {
	return (
		<div className="loading-container">
			<div>
				<SVGClose />
				<p>Loading Weather!</p>
			</div>
		</div>
	);
};

export default Loading;
