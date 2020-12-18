import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxi';
import Controller from './controller/Controller'


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            Salad: 0,
            Meat: 0,
            Cheese: 2,
            Bacon: 0
        }
    }

    addItem = (item) => {
        Object.keys(this.state.ingredients).forEach((eachPropertyName) => {
            if (eachPropertyName === item) {

                const newIngredients = { ...this.state.ingredients }
                newIngredients[eachPropertyName] = newIngredients[eachPropertyName] + 1;

                this.setState({
                    ingredients: newIngredients
                })
            }
        })
    }

    removeItem = (item) => {
        Object.keys(this.state.ingredients).forEach((eachPropertyName) => {
            if (eachPropertyName === item) {
                if (this.state.ingredients[item] > 0) {
                    const newIngredients = { ...this.state.ingredients };
                    newIngredients[eachPropertyName] = newIngredients[eachPropertyName] - 1;

                    this.setState({
                        ingredients: newIngredients
                    })
                }

            }
        })
    }

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients}></Burger>
                <Controller addItem={this.addItem}  removeItem = {this.removeItem}/>
            </div>


        )
    }

}

export default BurgerBuilder;