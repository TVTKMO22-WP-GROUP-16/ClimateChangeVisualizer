import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";

export default function V4() {
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

  //Maiden lisääminen ja poistaminen
  const addCountryToChart = () => {
    if (selectedCountry) {
      const selectedOption = document.querySelector("select option:checked").value;
      setSelectedCountries([...selectedCountries, selectedOption]);
      setSelectedCountry("");
      setCountryColors({ ...countryColors, [selectedOption]: getRandomColor() });
    }
  };


  const removeCountryFromChart = (country) => {   
      const selectedOption = document.querySelector("select option:checked").value;
      setSelectedCountries(selectedCountries.filter((c) => c !== selectedOption));
      setSelectedCountry("");
      setCountryColors((prevState) => {
        const { [country]: removedColor, ...rest } = prevState;
        return rest;
      });
  };

  //Graafin data
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
    showLine: selectedCountries.length > 0, 
  };

  //Värien arpominen
  const getRandomColor = useMemo(() => {
    return () => {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
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
            style={{ marginRigth: "10px" }}
        />
        <select
            value={selectedCountry}
            onChange={handleDropdownChange}
            style={{ 
              marginRigth: "10px",
              width: "50%",
              padding: "1.5vh 1vh",
              margin:"8px 8px",
              boxSizing: "border-box",
              border:" 2px solid black",
              borderRadius:"6px",
              boxShadow: "0 0 15px 4px rgba(0, 0, 0, 0.103)",
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
        <button onClick={addCountryToChart} class="button-19">Lisää maa</button>
        <button onClick={removeCountryFromChart} class="button-19">Poista valittu maa</button>
        </div>
        <div style={{ marginTop: "10px" }}>
        <Line options={options} data={chartData} />
        </div>

        </div>    
    </div>
  );
}