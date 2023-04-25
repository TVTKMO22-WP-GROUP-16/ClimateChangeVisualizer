import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default function V4() {
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8090/co2ebc")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCountryToChart = () => {
    if (selectedCountry) {
        setSelectedCountries([...selectedCountries, selectedCountry]);
        setSelectedCountry("");
    }
  };

  const chartData = {
    labels: data.sort((a, b) => a.year - b.year).map((d) => d.year.toString()),
    datasets: selectedCountries.map((country) => ({
      label: country,
      data: data
        .sort((a, b) => a.year - b.year)
        .map((d) => d.countries[country]),
      borderColor: getRandomColor(),
      backgroundColor: getRandomColor(),
    })),
    showLine: selectedCountries.length > 0, // hide lines when no country is selected
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "CO2 Emissions by Country",
      },
    },
    scales: {
      x: {
        type: "category",
        labels: data.map((d) => d.year.toString()),
        autoSkip: true,
        maxTicksLimit: 10,
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "CO2 Emissions",
        },
      },
    },
  };

  return (
    <div className="V4" style={{ responsive: true, resizeDelay: 0, paddingLeft: '70px', paddingRight: '25px', paddingTop: '30px', paddingBottom: '30px' }}>
        <div>
        <input
            type="text"
            placeholder="Search for a country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
        />
        <button onClick={addCountryToChart}>Lisää maa</button>
        </div>
      <Line options={options} data={chartData} />
    </div>
  );
}

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};