import React from 'react'
import ReactDOM from 'react-dom'
//import Course from './components/Course'
import axios from 'axios'
import App from './App'

// TH Fullstack challenge 2019

axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )
})


