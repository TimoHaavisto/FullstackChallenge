import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = props => {
        
    let countFB = 0
    props.numbers.forEach(element => {
        countFB += element
        
    });
    
    let avg = (props.numbers[0] * 1 + props.numbers[1] * 0 + props.numbers[2] * -1)/3;
    
    let percentagePositive =
        props.numbers[0] / countFB * 100;
    

    if (countFB > 0) {
        return (           
                 <tbody>
                <Statistic text="hyvä" value={props.numbers[0]} />
                <Statistic text="neutraali" value={props.numbers[1]} />
                <Statistic text="huono" value={props.numbers[2]} />
                <Statistic text="yhteensä" value={countFB} /> 
                <Statistic text="keskiarvo" value={avg} />
                <Statistic text="Positiivisia" value={percentagePositive + " %"} />
                </tbody>   
        )
    } else {
        return (
            <tbody><tr><td>Ei yhtään annettua palautetta</td></tr></tbody>
        )
    }
}

const Statistic = (props) => {

    return (
        <tr>
          <td>{props.text}</td><td>{props.value}</td>
        </tr>      
    )
}

const Button = (props) => {
    
    return (
        <button onClick={props.handleClick}>{props.text}</button>
        
    )
}

const App = (props) => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const status = [good, neutral, bad]
  return (
    <div>
        <h1>Anna palautetta </h1>      
        <Button handleClick={() => setGood(good + 1)} text='Hyvä' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='Neutraali' />
        <Button handleClick={() => setBad(bad + 1)} text='Huono' /> 
        <h2>Statistiikka</h2>
        <table>
        <Statistics numbers={status}/>
        </table>
    </div>
  )
}



ReactDOM.render(<App />, 
  document.getElementById('root')
)