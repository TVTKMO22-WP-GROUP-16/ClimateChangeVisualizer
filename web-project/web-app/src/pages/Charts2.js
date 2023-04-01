import React from "react";
import "./Charts2.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import co2EmissionData from "./data/Co2_emissions_by_sector.json";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Charts2() {
  
  
  
  
  const data = { 
  
    labels : ["Energy", "Industrial processes", "Waste", "Agriculture, Forestry & Land Use (AFOLU)"],
    datasets: [
    {
        label: "CO2 Emissions",
        data: [ {Sector: "Energy", Shares: 73.2},
                {Sector: "Industrial processes", Shares: 5.2},
                {Sector: "Waste", Shares: 3.2},
                {Sector: "Agriculture, Forestry & Land Use (AFOLU)", Shares: 18.4}
              ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
       
       
      },
    ],
  };

  const options = {
      responsive: true,
    title: {
      display: true,
      position: "top",
      text: "Doughnut Chart",
      fontSize: 18,
      fontColor: "#111",

    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#333",
        fontSize: 16
      }
    }
  };

  
  return (
    <div className="charts2" >
      <div className="donut">
      <Doughnut options={options} data={data}/>
      </div>
    </div>
  );
}