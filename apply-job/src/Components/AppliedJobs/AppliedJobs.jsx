import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { showHide } from "../../Utilities/showHide";
import AppliedJob from "../AppliedJob/AppliedJob";
import SubBanner from "../SubBanner/SubBanner";
import "./AppliedJobs.css";

const AppliedJobs = () => {
	const appliedJobs = useLoaderData();
	const Head = "Applied Jobs";

	const [filterOption, setFilterOption] = useState("none");
	const [filteredAppliedJobs, setFilteredAppliedJobs] = useState(appliedJobs);

	const handleClick1 = () => {
		setFilterOption("Remote");
	};
	const handleClick2 = () => {
		setFilterOption("Onsite");
	};

	useEffect(() => {
		setFilteredAppliedJobs(
			appliedJobs.filter((j) => j.JobLocation !== filterOption)
		);
	}, [appliedJobs, filterOption]);

	return (
		<div>
			<SubBanner Head={Head}></SubBanner>
			<div className="appliedJobContainer">
				<div
					className="FilterBy"
					onClick={() => showHide("FilterOption", "flex")}>
					<button>Filter By ⬇️</button>
				</div>
				<div className="FilterBy" id="FilterOption">
					<button onClick={handleClick1}>Onsite</button>
					<button onClick={handleClick2}>Remote</button>
				</div>
				{filteredAppliedJobs.map((j, i) => (
					<AppliedJob
						key={j.JobId}
						filteredAppliedJobs={filteredAppliedJobs}
						index={i}></AppliedJob>
				))}
			</div>
		</div>
	);
};

export default AppliedJobs;
