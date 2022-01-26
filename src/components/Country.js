import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({country}) =>{
  const [weathers, setWeathers] = useState([])

  useEffect(() => {
    async function getWeather() {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=781bcf355de8e4981f7c177f5e119188`)
      setWeathers(response.data)
      console.log(response.data)
      
    }

    getWeather();
  }, [])

  // useEffect(() => {
  //     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=&appid=781bcf355de8e4981f7c177f5e119188`)
  //        .then((response) => {
  //        setWeathers(response.data)
  //        console.log(weathers, 'WEATHER FETCHED')
  //   });
    
  // }, []);


  return(
    <div>
      <h1>{country.name.common}</h1>
      <p>official name: {country.name.official}</p>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h2>Flag</h2> 
      <img src={country.flags.png} alt="country flag"></img>
      <h2>Current Weather</h2>
      <p>wind speed: {weathers.wind.speed}</p>      
     
    </div>
  )
}

export default Country