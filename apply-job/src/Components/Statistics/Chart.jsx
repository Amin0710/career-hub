import React from "react";
import {
	Radar,
	RadarChart,
	PolarGrid,
	Legend,
	PolarAngleAxis,
	PolarRadiusAxis,
} from "recharts";

const data = [
	{
		assignmentID: 1,
		assignmentName: "New Year New Mission",
		A: (50 / 60) * 100,
		B: 100,
	},
	{
		assignmentID: 2,
		assignmentName: "Responsive Website",
		A: (50 / 60) * 100,
		B: 100,
	},
	{
		assignmentID: 3,
		assignmentName: "Responsive Landing Page",
		A: (30 / 60) * 100,
		B: 100,
	},
	{
		assignmentID: 4,
		assignmentName: "JavaScript Problem Solving",
		A: (60 / 60) * 100,
		B: 100,
	},
	{
		assignmentID: 5,
		assignmentName: "Geometry Genius",
		A: (29 / 60) * 100,
		B: (29 / 30) * 100,
	},
	{
		assignmentID: 6,
		assignmentName: "AI Universe API",
		A: (60 / 60) * 100,
		B: 100,
	},
	{
		assignmentID: 7,
		assignmentName: "Quiz Hero",
		A: (50 / 60) * 100,
		B: 100,
	},
	{
		assignmentID: 8,
		assignmentName: "React Cafe",
		A: (60 / 60) * 100,
		B: 100,
	},
	{
		assignmentID: 9,
		assignmentName: "React Router Job Apply",
		A: (30 / 60) * 100,
		B: 100,
	},
];

export default function Chart() {
	return (
		<div className="flexCenter">
			<RadarChart
				cx={300}
				cy={250}
				outerRadius={180}
				width={1320}
				height={500}
				data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey="assignmentName" />
				<PolarRadiusAxis angle={270} domain={[0, 100]} />
				<Radar
					name="Actul Mark"
					dataKey="A"
					stroke="#8884d8"
					fill="#8884d8"
					fillOpacity={0.9}
				/>
				<Radar
					name="Percentage"
					dataKey="B"
					stroke="#82ca9d"
					fill="#82ca9d"
					fillOpacity={0.6}
				/>
				<Legend />
			</RadarChart>
		</div>
	);
}
