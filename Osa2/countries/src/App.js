import React, { useState, useEffect } from 'react'
import axios from 'axios' 
import './App.css'


const App = () => {

  const [ countries, setCountries ] = useState({})
  const [ filterValue, setFilter ] = useState('')
  const [ weather, setWeather ] = useState({})
  const [ capital, setCapital] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get(' https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  //console.log('render', countries.length, 'countries')

  /* useEffect(() => {
    console.log('weather effect')
    axios
      .get(' http://api.weatherstack.com/current?access_key=faae0f7ff8fde8e109f8937803752b15&query=all')
      .then(response => {
        console.log('weather promise fulfilled')
        setWeather(response.data)
      })
  }, [])
  console.log('weather ', weather)
  */
  const DisplayCountries = () => {
    
    if (countries.length > 0) {
      const countriesToShow = countries.filter(country => country.name.toUpperCase().includes(filterValue.toUpperCase()))
      //console.log("filtteröidyt:", countriesToShow)

      if (countriesToShow.length > 10) {
        return ( <div>Too many countries</div>)
      }
      else if (countriesToShow.length === 1) {
        //console.log("yksi maa:", countriesToShow[0].languages)
        setCapital(countriesToShow[0].capital)
        return (
          <div>
            <h2>{countriesToShow[0].name}</h2>
      
            <p>capital {countriesToShow[0].capital}</p>
            <p>population {countriesToShow[0].population}</p>

            <h3>Languages</h3>
            {countriesToShow[0].languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            <img src={countriesToShow[0].flag} alt="flag" height="100"></img>
          </div>)
      }
      else {
        return (
        <div>
          {countriesToShow.map(country => <li key={country.name}>{country.name}
            <button onClick={() => newFilter(country.name)}>show</button></li>)}
        </div>)
      }
      
    } else {
    
      return (<div>Ei löydy yhtään maata</div>)
    }

  }
    
  function newFilter(cName) {
    setFilter(cName)
  }

  const handleFilter = (event) => {
    //console.log(event.target.value)
    setFilter(event.target.value)    
  }

 /*  const CapitalWeather = () => {

    console.log('weather effect', capital)
    useEffect(() => {
    axios
      .get(' http://api.weatherstack.com/current?access_key=faae0f7ff8fde8e109f8937803752b15&query=Helsinki')
      .then(response => {
        console.log('weather promise fulfilled')
        setWeather(response.data)
      })
  }, [])
  console.log('weather ', weather)
  return (
    "kukkuuu"
  )
  } */

  return (    
    <div>
      <h1>Country information</h1>
      
        Filter: <input value={filterValue}
          onChange={handleFilter}/>
      
      <DisplayCountries countries={countries}/>
      
    </div>
    
  )
}

export default App;
