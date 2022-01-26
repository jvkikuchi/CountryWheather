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
      <div>
        <h1>{country.name.common}</h1>
        <p>official name: {country.name.official}</p>
        <p>capital: {country.capital}</p>
        <p>population: {country.population}</p>
        <h2>Flag</h2> 
        <img src={country.flags.png} alt="country flag"></img>
        <h2>Current Weather</h2>
        <p></p>
        <p>temperature: {weathers.main.temp} &#176;C 
          / min temp: {weathers.main.temp_min} &#176;C
          / max temp: {weathers.main.temp_max} &#176;C
        </p>
        <p>humidity: {weathers.main.humidity}%</p>
        <p>coords: lon =  {weathers.coord.lon} lat = {weathers.coord.lat}</p>

      </div>
    )
  }
  return (
    <></>
  )
}

export default Country