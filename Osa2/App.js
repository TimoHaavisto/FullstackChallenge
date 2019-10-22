import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
 

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilter ] = useState('')

  
  const DisplayCountries = (props) => {
    
    const countriesToShow = 
      props.countries.filter(country => {
        //console.log("filtering", filterCountry)
        return country.name.toUpperCase().includes(filterCountry.toUpperCase())
      })
      
    if (countriesToShow.length > 10)
      return "Too many matches, specify another filter"

    else if (countriesToShow.length === 1) { 
              
      return (countriesToShow.map( country =>
          <OneCountry key={country.name}
            country={country} />))
    }
  
    else
      return countriesToShow.map( 
        country => 
          <li key={country.name}>{country.name}
            <button onClick={() => showCountry(country)}>show</button></li>)
  }

  const showCountry = ( cObj ) => {    
    //console.log("Näytä maa", cObj)     
    setFilter(cObj.name)
  }

  useEffect(() => {
    //console.log('Effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        //console.log('Promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  
  const handleFilter = (event) => {
    //console.log("filter:", event.target.value)
    setFilter(event.target.value)
  }

return (
  <div>
    <div>
      Find countries: <input value={filterCountry}
        onChange={handleFilter} />
    </div>
    
    <DisplayCountries countries={countries} />
  </div>
)


}

const OneCountry = ({ country }) => { 

  return (
    <React.Fragment>
      <h3>{country.name}</h3>
      <p>Capital: {country.capital} <br></br>
      Population: {country.population.toLocaleString()} <br></br>          
      </p>
      <h4>Languages</h4>
      {country.languages.map(l => (<div key={l.name}>{l.name}</div>))}
      <img className="resize" src={country.flag} alt="flag"></img>
    </React.Fragment>
    
    
  )
}

export default App;
