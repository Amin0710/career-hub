import React from "react";
import "./JobDetailTab.css";
import locationImg from "../../assets/Icons/Frame-4.png";
import moneyImg from "../../assets/Icons/Frame.png";
import jobImg from "../../assets/Icons/Frame-1.png";
import phoneImg from "../../assets/Icons/Frame-2.png";
import emailImg from "../../assets/Icons/Frame-3.png";
import { addToDb } from "../../Utilities/fakeDB";

const handleAppliedJobs = (id) => {
	addToDb(id);
};

const JobDetailTab = ({ job }) => {
	return (
		<div>
			<div className="tabBlackground">
				<p className="CategoryName">Job Details</p>
				<hr className="tabhr"></hr>
				<div className="flexAlign">
					<img src={moneyImg} alt="" />
					<p className="tabText">
						<span className="tabTextTitle">Salary : </span>
						{job.Salary} (Yearly)
					</p>
				</div>
				<div className="flexAlign">
					<img src={jobImg} alt="" />
					<p className="tabText">
						<span className="tabTextTitle">Job Title : </span>
						{job.JobTitle}
					</p>
				</div>
				<p className="CategoryName" id="secondTitle">
					Contact Information
				</p>
				<hr className="tabhr"></hr>
				<div className="flexAlign">
					<img src={phoneImg} alt="" />
					<p className="tabText">
						<span className="tabTextTitle">Phone : </span>
						{job.ContactInformation.Phone}
					</p>
				</div>
				<div className="flexAlign">
					<img src={emailImg} alt="" />
					<p className="tabText">
						<span className="tabTextTitle">Email : </span>
						{job.ContactInformation.Email}
					</p>
				</div>
				<div className="flexAlign">
					<img src={locationImg} alt="" />
					<p className="tabText">
						<span className="tabTextTitle">Address : </span>
						{job.ContactInformation.Address}
					</p>
				</div>
			</div>
			<button
				onClick={() => handleAppliedJobs(job.JobId)}
				className="applyButton">
				Apply Now
			</button>
		</div>
	);
};

export default JobDetailTab;
