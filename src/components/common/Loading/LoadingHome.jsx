import React from "react";
import Sunny from "../../../assets/img/sunny.svg";

const LoadingHome = () => {
	return (
		<div className="loading-home">
			<div>
				<figure>
					<img src={Sunny} alt="Sunny Loader" />
				</figure>
				<p>Loading Weather!</p>
			</div>
		</div>
	);
};

export default LoadingHome;
