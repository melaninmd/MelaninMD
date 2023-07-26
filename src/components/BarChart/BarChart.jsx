import React from "react";
import { Bar } from "react-chartjs-2";


import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";





ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

function BarChart() {
	const data = {
		labels: ["Rosacea", "Dermatitis", "Acne", "Eczema"], // Horizontal axis labels (predictions)
		datasets: [
			{
				label: "Chart", // Label for the dataset
				data: [40, 50, 60, 70], // Vertical axis values (confidence percentages)
				backgroundColor: ["green", "blue", "red", "yellow"], // Colors for the bars
				borderColor: "black", // Border color for the bars
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true, // Start the y-axis at zero
				title: {
					display: true,
					text: "Confidence (%)", // Y-axis label
				},
			},
			x: {
				title: {
					display: true,
					text: "Predictions", // X-axis label
				},
			},
		},
	};

	return (
		<div className="chart-container">
			<h2 style={{ textAlign: "center", padding: "40px" }}>Bar Chart</h2>
			<Bar
				style={{
					padding: "10px",
					width: "30%",
					height: "30%",
					textAlign: "center",
					margin: "auto",
				}}
				data={data}
				options={options}
			/>
		</div>
	);
}

export default BarChart;
