import React from "react";
import { showHide } from "../../Utilities/showHide";
import menu from "../../assets/All-Images/menu.png";
import ActiveLink from "../Activelink/Activelink";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<nav id="nav">
				<div className="logo">ApplyJob</div>
				<div onClick={() => showHide("links", "flex")} className="semi-none">
					<img src={menu} alt="" />
				</div>
				<div id="links">
					<ActiveLink to="/">Home</ActiveLink>
					<ActiveLink to="/Statistics">Statistics</ActiveLink>
					<ActiveLink to="/AppliedJobs">Applied Jobs</ActiveLink>
					<ActiveLink to="/Blog">Blog</ActiveLink>
				</div>
				<button className="none">Star Applying</button>
			</nav>
		</header>
	);
};

export default Header;
