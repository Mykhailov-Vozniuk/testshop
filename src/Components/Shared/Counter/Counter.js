import React, { useState } from 'react';
import './Counter.css';

export const Counter = (props) => {

    const [counter, setCounter] = useState(1)

    return(
        <div className='counterWrapper'>
            <button disabled={counter<=1} onClick={() => setCounter(prevState => --prevState)}>-</button>
            <p>{counter}</p>
            <button onClick={() => setCounter(prevState => ++prevState)}>+</button>
        </div>
    )
}