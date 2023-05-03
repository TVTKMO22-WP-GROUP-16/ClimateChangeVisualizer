import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { DateTime } from "luxon";
import axios from "axios";

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function V2() {

  const [dataYearly, setDataYearly] = useState();
  const [dataMonthly, setDataMonthly] = useState();
  const [dataIcecore1, setIcecore1] = useState();
  const [dataIcecore2, setIcecore2] = useState();
  const [dataIcecore3, setIcecore3] = useState();
  let endpoints = ["/maunaloayearly", "/maunaloamonthly", "/icecore1", "/icecore2", "/icecore3"];
  axios.defaults.baseURL = "http://localhost:8090"

  useEffect(() => {
    GetData();
   }, []);
  function GetData (){
    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
     .then((data) => {
       console.log(data);
        setDataYearly(data[0].data);
        setDataMonthly(data[1].data);
        setIcecore1(data[2].data);
        setIcecore2(data[3].data);
        setIcecore3(data[4].data);
     }).catch(err => {
       console.log(err);
     })
   } 
   
  const data = {
    datasets: [
      {
        label: "Mauna Loa Annual CO2",
        data: dataYearly,
        borderColor: "black",
        backgroundColor: "black",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "co2",
        },
      },
      {
        label: "Mauna Loa Monthly CO2",
        data: dataMonthly,
        borderColor: "orange",
        backgroundColor: "orange",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "co2",
        },
      },
      {
        label: "Ice core 1",
        data: dataIcecore1,
        borderColor: "darkviolet",
        backgroundColor: "darkviolet",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "co2",
        },
        hidden: true,
      },
      {
        label: "Ice core 2",
        data: dataIcecore2,
        borderColor: "deeppink",
        backgroundColor: "deeppink",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "co2",
        },
        hidden: true,
      },
      {
        label: "Ice core 3",
        data: dataIcecore3,
        borderColor: "darkred",
        backgroundColor: "darkred",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "co2",
        },
        hidden: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Antarctic Ice Core records of atmospheric CO2 ratios combined with Mauna Loa measurements",
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
          unit: "year",
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
          text: "CO2 (ppm)",
        },
        ticks: {
            stepSize: 5,
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
          This chart contains data about atmospheric CO2 concentrations from Mauna Loa measurements starting from the year 1958.
          <br />
          Additionally you can enable data from Antarctic ice core records combined with Mauna Loa measurements.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://gml.noaa.gov/ccgg/trends/data.html">Mauna Loa data</Button>
        <Button size="small" href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat">Lawdome data</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="lineCharts">
      <Line options={options} data={data} />
      <Box sx={{ width: "30rem" }} paddingLeft={"35px"}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}

