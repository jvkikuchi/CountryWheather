import Country from "./Country";
import Button from "./Button";

const Filter = ({ countries, search, handleShow}) => {
    if(countries.length === 1){
      return(
        <div>
          {countries.map((country,i) => 
            <Country key={i} country={country} />
        )}
        </div>
      )
    }else if (countries.length > 0 && countries.length < 10 && search !== "") {
      return (
        <ul>
          {countries.map((country,i) => (
            <li key={i}>
              {country.name.common} <Button text={'show'} showInfo={() => handleShow([country])}/>
            </li> 
          ))}
        </ul>
      );
  } else if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
  } else {
      return <p>Type the name of a country to filter</p>;
  }};

export default Filter