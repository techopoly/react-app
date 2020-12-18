import React from 'react';
import './ingredient.css';


const Ingredient = (props) => {
    const { ingredinetType } = props;
    
    return (
        <div className={ingredinetType}></div>
    )

}

export default Ingredient;



/* switch (ingredinetType) {
        case ('BreadBottom'):
            ingredient = <div className={ingredinetType}>working</div>
            break;
        case ('BreadTop'): ingredient = <div className={ingredinetType}></div>
            break;
        case ('Meat'): ingredient = <div className={ingredinetType}></div>
            break;
        case ('Cheese'): ingredient = <div className={ingredinetType}></div>
            break;
        case ('Salad'): ingredient = <div className={ingredinetType}></div>
            break;
        case ('Bacon'): ingredient = <div className={ingredinetType}></div>
            break;
        default: ingredient = null
    } */