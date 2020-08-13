import React from 'react'

import personService from './PersonService'

const AddPersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber,
                           setNotification, setError}) => {
    const addPerson = e => {
        e.preventDefault()

        if (persons.map(person => person.name).includes(newName)) {
            const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            if (result) {
                const person = persons.find(p => p.name === newName)

                personService
                    .updateNumber(person, newNumber)
                    .then(updatedPerson => {
                        setPersons(persons.filter(p => p.name !== newName).concat(updatedPerson))
                        setNewName('')
                        setNewNumber('')
                    })
            }
        } else {
            const newPerson = {name: newName, number: newNumber}

            personService
                .create(newPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                    setNotification(`Added ${newName}`)

                    setTimeout(() => {
                        setNotification(null)
                    }, 5000)
                })
        }
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