import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { DateTime } from "luxon";
import axios from "axios";

import Reconstruction from "./data/Reconstruction.json";

export default function Charts1() {

  const [dataYearly, setDataYearly] = useState();
  const [dataMonthly, setDataMonthly] = useState();
  const [isAnnual, setIsAnnual] = useState(true);
  let endpoints = ["http://localhost:8090/yearlyanomalies", "http://localhost:8090/monthlyanomalies"];

  useEffect(() => {
    GetData();
   }, []);
  function GetData (){
    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
     .then((data) => {
       console.log(data);
       setDataYearly(data[0].data);
       setDataMonthly(data[1].data);
     }).catch(err => {
       console.log(err);
     })
   } 
   
  const data = {
    datasets: [
      {
        label: "Global annual anomalies",
        data: isAnnual ? dataYearly : dataMonthly,
        borderColor: "black",
        backgroundColor: "black",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "anomalyGA",
        },
      },
      {
        label: "North annual anomalies",
        data: isAnnual ? dataYearly : dataMonthly,
        borderColor: "darkred",
        backgroundColor: "darkred",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "anomalyNA",
        },
      },
      {
        label: "South annual anomalies",
        data: isAnnual ? dataYearly : dataMonthly,
        borderColor: "orange",
        backgroundColor: "orange",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "anomalySA",
        },
      },
      {
        label: "Reconstruction",
        data: [...Reconstruction].reverse(),
        borderColor: "darkcyan",
        backgroundColor: "darkcyan",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "t",
        },
        hidden: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Global historical surface temperature anomalies",
      },
    },
    pointRadius: 0,
    borderWidth: 1.5,
    scales: {
      x: {
        ticks: {
          source: "data",
          autoSkip: true,
        },
        type: "time",
        time: {
          unit: isAnnual ? "year" : "month",
          autoskip: true,
          displayFormats: {
            year: "y",
            month: "MMM y",
          },
        }
      }, 
      y: {
        type: "linear", 
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Anomaly (Deg C)",
        },
        ticks: {
            stepSize: 0.2,
        }
      },
    },
  };
  return (
    console.log(dataYearly),
    <div className="chart1" style={{ responsive: true, resizeDelay: 0, paddingLeft: '70px', paddingRight: '25px', paddingTop: '30px', paddingBottom: '30px' }}>
  <div className="form-check">
      <input className="form-check-input" type="radio" name="dataOption" id="annualData" checked={isAnnual} onChange={() => setIsAnnual(true)} />
      <label className="form-check-label" htmlFor="annualData"> Yearly
    </label>
    </div>   
    <div className="form-check">
      <input className="form-check-input" type="radio" name="dataOption" id="monthlyData" checked={!isAnnual} onChange={() => setIsAnnual(false)} />
      <label className="form-check-label" htmlFor="monthlyData"> Monthly
      </label>
    </div>
      <Line options={options} data={data} />
    </div>
  );
}

