import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    
  const [selected, setSelected] = useState(0)
  const [votes, updateVotes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
  
  const nextAnecdote = () => {     
    setSelected(Math.floor(Math.random() * 6))    
  }

  const voting = () => {
    const newVotes = [...votes]
    newVotes[selected] = newVotes[selected] + 1
    updateVotes(newVotes)
    
  }
  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <p>
        <button onClick={voting}>Vote this</button>
        <button onClick={nextAnecdote}>Next anecdote</button>
      </p>
      <h2>Anecdote with most votes</h2>
      <p>
        <MostVoted votes={votes}/>
      </p>
      
    </div>
  )
}

const MostVoted = (props) => {
  let mostVotes = 0;
  let index = 0;
  props.votes.forEach(element => {
    if (element > props.votes[mostVotes]) {
      mostVotes = index
    };    
    index += 1;
  });

  return (
    anecdotes[mostVotes] + " (has " + props.votes[mostVotes] + " votes)"
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)