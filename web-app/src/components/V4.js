import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";

import { Card, Box, CardActions, CardContent, Button, Typography, Radio } from '@mui/material/';

export default function V4(props) {
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [countryColors, setCountryColors] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  //Datan haku
  useEffect(() => {
    getData();
  }, []);

  //Datan haku
  const getData = () => {
    axios
      .get("/co2ebc")
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

  //Maiden lisääminen ja poistaminen
  const addCountryToChart = () => {
    if (selectedCountry) {
      const selectedOption = document.querySelector(
        "select option:checked"
      ).value;
      setSelectedCountries([...selectedCountries, selectedOption]);
      setSelectedCountry("");
      setCountryColors({
        ...countryColors,
        [selectedOption]: getRandomColor(),
      });
    }
  };

  const removeCountryFromChart = (country) => {
    const selectedOption = document.querySelector(
      "select option:checked"
    ).value;
    setSelectedCountries(selectedCountries.filter((c) => c !== selectedOption));
    setSelectedCountry("");
    setCountryColors((prevState) => {
      const { [country]: removedColor, ...rest } = prevState;
      return rest;
    });
  };

  //Graafin data
  const chartData = {
    labels: data.sort((a, b) => a.year - b.year).map((d) => d.year.toString()),
    datasets: selectedCountries.map((country) => ({
      label: country,
      data: data
        .sort((a, b) => a.year - b.year)
        .map((d) => d.countries[country] * 3.664),
      borderColor: countryColors[country],
      backgroundColor: countryColors[country],
    })),
    showLine: selectedCountries.length > 0,
  };

  //Värien arpominen
  const getRandomColor = useMemo(() => {
    return () => {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };
  }, []);

  //Graafin asetukset
  const options = {
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
        beginAtZero: true,
        display: true,
        position: "left",
        title: {
          display: true,
          text: "CO2 Emissions (MtCO2)",
        },
      },
    },
  };

  //Näppäimistöstä nappien painaminen (Enter ja delete, maiden lisäämiseen ja poistamiseen)
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addCountryToChart();
    }
    if (e.keyCode === 46) {
      removeCountryFromChart();
    }
  };

  //Dropdown menu ja sen filtteröinti
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

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Description
        </Typography>
        {
          !props.description ?
        <Typography variant="body2">
          National estimates include emissions from fossil fuel combustion and oxidation and cement production and excludes emissions from bunker fuels. 
          World totals include emissions from bunker fuels.
        </Typography>
       : <Typography>{props.description}</Typography>
        }
      </CardContent>
      <CardActions>
        <Button size="small" href="https://essd.copernicus.org/articles/14/1917/2022/">Description</Button>
        <Button size="small" href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Dataset (.xlsx)</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="lineCharts">
      <div>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Etsi maa..."
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            onKeyDown={handleKeyPress}
            style={{ marginRigth: "10px", width: "50%" ,minWidth: "10vw",
            maxWidth: "50vw",}}
          />
          <select
            value={selectedCountry}
            onChange={handleDropdownChange}
            style={{
              marginRigth: "10px",
              width: "50%",
              padding: "1.5vh 1vh",
              margin: "8px 8px",
              boxSizing: "border-box",
              border: " 2px solid black",
              borderRadius: "6px",
              boxShadow: "0 0 15px 4px rgba(0, 0, 0, 0.103)",
              minWidth: "10vw",
              maxWidth: "50vw",
            }}
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
          <button
            onClick={addCountryToChart}
            class="button-19"
            style={{ marginLeft: "1vw", marginRigth: "1vw" }}
          >
            Lisää maa
          </button>
          <button
            onClick={removeCountryFromChart}
            class="button-19"
            style={{ marginLeft: "1vw", marginRigth: "1vw" }}
          >
            Poista valittu maa
          </button>
        </div>

        <Line options={options} data={chartData} />
        <Box sx={{ width: "30rem" }} paddingLeft={"35px"}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
    </div>
  );
}
