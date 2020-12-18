import React from 'react';
import './addRemove.css';



const AddRemove = (props) => {
    const { addItem, removeItem } = props;
    return (
        <div className='addRemoveWrapper'>
            <button
                onClick={(event) => {
                    console.log(event.target.parentElement.previousElementSibling.textContent)
                    addItem(event.target.parentElement.previousElementSibling.textContent)
                }} >+
            </button>
            <button
                onClick={(event) => {
                    console.log(event.target.parentElement.previousElementSibling.textContent)
                    removeItem(event.target.parentElement.previousElementSibling.textContent)
                }}>-
            </button>
        </div>
    )

}


export default AddRemove;