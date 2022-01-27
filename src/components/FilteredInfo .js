import Country from "./Country";
import Button from "./Button";

const FilteredInfo  = ({ countries, search, handleShow }) => {
  if (countries.length === 1) {
    return (
      <div>
        {countries.map((country, i) => (
          <Country key={i} country={country} />
        ))}
      </div>
    );
  } else if (countries.length > 0 && countries.length < 10 && search !== "") {
    return (
      <div >
        <ul >
          {countries.map((country, i) => (
            <div className="p-2" key={i}>
              <li className="flex flex-col p-2 border solid rounded-lg hover:bg-slate-100"  key={i}>
                <p className="py-1 self-center font-bold">{country.name.common} {country.flag}</p>{" "}
                <Button text={"Show"} showInfo={() => handleShow([country])} />
            </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }else if (countries.length > 10) {
    return <p className="pl-4">Too many matches, specify another filter</p>;
  }else {
    return <p className="pl-4">Type the name of a country to filter</p>;
  }
};

export default FilteredInfo;