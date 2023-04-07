import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { useState, useEffect } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);




export default function Charts2() {


  const [co2shares, setCo2shares] = useState([]); 
  const [labels, setLabels] = useState([]);
  const [shares, setShares] = useState([]);

  useEffect(() => {
    getCo2shares();
  }, []);

  function getCo2shares() {

    axios.get("http://localhost:8090/co2shares")
      .then(response => {
        setCo2shares(response.data);
        console.log(response);
        const labels = response.data.map((co2share) => co2share.sector);
        setLabels(labels);
        const shares = response.data.map((co2share) => co2share.share);
        setShares(shares);
      }).catch(err => {
        console.log(err);
      })

  }
      

  const data = {

    labels: [labels[0], labels[1], labels[2], labels[3]],
    datasets: [
      {
        label: "CO2 Emissions",
        data: [shares[0], shares[1], shares[2], shares[3]],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
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
      }
    }
  };


  return (
    <div className="charts2" >
      <div className="donut">
        <h1>CO2 Emissions</h1>
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
}