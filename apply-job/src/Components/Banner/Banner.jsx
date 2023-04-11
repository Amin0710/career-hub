import React from "react";
import "./Banner.css";
import bannerMan from "../../assets/All-Images/P3OLGJ1.png";

const Banner = () => {
	return (
		<div className="banner-back">
			<div className="banner">
				<div className="banner-words">
					<div className="banner-words-content">
						<p id="bigHead">
							One Step Closer To Your
							<span id="bigHead-highlight"> Dream Job</span>
						</p>
						<p id="smallHead">
							Explore thousands of job opportunities with all the information
							you need. Its your future. Come find it. Manage all your job
							application from start to finish.
						</p>
						<button>Get Started</button>
					</div>
				</div>
				<div>
					<img src={bannerMan} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
