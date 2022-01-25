const Country = ({country}) =>{
  return(
    <div>
      <h1>{country.name.common}</h1>
      <p>official name: {country.name.official}</p>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h2>Flag</h2>
      <img src={country.flags.png} alt="country flag"></img>
    </div>
  )
}

export default Country