import React from 'react';
import Ingredient from './Ingredients/Ingredient';
import './burger.css';
import Aux from '../../hoc/Auxi'


const Burger = (props) => {

    const { ingredients } = props;
    let itemNumber = Object.keys(ingredients).length;

    const createStack = (item) => {
        let stack = []
        if (ingredients[item] > 0) {
            for (let i = 0; i < ingredients[item]; i++) {
                stack.push(<Ingredient ingredinetType={item} key={Math.random()+ Math.random()} />)
            }
        }
        return stack;
    }
    // console.log(Object.keys(ingredients).length);

    let ingredientStack = [];
    for (let i = 0; i < itemNumber; i++) {
        ingredientStack.push(createStack(Object.keys(ingredients)[i]));
        //console.log(ingredientStack)
    }

    const reducer = (accumulator, currentValue, currentIndex, array) => { /* we will use reducer later and review the logic that max used to understand the concpe */

        for (let i = 0; i < currentValue.length; i++) {
            accumulator.push(currentValue[i]);
        }
        //console.log(accumulator)
        return accumulator
    }

   /*  ingredientStack.reduce(reducer);
    console.log(ingredientStack.reduce(reducer))
 */
    /* console.log(Object.keys(ingredients)[0])
    let test = createStack(Object.keys(ingredients)[0])
 */
    return (
        <div className='Burger'>
            <Ingredient ingredinetType='BreadTop' />
            {ingredientStack}
            <Ingredient ingredinetType='BreadBottom' />
        </div>
    )

}


export default Burger;


/* <Ingredient ingredinetType='Salad'/>
            <Ingredient ingredinetType='Meat'/>
            <Ingredient ingredinetType='Cheese'/>
            <Ingredient ingredinetType='Bacon'/> */