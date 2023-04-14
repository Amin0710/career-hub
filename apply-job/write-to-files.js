import { readFileSync, writeFileSync } from "fs";

// Read data from the source file
const sourceData = readFileSync("public/Jobs.json");

// Parse the source data as JSON
const jobs = JSON.parse(sourceData);

// Loop through each job and write it to the corresponding file
jobs.forEach((job, index) => {
	const destFileName = `public/Job${index}.json`;
	const destData = JSON.stringify(job);
	writeFileSync(destFileName, destData);
});
