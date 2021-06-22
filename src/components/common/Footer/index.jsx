import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<small>
				created by{" "}
				<b>
					<a href="https://github.com/volta2016">volta2016</a>
				</b>{" "}
				- {new Date().getFullYear()}
			</small>
		</footer>
	);
};

export default Footer;
