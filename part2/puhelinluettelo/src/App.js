import React, { useEffect, useState } from 'react'
import Filter from "./Filter";
import AddPersonForm from "./AddPersonForm";
import Person from "./Person";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [filteredPersons, setFilteredPersons] = useState(persons)
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

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