import React, {useEffect} from 'react';
import './cockpit.css';



const Cockpit = (props)=>{
    const {showPerson, btnHandler, title} = props
/*    
     useEffect(()=>{
        console.log('[cockpit.js] useEffect');

    }, [showPerson]);/*  the second arg is for defining for which props change useEffect will trigger.
    if you want to trigger the useEffect only the first time this component is created then pass an empty array */
 
    useEffect(()=>{
        console.log('[cockpit.js] useEffect with return function')
        return ()=>{
            console.log('[cockpit.js] cleaning up before unmounting') //this will run when you unmount cockpit.js
        }
    })
    

 
/* 
    useEffect(()=>{
        console.log('[cockpit.js] useEffect--empty array');
    }, []);

 */
    
    
    let buttonColor = ''
    if (showPerson) {
      buttonColor = 'buttonRed';
    }
    else{
        buttonColor = 'buttonYellow'
    }
    console.log('still running')
    return (
        <div className='cockpit'>
          <h1>{title}</h1>
          <button className={buttonColor} onClick={btnHandler}>Show Person</button>
        </div>
    )
}

export default React.memo(Cockpit); //alternative to shouldComponentUpdate(){} for funcitonal components