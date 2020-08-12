import React from 'react'

import personService from './PersonService'

const Person = ({person, persons, setPersons}) => {
    const deletePerson = person => {
        const result = window.confirm(`Delete ${person.name}?`)

        if (result) {
            personService
                .deletePerson(person.id)
                .then(response => {
                    setPersons(persons.filter(p => p.id !== person.id))
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