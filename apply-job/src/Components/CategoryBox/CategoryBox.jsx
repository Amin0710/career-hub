import React from "react";
import "./CategoryBox.css";

const CategoryBox = ({ index, topJobs, CategoryIcons }) => {
	return (
		<div className="CategoryBox">
			<div className="iconImg">
				<img src={CategoryIcons[index]} alt="" />
			</div>
			<p className="CategoryName">{topJobs[index][0]}</p>
			<p className="CategoryNumber">{topJobs[index][1]}+ Jobs Available</p>
		</div>
	);
};

export default CategoryBox;
