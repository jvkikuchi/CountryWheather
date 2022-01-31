import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({country}) =>{
  const [weathers, setWeathers] = useState([])

  useEffect(() => {
    async function getWeather() {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=781bcf355de8e4981f7c177f5e119188&units=metric`)
      setWeathers(response.data)
      console.log(response.data)
      
    }
    getWeather();
  }, [])

  if(weathers.length !== 0){
    return(
      <div className="flex justify-center w-full pt-8">
        <div className=" w-400 h-400 drop-shadow-">
          <div className="flex flex-col justify-center border-2 border-teal-500 rounded-lg h-400">
            <div>
              <img src={country.flags.png} alt="country flag" className="rounded"></img>
            </div>
            <h1 className="text-center w-full font-bold mt-2 text-xl">{country.name.common} {country.flag}</h1>
            <div className="ml-1 mr-2 text-center mt-2">
              <p><strong>Official Name</strong></p> 
              <p>{country.name.official}</p>
              <p><strong>Capital</strong> </p>
              <p>{country.capital}</p>
              <p><strong>Population</strong> </p>
              <p>{country.population}</p>
              <p><strong>Continent</strong></p>
              <p>{country.continents}</p>
            </div>
            <h2 className="ml-1 mr-2 mt-2 text-center"><strong>Weather on {country.capital}</strong>&#127777;</h2>
            <div className="ml-1 mr-2 text-center mt-2">
              <p><strong>Temperature:</strong> {weathers.main.temp} &#176;C</p>
              <p><strong>Min temp:</strong> {weathers.main.temp_min} &#176;C</p>
              <p><strong>Max temp:</strong> {weathers.main.temp_max} &#176;C</p>
              <p><strong>Humidity:</strong> {weathers.main.humidity}%</p>
              <p><strong>Feels like:</strong> {weathers.main.feels_like} &#176;C</p>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
  return (
    <></>
  )
}

export default Country
