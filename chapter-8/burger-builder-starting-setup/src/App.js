import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Burger from './components/Burger/Burger';

class App extends Component {
  render() {
    return (
      <BurgerBuilder/>
    );
  }
}




export default App;
