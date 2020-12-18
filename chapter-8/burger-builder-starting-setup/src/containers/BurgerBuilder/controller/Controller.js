import React from 'react';
import './controller.css';
import AddRemove from './AddRemove'


const Controller = (props) => {

    const { addItem, removeItem } = props;

    return (
        <div className='controller'>
            <div>
                <button >Salad</button>
                <AddRemove addItem = {addItem} removeItem = {removeItem}/>
            </div>
            <div>
                <button>Meat</button>
                <AddRemove addItem = {addItem} removeItem = {removeItem} />
            </div>
            <div>
                <button>Bacon</button>
                <AddRemove  addItem = {addItem} removeItem = {removeItem}/>
            </div>
            <div>
                <button>Cheese</button>
                <AddRemove addItem = {addItem} removeItem = {removeItem}/>
            </div>
        </div>
    )

}


export default Controller;