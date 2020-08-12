import React from 'react'

import personService from './PersonService'

const AddPersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {
    const addPerson = e => {
        e.preventDefault()

        if (persons.map(person => person.name).includes(newName)) {
            alert(`${newName} is aleady added to phonebook`)
            return
        }

        const newPerson = {name: newName, number: newNumber}

        personService
            .create(newPerson)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
    }

    const handleNameChange = e => {
        setNewName(e.target.value)
    }

    const handleNumberChange = e => {
        setNewNumber(e.target.value)
    }

    return (
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
    )
}

export default AddPersonForm