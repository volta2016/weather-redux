import React from "react";

const Hightlight = ({ title, unit, number, children }) => {
	return (
		<li>
			<p>{title}</p>
			<h3>
				{number}
				<span>{unit}</span>
			</h3>
			{children}
		</li>
	);
};

export default Hightlight;
