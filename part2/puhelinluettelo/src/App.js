import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Filter from "./Filter";
import AddPersonForm from "./AddPersonForm";
import Person from "./Person";

const App = () => {
    const [persons, setPersons] = useState([])
    const [filteredPersons, setFilteredPersons] = useState(persons)
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/persons').then(response => {
            setPersons(response.data)
        })
    }, [])

    const updateFilteredPersons = () => {
        const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        setFilteredPersons(filteredPersons)
    }

    useEffect(() => updateFilteredPersons(), [filter])
    useEffect(() => updateFilteredPersons(), [persons])

    return (
        <div>
            <h2>Phone book</h2>
            <Filter filter={filter} setFilter={setFilter}/>
            <AddPersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName}
                           newNumber={newNumber} setNewNumber={setNewNumber}/>
            <h2>Numbers</h2>
            {filteredPersons.map(person =>
                <Person key={person.name} person={person}/>
            )}
        </div>
  )
}

export default App