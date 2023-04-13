import React from "react";
import JobDetail from "../JobDetail/JobDetail";
import SubBanner from "../SubBanner/SubBanner";

const JobDetails = () => {
	const Head = "Job Details";
	return (
		<div>
			<SubBanner Head={Head}></SubBanner>
			<JobDetail></JobDetail>
		</div>
	);
};

export default JobDetails;
