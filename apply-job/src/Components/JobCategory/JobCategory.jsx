import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryBox from "../CategoryBox/CategoryBox";
import "./JobCategory.css";

const JobCategory = () => {
	const jobs = useLoaderData();
	let count = 0;
	const [newJobs, setnewJobs] = useState([]);
	let JobCategories = [];
	let CategoryIcons = [];

	useEffect(() => {
		JobCategories = [];
		newJobs.forEach((j) => JobCategories.push(j.JobCategory));
		setnewJobs(jobs);
	}, [jobs]);

	const jobCounts = JobCategories.reduce((acc, job) => {
		if (!acc[job]) {
			acc[job] = 1;
		} else {
			acc[job]++;
		}
		return acc;
	}, {});

	const sortedJobs = Object.entries(jobCounts).sort((a, b) => b[1] - a[1]);
	const topJobs = sortedJobs.slice(0, 4);
	const topJobsNames = topJobs.map((topjob) => topjob[0]);

	useEffect(() => {
		CategoryIcons = [];
		newJobs.forEach((j) => {
			if (
				topJobsNames.includes(j.JobCategory) &&
				!CategoryIcons.includes(j.CategoryIcon)
			) {
				CategoryIcons.push(j.CategoryIcon);
			}
		});
		setnewJobs(jobs);
	}, [jobs]);

	return (
		<div className="outerBody">
			<div className="innerBody">
				<p className="sectionHead">Job Category List</p>
				<p className="sectionBody">
					Explore thousands of job opportunities with all the information you
					need. Its your future
				</p>
				<div className="CategoryBoxContainer">
					{topJobs.map((j, i) => (
						<CategoryBox
							key={count++}
							index={i}
							topJobs={topJobs}
							CategoryIcons={CategoryIcons}></CategoryBox>
					))}
				</div>
			</div>
		</div>
	);
};

export default JobCategory;
