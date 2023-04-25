import axios from "axios";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { useEffect, useRef, useState, } from "react";
import { Doughnut, getElementsAtEvent } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function V5() {

    const [primarySector, setPrimarySector] = useState();
    const [subSector, setSubSector] = useState();
    const [chartData, setChartData] = useState([]);
    let endpoints = ["/co2shares", "/co2subshares"];
    axios.defaults.baseURL = "http://localhost:8090";

  const chartRef = useRef();
  
  
  useEffect(() => {
    getCo2shares();
  }, []);

  
  function getCo2shares() {
    
    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((data)=> {
      console.log(data);
      setPrimarySector(data[0].data);
      setSubSector(data[1].data);
      setChartData(data[0].data);
    }).catch(err => {
      console.log(err);
    })

 
  }
  

  
  const onClick = (event) => {
    
    const { current: chart } = chartRef;
    const { index } = getElementsAtEvent(chart, event)[0];
    //const index = getElementsAtEvent(chartRef.current, event)["0"].index;  
    if(chartData === primarySector) {
      console.log(data.labels[index]);
      console.log(subSector.filter(label => label.psector_fk === data.labels[index]));
      setChartData(subSector.filter(label => label.psector_fk === data.labels[index]));
    }
    
  };
 
  

  const data = {

    labels: chartData.map(label => label.sector),
    datasets: [
      {
        label: "Co2 Emission %",
        data: chartData.map(label => label.share),
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
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(255, 99, 132, 0.5)",
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
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
          
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
         <button onClick={() => setChartData(primarySector)}>Back</button>
      </div>
    </div>
  );


}