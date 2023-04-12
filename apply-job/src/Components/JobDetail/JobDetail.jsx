import React from "react";
import "./JobDetail.css";
import { useLoaderData } from "react-router-dom";
import JobDetailTab from "./JobDetailTab";

const JobDetail = () => {
	const job = useLoaderData();
	return (
		<div className="flexCenter">
			<div className="jobDetail">
				<div>
					<p>
						<span className="title">Job Description:</span> {job.JobDescription}
					</p>
					<p>
						<span className="title">Job Responsibility:</span>{" "}
						{job.JobResponsibility}
					</p>
					<p>
						<span className="title">Educational Requirements:</span>{" "}
						{job.EducationalRequirements}
					</p>
					<p>
						<span className="title">Experiences:</span> {job.Experiences}
					</p>
				</div>
				<JobDetailTab key={job.jobID} job={job}></JobDetailTab>
			</div>
		</div>
	);
};

export default JobDetail;
