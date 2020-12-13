import React, { Component } from 'react';
import Person from './person/Person.js';


class Persons extends Component{
    //console.log(props.persons)
    state = {}
    static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate')
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }
     
    componentDidUpdate(){
        console.log('[Persons.js] componentDidUpdate')
    }

    componentDidMount(){
        console.log('[Persons.js] componentDidMount')
      }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount ')
      }

    render() {
        console.log('[Persons.js] rendering...')
        return (
            this.props.persons.map((person, index) => {
                return (<Person
                    click={() => { this.props.clicked(index) }}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    id={person.id}
                    changed={this.props.changePerson}>

                </Person>)
            })

        )
    }


}

export default Persons;