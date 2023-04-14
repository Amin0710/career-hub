import React from "react";
import "./FeaturedJob.css";
import { Link } from "react-router-dom";
import locationImg from "../../assets/Icons/Frame-4.png";
import moneyImg from "../../assets/Icons/Frame.png";

const FeaturedJob = ({ FeaturedJobs, index }) => {
	const id = FeaturedJobs[index].JobId;
	return (
		<div className="FeaturedBox">
			<div>
				<img src={FeaturedJobs[index].CompanyLogo} alt="" />
			</div>
			<p className="FeaturedName">{FeaturedJobs[index].JobTitle}</p>
			<p className="FeaturedDetails">{FeaturedJobs[index].CompanyName}</p>
			<div className="flex">
				<p className="FeaturedDetailsBox">{FeaturedJobs[index].JobLocation}</p>
				<p className="FeaturedDetailsBox">{FeaturedJobs[index].JobType}</p>
			</div>
			<div className="flexi">
				<div className="flex">
					<img className="detailsIconImg" src={locationImg} alt="" />
					<p className="FeaturedDetails">
						{FeaturedJobs[index].CompanyLocation.city},{" "}
						{FeaturedJobs[index].CompanyLocation.country}
					</p>
				</div>
				<div className="flex">
					<img className="detailsIconImg none" src={moneyImg} alt="" />
					<p className="FeaturedDetails">
						Salary : {FeaturedJobs[index].Salary}
					</p>
				</div>
			</div>
			<button className="viewButton">
				<Link to={`/job/${id}`}>View Details</Link>
			</button>
		</div>
	);
};

export default FeaturedJob;
