// use local storage to manage data
const addToDb = (id) => {
	let appliedJobs = getAppliedJobs();
	// add quantity
	if (!appliedJobs.includes(id)) {
		appliedJobs.push(id);
	}
	localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
};

const getAppliedJobs = () => {
	let appliedJobs = [];

	//get the data from local storage
	const storedJobs = localStorage.getItem("appliedJobs");
	if (storedJobs) {
		appliedJobs = JSON.parse(storedJobs);
	}
	return appliedJobs;
};

export { addToDb, getAppliedJobs };
