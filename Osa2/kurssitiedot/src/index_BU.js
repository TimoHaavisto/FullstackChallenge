import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'
import axios from 'axios'

// TH Fullstack challenge 2019

axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
})

/* console.log(promise)
promise.then(response => {
  console.log(response)
})
 */


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)