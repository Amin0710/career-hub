import React from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
	const jobs = useLoaderData();
	let count = 0;
	const FeaturedCompanies = ["Google", "Facebook", "Tesla", "Netflix"];
	const FeaturedJobs = [];
	{
		jobs.map((j) => {
			if (
				FeaturedCompanies.includes(j.CompanyName) &&
				!FeaturedJobs.includes(j)
			) {
				FeaturedJobs.push(j);
			}
		});
	}
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
				<div className="flexCenter">
					<button id="seeAllButton">See All Jobs</button>
				</div>
			</div>
		</div>
	);
};

export default FeaturedJobs;
