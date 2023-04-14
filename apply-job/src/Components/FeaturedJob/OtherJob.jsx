import React from "react";
import "./FeaturedJob.css";
import { Link } from "react-router-dom";
import locationImg from "../../assets/Icons/Frame-4.png";
import moneyImg from "../../assets/Icons/Frame.png";

const OtherJob = ({ OtherJobs, index }) => {
	const id = OtherJobs[index].JobId;
	return (
		<div className="FeaturedBox">
			<div>
				<img className="logoImg" src={OtherJobs[index].CompanyLogo} alt="" />
			</div>
			<p className="FeaturedName">{OtherJobs[index].JobTitle}</p>
			<p className="FeaturedDetails">{OtherJobs[index].CompanyName}</p>
			<div className="flex">
				<p className="FeaturedDetailsBox">{OtherJobs[index].JobLocation}</p>
				<p className="FeaturedDetailsBox">{OtherJobs[index].JobType}</p>
			</div>
			<div className="flexi">
				<div className="flex">
					<img className="detailsIconImg" src={locationImg} alt="" />
					<p className="FeaturedDetails">
						{OtherJobs[index].CompanyLocation.city},{" "}
						{OtherJobs[index].CompanyLocation.country}
					</p>
				</div>
				<div className="flex">
					<img className="detailsIconImg none" src={moneyImg} alt="" />
					<p className="FeaturedDetails">Salary : {OtherJobs[index].Salary}</p>
				</div>
			</div>
			<button className="viewButton">
				<Link to={`/job/${id}`}>View Details</Link>
			</button>
		</div>
	);
};

export default OtherJob;
