import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend} from 'chart.js';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function V3() {

  const [co2ppm, setCo2ppm] = useState([]);
  let endpoints = ["/snyder"];
  axios.defaults.baseURL = "http://localhost:8090"

  useEffect(() => {
    GetData();
   }, []);

  function GetData (){
    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
     .then((data) => {
       console.log(data);
       setCo2ppm(data[0].data);
     }).catch(err => {
       console.log(err);
     })
   } 

  const data = {
      labels: co2ppm.sort((b, a) => a.time - b.time)
      .map((d) => d.time.toString()),

      datasets: [
        {
          label: 'Hiilidioksidin määrä (ppm)',
          data: co2ppm,
          fill: false,
          backgroundColor: 'red',
          borderColor: 'black',
          tension: 0.4,
          yAxisID: 'y',
          parsing: {
            xAxisKey: "time",
            yAxisKey: "cd",
          }
        },
        {
          label: 'Maapallon pintalämpötilan keskimuutos',
          data: co2ppm,
          fill: false,
          backgroundColor: 'red',
          borderColor: 'blue',
          tension: 0.4,
          yAxisID: 'ppm',
          parsing: {
            xAxisKey: "time",
            yAxisKey: "cdu",
          }    
        },
      ],
    };
    
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom"
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Vuosia sitten (BC)'
        },
      },
      y: {
        title: {
          display: true,
          text: 'co2 ppm'
        },
        beginAtZero: true,
        type: 'linear',
        position: 'left'
      },
      ppm:{
        title: {
          display: true,
          text: 'Lämpötilan muutos'
        },
        beginAtZero: true,
        type: 'linear',
        position: 'right',
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          callback: function(value) {
            return `${value}°C`
          }
        }
      }
    }
  }

  const styles = {
    chartContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
    },
  };


return (
  <div style={styles.chartContainer}>
      <Line data={data} options={options} />
      <button onClick={GetData}>Check</button>
    </div>
  );
}