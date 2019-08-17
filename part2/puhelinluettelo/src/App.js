import React, { useState } from 'react'

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

    const addPerson = (e) => {
        e.preventDefault()

        if (persons.map(person => person.name).includes(newName)) {
            alert(`${newName} is aleady added to phonebook`)
            return
        }
        const newPerson = {name: newName, number: newNumber}
        setPersons(persons.concat(newPerson))
        setNewName('')

        updateFilteredPersons()
    }

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value)
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
        updateFilteredPersons()
    }

    const updateFilteredPersons = () => {
        const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        //console.log(filter)
        //console.log(filteredPersons)
        setFilteredPersons(filteredPersons)
    }

    return (
        <div>
            <h2>Phone book</h2>
            <div>
                filter shown with <input value={filter} onChange={handleFilterChange}/>
            </div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {filteredPersons.map(person =>
                <div key={person.name}>
                    {person.name} {person.number}
                </div>
            )}
        </div>
  )

}

export default App