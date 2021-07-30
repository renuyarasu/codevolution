import React, { Component } from 'react'
import Person from './Person'

// const names = ['VedaGna', 'Hindu', 'Renu'] 

const persons = [
    {
        id: 1,
        name: 'VedaGna',
        age: 25,
        skill: 'React',
    },
    {
        id: 1,
        name: 'Hindu',
        age: 22,
        skill: 'JavaScript',
    },
    {
        id: 1,
        name: 'Renu',
        age: 35,
        skill: 'Vue',
    },
]
const personList = persons.map(person => <Person key={person.id} person={person}/>)

export class NameList extends Component {
    render() {
        return (
            <div>{personList}</div>
        )
    }
}

export default NameList
