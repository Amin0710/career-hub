import React from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import OtherJob from "../FeaturedJob/OtherJob";
import { showHide } from "../../Utilities/showHide";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
	const jobs = useLoaderData();
	let count = 0;
	let countOthers = 0;
	const FeaturedCompanies = ["Google", "Facebook", "Tesla", "Netflix"];
	const FeaturedJobs = [];
	const OtherJobs = [];
	{
		jobs.map((j) => {
			if (FeaturedCompanies.includes(j.CompanyName)) {
				!FeaturedJobs.includes(j) && FeaturedJobs.push(j);
			} else {
				!OtherJobs.includes(j) && OtherJobs.push(j);
			}
		});
	}
	const handleClick1 = () => {
		showHide("OtherJobs", "grid");
		showHide("seeAllButton", "none");
		showHide("seeLessButton", "flex");
	};
	const handleClick2 = () => {
		showHide("OtherJobs", "grid");
		showHide("seeLessButton", "none");
		showHide("seeAllButton", "flex");
	};
	return (
		<div className="outerBody">
			<div className="innerBody">
				<p className="sectionHead">Featured Jobs</p>
				<p className="sectionBody">
					Explore thousands of job opportunities with all the information you
					need. Its your future
				</p>
				<div className="FeaturedJobsContainer">
					{FeaturedJobs.map((j, i) => (
						<FeaturedJob
							key={count++}
							index={i}
							FeaturedJobs={FeaturedJobs}></FeaturedJob>
					))}
				</div>
				<div className="FeaturedJobsContainer None" id="OtherJobs">
					{OtherJobs.map((j, i) => (
						<OtherJob
							key={countOthers++}
							index={i}
							OtherJobs={OtherJobs}></OtherJob>
					))}
				</div>
				<div className="flexCenter">
					<button onClick={handleClick1} id="seeAllButton" className="button">
						See All Jobs
					</button>
					<button
						onClick={handleClick2}
						id="seeLessButton"
						className="button None">
						See Less
					</button>
				</div>
			</div>
		</div>
	);
};

export default FeaturedJobs;
