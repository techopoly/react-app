/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import './App.css';
import React, { Component } from 'react';
import Persons from '../components/persons/Persons.js'

class App extends Component {
  state = {
    persons: [
      { name: 'Ishmam', age: 23, id: 'dsfhds' },
      { name: 'tasin', age: 22, id: 'infsad' },
      { name: 'stephanie', age: 24, id: 'sffhioh8' }
    ],
    showPerson: true
  }

  changePerson = (event, id) => {

    let clickedPerson = this.state.persons.find((person, index) => {
      if (person.id === id) {
        //const newPersons = { ...this.persons };
        person.name = event.target.value;
        //newPersons[index] = { ...person };
      }

    })
    //console.log(clickedPerson);
    console.log(id);
    console.log(event.target.value);

    this.setState({
    })
  }

  btnHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

  render() {
    let buttonColor = ''
    if (this.state.showPerson) {
      buttonColor = 'buttonRed';
      return (
        <div class='app'>
          <h1>{this.props.title}</h1>
          <button className={buttonColor} onClick={this.btnHandler}>Hide Persons</button>
          <Persons persons={this.state.persons} changePerson={this.changePerson} />
        </div>
      )
      
    } else {
      buttonColor = 'buttonYellow'

      return(
        <div class='app'>
          <button className={buttonColor} onClick={this.btnHandler}>Show Person</button>
        </div>
      )
    }

    
  }
}
export default App;
