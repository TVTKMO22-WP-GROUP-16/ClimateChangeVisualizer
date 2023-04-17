import React from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend} from 'chart.js';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend)

export default function Charts3() {

  function getData() {

    axios.get("")
    .then(res => {
      console.log(res);
      var res = res.data;
      
    }).catch(err => {
      console.log(err);
    })
    
  } 

  const data = {
      labels: ['vuosi1', 'vuosi2', 'vuosi3', 'vuosi4', 'vuosi5', 'vuosi6', 'vuosi7'],
      datasets: [
        {
          label: 'Human history events',
          data: [0, 10, 5, 2, 20, 30, 45],
          fill: false,
          backgroundColor: 'red',
          borderColor: 'black',
          tension: 0.4,
          yAxisID: 'y'
        },
        {
          label: 'cd (ppm)',
          data: [5, 20, 15, 23, 30, 8, 45],
          fill: false,
          backgroundColor: 'red',
          borderColor: 'blue',
          tension: 0.4,
          yAxisID: 'ppm'
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
      y: {
        beginAtZero: true,
        type: 'linear',
        position: 'left'
      },
      
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
      <button onclick={getData}>Check</button>
    </div>
  );
}
