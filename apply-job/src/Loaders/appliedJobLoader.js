import { getAppliedJobs } from "../utilities/fakeDB";

const appliedJobLoader = async () => {
	const loadedJobs = await fetch("/Jobs.json");
	const jobs = await loadedJobs.json();

	// if data is in database, have to use async await
	const AppliedJobs = getAppliedJobs();

	const savedJobs = [];

	for (const id of AppliedJobs) {
		const addedJob = jobs.find((j) => j.JobId === id);
		if (addedJob) {
			savedJobs.push(addedJob);
		}
	}

	return savedJobs;
};

export default appliedJobLoader;
