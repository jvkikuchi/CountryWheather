import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([])

  c

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      console.log(response.data.length, "COUNTRIES FETCHED");
    });

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${}&appid=781bcf355de8e4981f7c177f5e119188`)
         .then((response) => {
      setWeather(response.data);
      console.log("WEATHER FETCHED");
    });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const filteredCoutry = () =>
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(event.target.value)
      );
    setFilteredCountries(filteredCoutry);
    console.log(filteredCountries);
  };

  return (
    <div>
      {console.log(weather)}
      find countries <input value={search} onChange={handleSearch}></input>
      <Filter countries={filteredCountries} search={search} handleShow={setFilteredCountries} />
    </div>
  );
};

export default App;