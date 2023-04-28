import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { DateTime } from "luxon";
import axios from "axios";
import {Card, Box, CardActions, CardContent, Button, Typography, Radio} from '@mui/material/';

export default function V1() {

  const [dataYearly, setDataYearly] = useState();
  const [dataMonthly, setDataMonthly] = useState();
  const [dataReconstruction, setReconstruction] = useState();
  const [isAnnual, setIsAnnual] = useState(true);
  let endpoints = ["/yearlyanomalies", "/monthlyanomalies", "/reconstruction"];
  axios.defaults.baseURL = "http://localhost:8090"

  useEffect(() => {
    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
     .then((data) => {
       console.log(data);
       setDataYearly(data[0].data);
       setDataMonthly(data[1].data);
       setReconstruction(data[2].data);
     }).catch(err => {
       console.log(err);
     })
   }, []);
   
  const data = {
    datasets: [
      {
        label: "Global annual anomalies",
        data: isAnnual ? dataYearly : dataMonthly,
        borderColor: "black",
        backgroundColor: "black",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomalyg",
        },
      },
      {
        label: "North annual anomalies",
        data: isAnnual ? dataYearly : dataMonthly,
        borderColor: "darkred",
        backgroundColor: "darkred",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomalyn",
        },
      },
      {
        label: "South annual anomalies",
        data: isAnnual ? dataYearly : dataMonthly,
        borderColor: "orange",
        backgroundColor: "orange",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomalys",
        },
      },
      {
        label: "Reconstruction",
        data: dataReconstruction,
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
          autoSkip: true,
          stepSize: 1,
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

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Description
        </Typography>
        <Typography variant="body2">
          This chart contains data about both yearly and monthly global surface temperature anomalies between the years 1850 and 2022.
          <br />
          Additionally you can enable a 2000-year temperature reconstruction of the Northern Hemisphere.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">HADCrut 5 data</Button>
        <Button size="small" href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005">Reconstruction Data</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="V1" style={{ responsive: true, resizeDelay: 0, paddingLeft: '70px', paddingRight: '25px', paddingTop: '30px', paddingBottom: '30px' }}>
      <div>
      <Radio checked={isAnnual} onChange={() => setIsAnnual(true)} /> Annual
      </div>
      <div>
      <Radio checked={!isAnnual} onChange={() => setIsAnnual(false)} /> Monthly
      </div>
      <Line options={options} data={data} />
      <Box sx={{ width: "30rem" }} paddingLeft={"35px"}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}

