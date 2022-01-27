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
      console.log(response.data, "COUNTRIES FETCHED");
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
    <>
      <div className="p-2">
          find countries <input className="rounded-full border-2 outline-0 font-medium" value={search} onChange={handleSearch}></input>
        </div>
      <div className="font-mono self-center">
        <FilteredInfo countries={filteredCountries} search={search} handleShow={setFilteredCountries}/>
      </div>
    </>
  );
};

export default App;