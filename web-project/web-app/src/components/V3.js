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
      labels: co2ppm.sort((a, b) => a.time - b.time)
      .map((d) => d.time.toString()),
      
      datasets: [
        {
          label: 'Hiilidioksidin määrä (ppm)',
          data: co2ppm.filter((d) => d.cd !== 0),
          fill: false,
          pointRadius: 0,
          backgroundColor: "red",
          borderColor: "red",
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
          pointRadius: 0,
          backgroundColor: 'blue',
          borderColor: 'blue',
          hitRadius: 3,
          tension: 0.4,
          yAxisID: 'y1',
          parsing: {
            xAxisKey: "time",
            yAxisKey: "fifty",
          },
        },
        {
          label: 'Ihmisen aiheuttamia tapahtumia',
          data: co2ppm,
          fill: false,
          backgroundColor: 'black',
          borderColor: 'black',
          pointRadius: (context) => {
            return context.raw && context.raw.event === "" ? 0 : 5;
          },
          hitRadius: (context) => {
            return context.raw && context.raw.event === "" ? 0 : 5;
          },
          showLine: false,
          tension: 0.4,
          yAxisID: 'y2',
          parsing: {
            xAxisKey: "time",
            yAxisKey: "event",
          },
        },
      ],
    };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Lämpötilan evoluutio maailmanlaajuisesti 2-miljoonalta vuodelta",
        font: {
          size: 30
        },
        color: 'black',
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            let label = "";
            if (context.datasetIndex === 0) {
              label += context.parsed.y.toLocaleString() + " ppm";
            } else if (context.datasetIndex === 1) {
              label += context.parsed.y.toLocaleString() + " °C";
            } else {
              label += context.raw.event;
            }
            return label;
          },
          title: function(context) {
            const xLabel = context[0].label;
            if (xLabel !== undefined && xLabel !== null) {
              return xLabel + " vuotta sitten";
            }
            return "";
          }
        },
      },
    },
    
    scales: {
      x: {
        title: {
          display: true,
          text: 'Vuosia sitten (BC)',
          font: {
            size: 16,
          },
          position: 'bottom',
        },
      },

      y: {
        title: {
          display: true,
          text: 'co2 ppm',
        },
        beginAtZero: true,
        type: 'linear',
        position: 'left',
        min: 140,
        max: 300,     
      },

      y1:{
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
        min: -8,
        max: 3,
      },

      y2: {
        title: {
          display: false,
          text: 'Ihmisen aiheuttamat tapahtumat',
        },
        type: 'category',
        position: 'left',
        grid:{
        drawOnChartArea: false,
        },
        ticks: {
          display: true,
        },
      },
    }
  };

  const styles = {
    chartContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
    },
  };

return (
  <div style={styles.chartContainer}>
      <Line data={data} options={options} />
    </div>
  );
}