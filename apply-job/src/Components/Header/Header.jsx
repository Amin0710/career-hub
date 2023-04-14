import React from "react";
import menu from "../../assets/All-Images/menu.png";
import ActiveLink from "../Activelink/Activelink";
import "./Header.css";

const Header = () => {
	const showLinks = () => {
		const x = document.getElementById("links");
		if (x.style.display === "none") {
			x.style.display = "flex";
		} else {
			x.style.display = "none";
		}
	};
	return (
		<header className="header">
			<nav id="nav">
				<div className="logo">ApplyJob</div>
				<div onClick={showLinks} className="semi-none">
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
