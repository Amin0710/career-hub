import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
import SubBanner from "../SubBanner/SubBanner";
import "./AppliedJobs.css";

const AppliedJobs = () => {
	const appliedJobs = useLoaderData();
	const Head = "Applied Jobs";
	return (
		<div>
			<SubBanner Head={Head}></SubBanner>
			<div className="appliedJobContainer">
				<div id="FilterBy">
					<button>Filter By ⬇️</button>
				</div>
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
