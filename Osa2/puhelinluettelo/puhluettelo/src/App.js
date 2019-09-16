import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  /* const [ persons, setPersons] = useState([
  { name: 'Arto Hellas', number: '040-123456', id: "9999" },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: "8888" },
  { name: 'Dan Abramov', number: '12-43-234345', id: "7777" },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: "6666" }
]) */
  const [persons, setPersons] = useState([])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    event.preventDefault()

    if (!persons.find(persons => persons.name === newName)) {
      //console.log("nimeä ei löydy")
      const personObject = {
        name: newName,
        number: newNumber,
        date: new Date().toISOString(),
        id: persons.length + 1
      }
      
      setPersons(persons.concat(personObject)) 
      setNewName('')
      setNewNumber('')
    } else {
      //console.log("nimi löytyy")
      alert(`${newName} is already added to phonebook`)
    }    
  }

  const namesToShow = 
    persons.filter(person => person.name.toUpperCase().includes(filterValue.toUpperCase()))
  
  const DisplayNames = ({persons}) => {
    return namesToShow.map( person => <li key={person.id}>{person.name} {person.number}</li>)
  }
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    //console.log("filter:", event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with: <input value={filterValue}
            onChange={handleFilter}/>
          
        </div>
        <br></br>

        <Form newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} 
            handleNumberChange={handleNumberChange} onSubmit={addName} />
      
      <h2>Numbers</h2>      
      <DisplayNames persons={persons} />     
    </div>
  )
}

const Form = ({newName, handleNameChange, newNumber, handleNumberChange, onSubmit}) => {
  return(
    <form onSubmit={onSubmit}>
      <div>
        <h3>Add new name</h3>
        name: <input value={newName}
                onChange={handleNameChange}/>
      </div>
      <div>
        number: <input value={newNumber}
                onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
export default App