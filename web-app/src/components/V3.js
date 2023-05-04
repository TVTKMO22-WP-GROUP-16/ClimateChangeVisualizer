import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Card, Box, CardActions, CardContent, Button, Typography } from '@mui/material/';
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend} from 'chart.js';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function V3(props) {

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

  const co2ppmSorted = co2ppm.sort((a, b) => a.time - b.time);
  const events = co2ppmSorted.filter((d) => d.event !== "");
   
  const eventsData = {
    label: "Historical human events",
    data: events.map((d) => ({
      x: d.time.toString(),
      y: 0,
      raw: d,
      label: d.event,
    })),
    backgroundColor: "orange",
    borderColor: "orange",
    pointRadius: 5,
    pointHoverRadius: 10,
    showLine: false,
    tension: 0.4,
    yAxisID: "y2",
    parsing: {
      xAxisKey: "x",
      yAxisKey: "y",
    },
  };
   
  const data = {
    labels: co2ppmSorted.map((d) => d.time.toString()),
    datasets: [
      {
        label: "CO2 concentration (ppm)",
        data: co2ppmSorted.filter((d) => d.cd !== 0),
        pointRadius: 0,
        backgroundColor: "red",
        borderColor: "red",
        hitRadius: 3,
        tension: 0.4,
        yAxisID: "y",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "cd",
        },
      },
      {
        label: "Global temperature change (°C)",
        data: co2ppmSorted,
        pointRadius: 0,
        backgroundColor: "blue",
        borderColor: "blue",
        hitRadius: 3,
        tension: 0.4,
        yAxisID: "y1",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "fifty",
        },
      },
      eventsData,
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
        text: "Global temperature evolution over the last 2 million years",
        font: {
          size: 20
        },
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            let label = "";
            if (context.datasetIndex === 0) {
              label += context.parsed.y.toLocaleString() + " ppm";
            } else if (context.datasetIndex === 1) {
              label += context.parsed.y.toLocaleString() + " °C";
            } else if (context.datasetIndex === 2 && context.raw && context.raw.label) {
              label += context.raw.label;
            }
            return label;
          },
          title: function(context) {
            const xLabel = context[0].label;
            if (xLabel !== undefined && xLabel !== null) {
              return xLabel + " years ago";
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
          text: 'Years ago (BC)',
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
        type: 'linear',
        position: 'left',
        min: 130,
        max: 300,     
      },

      y1:{
        title: {
          display: true,
          text: 'Temperature change (°C)'
        },
        type: 'linear',
        position: 'right',
        grid: {
        drawOnChartArea: false
        },
        min: -7.5,
        max: 5,
      },

      y2: {
        display: false,
        type: 'linear',
        position: 'left',
        min: -1,
        max: .09,        
      },
    }
  };

  const styles = {
    chartContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '95vh',
    },
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Kuvaus
        </Typography>
        {
          !props.description ?
        <Typography variant="body2">
          Tämä kaavio kuvaa ilmakehän CO2 pitoisuutta 800 tuhannen vuoden takaa ja maapallon pintalämpötilan keskimuutosta 2 miljoonan vuoden takaa.
          <br />
          Halutessasi voit näyttää kaaviossa ihmisen aiheuttamia tapahtumia, jotka ovat vaikuttaneet ilmakehän co2 pitoisuuteen.
        </Typography>
        : <Typography>{props.description}</Typography>
        }
      </CardContent>
      <CardActions>
        <Button size="small" href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf" target="_blank" rel="noreferrer noopener" className="card-link">Kuvaus</Button>
        <Button size="small" href="http://carolynsnyder.com/publications.php" target="_blank" rel="noreferrer noopener" className="card-link">Tietojoukko</Button>
        <Button size="small" href="https://www.southampton.ac.uk/~cpd/history.html" target="_blank" rel="noreferrer noopener" className="card-link">Ihmistapahtumat</Button>
      </CardActions>
    </React.Fragment>
  );

return (

  <div className="lineCharts">
      <Line data={data} options={options} />
      <Box sx={{ width: "30rem" }} paddingLeft={"35px"}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}