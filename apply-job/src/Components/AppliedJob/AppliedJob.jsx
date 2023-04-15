import React from "react";
import "./AppliedJob.css";
import locationImg from "../../assets/Icons/Frame-4.png";
import moneyImg from "../../assets/Icons/Frame.png";
import { Link } from "react-router-dom";

const AppliedJob = ({ filteredAppliedJobs, index }) => {
	const id = filteredAppliedJobs[index].JobId;

	return (
		<div className="appliedJob">
			<div className="appliedJobLogo">
				<img
					style={{ maxWidth: "238px" }}
					src={filteredAppliedJobs[index].CompanyLogo}
					alt=""
				/>
			</div>
			<div className="flexBetween">
				<div>
					<p className="FeaturedName">{filteredAppliedJobs[index].JobTitle}</p>
					<p className="FeaturedDetails">
						{filteredAppliedJobs[index].CompanyName}
					</p>
					<div className="flex">
						<p className="FeaturedDetailsBox">
							{filteredAppliedJobs[index].JobLocation}
						</p>
						<p className="FeaturedDetailsBox">
							{filteredAppliedJobs[index].JobType}
						</p>
					</div>
					<div className="flex">
						<div className="flex">
							<img className="detailsIconImg" src={locationImg} alt="" />
							<p className="FeaturedDetails">
								{filteredAppliedJobs[index].CompanyLocation.city},{" "}
								{filteredAppliedJobs[index].CompanyLocation.country}
							</p>
						</div>
						<div className="flex">
							<img className="detailsIconImg" src={moneyImg} alt="" />
							<p className="FeaturedDetails">
								Salary : {filteredAppliedJobs[index].Salary}
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
