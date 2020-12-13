/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './person.css';
import Aux from '../../../hoc/auxilliary.js';
class Person extends Component {


    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                <div className='person'>
                    <h3>My name is {this.props.name}</h3>
                    <p>My age is {this.props.age}</p>
                    <input onChange={(event) => { this.props.changed(event, this.props.id) }}></input>
                </div>
                <h1>this is h1</h1>
                {this.props.children}
            </Aux>

        )
    }


}

export default Person;