import React from 'react'
import Person from './Person'

function Names() {
    // const persons = ['VedaGna', 'Hindu', 'Renu']

    const persons = [
        {
            id: 1,
            name: 'VedaGna',
            age: 5,
            skill: 'JavaScript'
        },
        {
            id: 2,
            name: 'Hindu',
            age: 22,
            skill: 'PHP'
        },
        {
            id: 3,
            name: 'Renu',
            age: 35,
            skill: 'React'
        },
        {
            id: 4,
            name: 'Yarasu',
            age: 100,
            skill: 'Python'
        }

    ]
    const personsList = persons.map(person => <Person person={person}/>)
    return (
        <div>
            {personsList}
        </div>
    )
}

export default Names
