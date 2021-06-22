import React from "react";
import PropTypes from "prop-types";
import SideBar from "../SideBar";
import Main from "../Main";
import Nav from "../Nav";
import Footer from "../Footer";

const Layout = ({ children }) => {
	return (
		<div className="container-layout">
			<SideBar />
			<Main>
				<Nav />
				{children}
				<Footer />
			</Main>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
