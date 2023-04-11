import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";

const Layout = () => {
	return (
		<div>
			<Header></Header>
			<Banner></Banner>
			<Outlet></Outlet>
		</div>
	);
};

export default Layout;
