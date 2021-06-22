import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<ul className="navbar">
				<Link to="/">
					<li>Weather</li>
				</Link>
				<Link to="/weatherredux">
					<li>App Redux</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
