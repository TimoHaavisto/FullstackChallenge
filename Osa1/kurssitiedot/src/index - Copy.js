import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  
  return (
    <div>
      <h1>{props.course}</h1>
       
    </div>
  )
}

const Content = (props) => {
 
  console.log(props.content.name)
  return (
    
    <div>
      <p>
        {props.content.name} {props.content.exercises}
      </p>
      
    </div>
  )
  
}

const Total = (props) => {

  return (
    <div>
      <p>Yhteensä {props.total} tehtävää</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = {
    name: 'Reactin perusteet',
    exercises: 10
  }
  const part2 = {
    name: 'Tiedonvälitys propseilla',
    exercises: 7
  }
  const part3 = {
    name: 'Komponenttien tila',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content  content={part1} />
      <Content  content={part2} />
      <Content  content={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))