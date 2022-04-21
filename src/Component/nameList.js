import React from 'react'
import Person from './Person'

const nameList = () => {
    
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Jerry',
            age: 30,
            skill: 'Veu'
        },
        {
            id: 3,
            name: 'Joy',
            age: 30,
            skill: 'Angular'
        }
    ]
    const personList = persons.map((person) => <Person key={person.id} person={person}/>)
  return (
    <div>{personList}</div>
  )
}

export default nameList