import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryBox from "../CategoryBox/CategoryBox";
import "./JobCategory.css";

const JobCategory = () => {
	const jobs = useLoaderData();
	let count = 0;
	const JobCategories = [];
	const CategoryIcons = [];
	{
		jobs.map((j) => JobCategories.push(j.JobCategory));
	}
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

	{
		jobs.map((j) => {
			if (
				topJobsNames.includes(j.JobCategory) &&
				!CategoryIcons.includes(j.CategoryIcon)
			) {
				CategoryIcons.push(j.CategoryIcon);
			}
		});
	}

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
