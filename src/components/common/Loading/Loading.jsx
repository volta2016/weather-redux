import React from "react";
import Sunny from "../../../assets/img/sunny.svg";

const Loading = () => {
	return (
		<div className="loading-container">
			<div>
				<figure>
					<img src={Sunny} alt="" />
				</figure>
				<p>Loading Weather!</p>
			</div>
		</div>
	);
};

export default Loading;
