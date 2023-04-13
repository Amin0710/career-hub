import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<nav>
				<div className="logo">ApplyJob</div>
				<div>
					<Link to="/">Home</Link>
					<Link to="/Statistics">Statistics</Link>
					<Link to="/AppliedJobs">Applied Jobs</Link>
					<Link to="/Blog">Blog</Link>
				</div>
				<button>Star Applying</button>
			</nav>
		</header>
	);
};

export default Header;
