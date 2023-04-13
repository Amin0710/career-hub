import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../Activelink/Activelink";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<nav>
				<div className="logo">ApplyJob</div>
				<div>
					<ActiveLink to="/">Home</ActiveLink>
					<ActiveLink to="/Statistics">Statistics</ActiveLink>
					<ActiveLink to="/AppliedJobs">Applied Jobs</ActiveLink>
					<ActiveLink to="/Blog">Blog</ActiveLink>
				</div>
				<button>Star Applying</button>
			</nav>
		</header>
	);
};

export default Header;
