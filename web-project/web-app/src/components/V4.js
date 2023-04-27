import React, { useState, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default function V4() {
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [countryColors, setCountryColors] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8090/co2ebc")
      .then((response) => {
        setData(response.data);
        const countries = Object.keys(response.data[0].countries).sort();
        setCountryList(countries);
        setFilteredCountries(countries);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCountryToChart = () => {
    if (selectedCountry) {
      const selectedOption = document.querySelector("select option:checked").value;
      setSelectedCountries([...selectedCountries, selectedOption]);
      setSelectedCountry("");
      setCountryColors({ ...countryColors, [selectedOption]: getRandomColor() });
    }
  };

  const chartData = {
    labels: data
        .sort((a, b) => a.year - b.year)
        .map((d) => d.year.toString()),
    datasets: selectedCountries.map((country) => ({
        label: country,
        data: data
          .sort((a, b) => a.year - b.year)
          .map((d) => d.countries[country] * 3.661),
        borderColor: countryColors[country],
        backgroundColor: countryColors[country],
    })),
    showLine: selectedCountries.length > 0, // hide lines when no country is selected
  };

  const getRandomColor = useMemo(() => {
    return () => {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  }, []);
 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Territorial Emissions by Country (CO2)",
      },
    },
    scales: {
      x: {
        type: "category",
        labels: data.map((d) => d.year.toString()),
        autoSkip: true,
        maxTicksLimit: 10,
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "CO2 Emissions (MtCO2)",
        },
      },
    },
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addCountryToChart();
    }
  };

  const handleDropdownChange = (e) => {
    const searchQuery = e.target.value;
    setSelectedCountry(searchQuery);
    setFilteredCountries(
      countryList.filter((country) =>
        country.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setFilteredCountries(
      countryList.filter((country) =>
        country.toLowerCase().includes(selectedCountry.toLowerCase())
      )
    );
  }, [selectedCountry, countryList]);

  return (
    <div className="V4" style={{ responsive: true, resizeDelay: 0, paddingLeft: '70px', paddingRight: '25px', paddingTop: '30px', paddingBottom: '30px' }}>
        <div>
          <div style={{ display: "flex" }}>
        <input
            type="text"
            placeholder="Etsi maa..."
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            onKeyDown={handleKeyPress}
            style={{ marginRigth: "10px" }}
        />
        <select
            value={selectedCountry}
            onChange={handleDropdownChange}
            style={{ marginRigth: "10px" }}
        >
        <option value="" disabled>
            Valitse maa
        </option>
        {filteredCountries.map((country, index) => (
            <option key={index} value={country}>
            {country}
            </option>
        ))}
        </select>
        <button onClick={addCountryToChart}>Lisää maa</button>
        </div>
        <div style={{ marginTop: "10px" }}>
        <Line options={options} data={chartData} />
        </div>
        </div>    
    </div>
  );
}