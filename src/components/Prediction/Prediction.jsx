import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Prediction.css';
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

// Register necessary chart elements and plugins
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);


function DiagnosisResult() {
    const dispatch = useDispatch();
    const conditionReducer = useSelector((store) => store.conditionReducer);
   
    function readMore (condition) {
        window.location.href = condition.readMoreUrl;


	const options = {
		scales: {
			y: {        // y axis
				beginAtZero: true,
				title: {
					display: true,
					text: "Confidence (%)",
				},
				ticks: {
					callback: function (value) {
						return value + "%";
					},
				},
			},
			x: {    //x axis
				title: {
					display: true,
					text: "Predictions",
				},
			},
		},
	};

  // Generate chart data based on conditionReducer
	const generateChartData = () => {
		const labels =
			conditionReducer.predictions?.map((condition) => condition.name) || [];
		const data =
			conditionReducer.predictions?.map(
				(condition) => condition.confidence * 100
			) || [];

		return {
			labels: labels,
			datasets: [
				{
					label: "Bar Chart",
					data: data,
					backgroundColor: [
						"green",
						"blue",
						"red",
						"yellow",
						"orange",
						"purple",
						"pink",
					], // Customize the bar color here
				},
			],
		};
	};


    return(
        <>
        <h2>Result</h2>
        <img className="image-container" src={conditionReducer.url}/>
        {conditionReducer.predictions?.map((condition, i) => {
            return(
                <div className="data-container">
                    <b className="condition-name">{condition.name}</b> 
                    <button onClick={()=> readMore(condition)}>Read More</button> 
                   
                    {/* <p>{condition.confidence}</p> */}
                </div>
               
               

            )
           
        })}
        <div className="data-container">
          <b className="condition-name">Acne</b>
          <button src="https://www.loveshackfancy.com/collections/new-arrivals">read more</button>
        </div>
        <div className="data-container">
          <b className="condition-name">dermatiittititfdfddfgfgfgfgfd</b>
          <button src="https://www.loveshackfancy.com/collections/new-arrivals">read more</button>
        </div>
        <div
				style={{
					padding: "10px",
					width: "30%",
					height: "80%",
					textAlign: "center",
					margin: "auto 0",
				}}
			>
				<Bar data={generateChartData()} options={options} />
			</div>

        </>
    )

            }
}
export default DiagnosisResult