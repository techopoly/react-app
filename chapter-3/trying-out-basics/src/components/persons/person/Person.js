/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React from 'react';
import './person.css';

const Person = (props) => {
    return(
        <div className='person'>
        <h3>My name is {props.name}</h3>
        <p>My age is {props.age}</p>
        <input onChange = {(event)=>{props.changed(event, props.id)}}></input>
    </div>
    )
    
}

export default Person;