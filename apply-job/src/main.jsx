import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import JobDetails from "./Components/JobDetails/JobDetails";
import Layout from "./Components/Layout/Layout";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout></Layout>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch("/Jobs.json"),
			},
			{
				path: "/job/:jobId",
				element: <JobDetails></JobDetails>,
				loader: ({ params }) => fetch(`/Job${params.jobId}.json`),
			},
			{
				path: "/Statistics",
				element: <Home></Home>,
			},
			{
				path: "/Applied-Jobs",
				element: <Home></Home>,
			},
			{
				path: "/Blog",
				element: <Home></Home>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
