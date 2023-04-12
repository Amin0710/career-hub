import React from "react";
import vectorUp from "../../assets/All-Images/Vector-1.png";
import vectorDown from "../../assets/All-Images/Vector.png";
import "./SubBanner.css";

const SubBanner = () => {
	return (
		<div className="bannerback">
			<div>
				<img id="vectorUp" src={vectorUp} alt="" />
				<div className="logo flexCenter subBannerHead">
					<p>Job Details</p>
				</div>
				<img id="vectorDown" src={vectorDown} alt="" />
			</div>
		</div>
	);
};

export default SubBanner;
