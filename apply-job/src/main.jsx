import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import JobDetails from "./Components/JobDetails/JobDetails";
import Layout from "./Components/Layout/Layout";
import Statistics from "./Components/Statistics/Statistics";
import ErrorPage from "./error-page";
import "./index.css";
import appliedJobLoader from "./Loaders/appliedJobLoader";

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
				element: <Statistics></Statistics>,
			},
			{
				path: "/AppliedJobs",
				element: <AppliedJobs></AppliedJobs>,
				loader: appliedJobLoader,
			},
			{
				path: "/Blog",
				element: <Blog></Blog>,
			},
			{
				path: "*",
				element: <ErrorPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
