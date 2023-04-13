import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
import SubBanner from "../SubBanner/SubBanner";
import "./AppliedJobs.css";

const AppliedJobs = () => {
	const appliedJobs = useLoaderData();
	return (
		<div>
			<SubBanner></SubBanner>
			<div className="appliedJobContainer">
				{appliedJobs.map((j, i) => (
					<AppliedJob
						key={j.JobId}
						appliedJobs={appliedJobs}
						index={i}></AppliedJob>
				))}
			</div>
		</div>
	);
};

export default AppliedJobs;
