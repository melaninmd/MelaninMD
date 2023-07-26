import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

function Bar() {

   return(
    <>
    
    </>
   )




    
}



export default Bar