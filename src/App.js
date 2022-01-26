import { useState, useEffect } from "react";
import axios from "axios";
import FilteredInfo  from "./components/FilteredInfo ";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      console.log(response.data.length, "COUNTRIES FETCHED");
    });
    
  }, []);

  const handleSearch = (event) => { 
    setSearch(event.target.value);
    const filteredCoutry = () =>
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(event.target.value)
      );
    setFilteredCountries(filteredCoutry);
  };

  return (
    <div>
      find countries <input value={search} onChange={handleSearch}></input>
      <FilteredInfo countries={filteredCountries} search={search} handleShow={setFilteredCountries}/>
    </div>
  );
};

export default App;