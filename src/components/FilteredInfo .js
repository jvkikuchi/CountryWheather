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
      <>
        <div className="flex justify-center"><p className="text-center bg-green-400 w-full">Select a country</p></div>
        <div className="flex flex-row justify-center pt-2 h-full">
          <ul>
            {countries.map((country, i) => (
              <div key={i} className="flex flex-col p-2 w-80">
                <li className="flex flex-col justify-center p-5 border-2 solid rounded-lg border-green-400 hover:bg-green-100 hover:shadow-lg hover:shadow-green-200/20 ease-in duration-300" key={i}>
                  <p className="py-1 self-center font-bold">{country.name.common} {country.flag}</p>{" "}
                  <Button text={"Show"} showInfo={() => handleShow([country])} />
              </li>
              </div>
            ))}
          </ul>
        </div>
      </>
    );
  }else if (countries.length > 10) {
    return <div className="flex justify-center"><p className="text-center bg-rose-700 w-full">Too many matches</p></div>
  }else {
    return <div className="flex justify-center"><p className="text-center bg-green-400 w-full">Type a country name</p></div>
  }
};

export default FilteredInfo;