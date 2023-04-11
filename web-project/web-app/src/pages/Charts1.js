import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { DateTime } from "luxon";

import annualDataset from "./data/HCYearly.json";
import monthlyDataset from "./data/HCMonthly.json";
import Reconstruction from "./data/Reconstruction.json";

class RadioButton extends Component {
  constructor() {
    super();
    this.state = {
      name: "Annual"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    const selectedValue = event.target.value;
    this.props.onChangeValue(selectedValue);
  }

  render() {
    // Laitetaan radiobuttonit allekkain määrittelemällä ne block-tyyppiseksi.
    const radioStyle = {
        display: "block",
        marginBottom: 10,
    };
    const labelStyle = {
        fontFamily: "Helvetica Neue, sans-serif",
        fontSize: 14,
    };
    return (
      <div onChange={this.onChangeValue}>
        <label style={{ ...radioStyle, ...labelStyle }}>
        <input type="radio" value="Yearly" name="dataset" defaultChecked /> Yearly
        </label>
        <label style={{ ...radioStyle, ...labelStyle }}>
        <input type="radio" value="Monthly" name="dataset" /> Monthly
        </label>
      </div>
    );
  }
}

export default function Charts1() {
  const [datasetOption, setDatasetOption] = useState("Yearly");
  const annualData = {
    datasets: [
      {
        label: "Global annual anomalies",
        data: [...annualDataset].reverse(),
        borderColor: "black",
        backgroundColor: "black",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "AnomalyGA",
        },
      },
      {
        label: "North annual anomalies",
        data: [...annualDataset].reverse(),
        borderColor: "darkred",
        backgroundColor: "darkred",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "AnomalyNA",
        },
      },
      {
        label: "South annual anomalies",
        data: [...annualDataset].reverse(),
        borderColor: "orange",
        backgroundColor: "orange",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "AnomalySA",
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

  const monthlyData = {
    datasets: [
      {
        label: "Global monthly anomalies",
        data: [...monthlyDataset].reverse(),
        borderColor: "black",
        backgroundColor: "black",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "AnomalyGM",
        },
      },
      {
        label: "North monthly anomalies",
        data: [...monthlyDataset].reverse(),
        borderColor: "darkred",
        backgroundColor: "darkred",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "AnomalyNM",
        },
      },
      {
        label: "South monthly anomalies",
        data: [...monthlyDataset].reverse(),
        borderColor: "orange",
        backgroundColor: "orange",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "AnomalySM",
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
        x: {
          type: "time",
          time: {
            unit: "year",
            displayFormats: {
              year: "y",
            },
          },
        }
      },
    ],
  };

  const [chartData, setChartData] = useState(annualData);

  const onChangeValue = (value) => {
    if (value === "Yearly") {
      setChartData(annualData);
    } else {
      setChartData(monthlyData);
    }
    setDatasetOption(value);
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
          unit: datasetOption === "Yearly" ? "year" : "month",
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
    console.log(datasetOption),
    <div className="chart1" style={{ responsive: true, resizeDelay: 0, paddingLeft: '70px', paddingRight: '25px', paddingTop: '30px', paddingBottom: '30px' }}>
      <RadioButton onChangeValue={onChangeValue} />
      <Line options={options} data={chartData} />
    </div>
  );
}

