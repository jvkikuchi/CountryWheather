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
      <div className="flex justify-center border solid w-full h-96 pt-4">
        <div className="solid w- border-4 border-blue-200 rounded-lg">
          <div className="flex flex-col justify-center">
            <h1 className="text-center w-full font-bold">{country.name.common} {country.flag}</h1>
            <p className="w-1/2">official name: {country.name.official}</p>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <h2>Flag</h2> 
            <div>
              <img src={country.flags.png} alt="country flag" className="w-1/2"></img>
            </div>
            <h2>Current Weather on {country.capital}</h2>
            <p>temperature: {weathers.main.temp} &#176;C 
              <br></br>min temp: {weathers.main.temp_min} &#176;C
              <br></br>max temp: {weathers.main.temp_max} &#176;C
            </p>
            <p>humidity: {weathers.main.humidity}%</p>
            <p>coords: lon =  {weathers.coord.lon} lat = {weathers.coord.lat}</p>
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
