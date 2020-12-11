import React from 'react';
import Person from './person/Person.js';


const Persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return (<Person
                click={() => {props.clicked(index) }}
                name={person.name}
                age={person.age}
                key={person.id}
                id={person.id}
                changed={props.changePerson}>

            </Person>)
        })

    )
}

export default Persons;