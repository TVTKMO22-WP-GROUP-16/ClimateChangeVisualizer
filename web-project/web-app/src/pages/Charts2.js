import axios from "axios";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { useEffect, useRef, useState, } from "react";
import { Doughnut, getElementAtEvent } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);




export default function Charts2() {


 
  const [labels, setLabels] = useState([]);
  const [shares, setShares] = useState([]);
  
  useEffect(() => {
    getCo2shares();
  }, []);


  function getCo2shares() {

    axios.get("http://localhost:8090/co2shares")
      .then(response => {
        const labels = response.data.map((co2share) => co2share.sector);
        setLabels(labels);
        console.log(labels)
        const shares = response.data.map((co2share) => co2share.share);
        setShares(shares);
      }).catch(err => {
        console.log(err);
      })

  }
  function getCo2Subsectors(index) {

    axios.get("http://localhost:8090/co2subshares/" + index +"")
      .then(response => {
       
       
        const labels = response.data.map((co2subshare) => co2subshare.subSector);
        setLabels(labels);
        console.log(labels)
        const shares = response.data.map((co2subshare) => co2subshare.share);
        setShares(shares);
      }).catch(err => {
        console.log(err);
      })

  }


  const chartRef = useRef();
  const onClick = (event) => {
    
    const { current: chart } = chartRef;
    const { index } = getElementAtEvent(chart, event)[0];
    getCo2Subsectors(data.labels[index]);
    console.log(data.labels[index]);
  };
 
  

  const data = {

    labels: labels,
    datasets: [
      {
        label: "Co2 Emission %",
        data: shares,
        backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        
      ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          
        ],
        borderWidth: 2,

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
      },
    }
  };


  return (
    <div className="charts2" >
      <div className="donut">
        <h1>CO2 Emissions</h1>
        <Doughnut ref={chartRef} options={options} data={data} onClick={onClick}/>
        <button onClick={getCo2shares}>Back</button>
      </div>
    </div>
  );
}