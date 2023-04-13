import React from "react";
import "./AppliedJob.css";
import locationImg from "../../assets/Icons/Frame-4.png";
import moneyImg from "../../assets/Icons/Frame.png";
import { Link } from "react-router-dom";

const AppliedJob = ({ appliedJobs, index }) => {
	const id = appliedJobs[index].JobId;

	return (
		<div className="appliedJob">
			<div className="appliedJobLogo">
				<img
					style={{ maxWidth: "238px" }}
					src={appliedJobs[index].CompanyLogo}
					alt=""
				/>
			</div>
			<div className="flexBetween">
				<div>
					<p className="FeaturedName">{appliedJobs[index].JobTitle}</p>
					<p className="FeaturedDetails">{appliedJobs[index].CompanyName}</p>
					<div className="flex">
						<p className="FeaturedDetailsBox">
							{appliedJobs[index].JobLocation}
						</p>
						<p className="FeaturedDetailsBox">{appliedJobs[index].JobType}</p>
					</div>
					<div className="flex">
						<div className="flex">
							<img className="detailsIconImg" src={locationImg} alt="" />
							<p className="FeaturedDetails">
								{appliedJobs[index].CompanyLocation.city},{" "}
								{appliedJobs[index].CompanyLocation.country}
							</p>
						</div>
						<div className="flex">
							<img className="detailsIconImg" src={moneyImg} alt="" />
							<p className="FeaturedDetails">
								Salary : {appliedJobs[index].Salary}
							</p>
						</div>
					</div>
				</div>
				<button className="viewButton">
					<Link to={`/job/${id}`}>View Details</Link>
				</button>
			</div>
		</div>
	);
};

export default AppliedJob;
