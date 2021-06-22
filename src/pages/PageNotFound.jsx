import React from "react";
import { useHistory } from "react-router";
import NotFound from "../assets/img/cloud.svg";

const PageNotFound = () => {
	const history = useHistory();
	return (
		<div className="notfound">
			<h2>404 Error</h2>
			<img src={NotFound} alt="404 Not Found" />
			<span>Page not found</span>
			<button
				onClick={() => {
					history.push("/");
				}}
			>
				Go back Home
			</button>
		</div>
	);
};

export default PageNotFound;
