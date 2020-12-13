/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import './App.css';
import React, { Component } from 'react';
import Persons from '../components/persons/Persons.js'
import Cockpit from '../components/cockpit/cockpit.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Ishmam', age: 23, id: 'dsfhds' },
      { name: 'tasin', age: 22, id: 'infsad' },
      { name: 'stephanie', age: 24, id: 'sffhioh8' }
    ],
    showPerson: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  


  changePerson = (event, id) => {

    let clickedPerson = this.state.persons.find((person, index) => {
      if (person.id === id) {
        const newPersons = [...this.state.persons];
        //console.log(newPersons)
        //person.name = event.target.value;
        newPersons[index].name = event.target.value;
        this.setState({
          persons: newPersons
        })
      }

    })
    //console.log(clickedPerson);
    //console.log(id);
    //console.log(event.target.value);


  }

  btnHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

  render() {
    //console.log(this.state.persons)
    console.log('[App.js] rendering...')
    if (this.state.showPerson) {
      return (
        <div className='app'>
          <Cockpit showPerson={this.state.showPerson} btnHandler={this.btnHandler} title={this.props.title} />
          <Persons persons={this.state.persons} changePerson={this.changePerson} />
        </div>
      )
    } else {
      return (
        <div className='app'>
          <Cockpit showPerson={this.state.showPerson} btnHandler={this.btnHandler} title={this.props.title} />
        </div>
      )
    }
  }
}
export default App;
