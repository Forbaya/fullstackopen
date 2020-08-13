import React from 'react'

import personService from './PersonService'

const Person = ({person, persons, setPersons, setNotification}) => {
    const deletePerson = person => {
        const result = window.confirm(`Delete ${person.name}?`)

        if (result) {
            personService
                .deletePerson(person.id)
                .then(response => {
                    setPersons(persons.filter(p => p.id !== person.id))
                })
                .catch(error => {
                    const notification = {
                        type: 'error',
                        message: `Information of ${person.name} has already been removed from the server`
                    }
                    setNotification(notification)

                    setTimeout(() => {
                        setNotification(null)
                    }, 5000)
                })
        }

    }

    return (
        <div>
            <span>{person.name} {person.number}</span>
            <button onClick={() => deletePerson(person)}>delete</button>
        </div>
    )
}

export default Person