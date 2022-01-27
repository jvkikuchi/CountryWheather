import { useState, useEffect } from "react";
import axios from "axios";
import FilteredInfo  from "./components/FilteredInfo ";
import Header from "./components/Header";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("Type here");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      console.log(response.data, "COUNTRIES FETCHED");
    });
    
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const filteredCoutry = () =>
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
      );
    setFilteredCountries(filteredCoutry);
  };

  return (
    <div>
      <Header setSearch={() => search !== "" ? setSearch('') : false } searchValue={search} onChange={handleSearch} className="bg-blue-400"/>
      <div>
        <FilteredInfo countries={filteredCountries} search={search} handleShow={setFilteredCountries}/>
      </div>
    </div>
  );
};

export default App;