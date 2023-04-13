import React from "react";
import SubBanner from "../SubBanner/SubBanner";
import Chart from "./Chart";

const Statistics = () => {
	const Head = "My Assignments Numbers";
	return (
		<div>
			<SubBanner Head={Head}></SubBanner>
			<Chart />
		</div>
	);
};

export default Statistics;
