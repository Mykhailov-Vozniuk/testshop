import React, { useState } from 'react';
import './Counter.css';

export const Counter = (params) => {

    const [counter, setCounter] = useState(1)

    return(
        <div className='counterWrapper'>
            <button disabled={counter>1 ? false : true} onClick={() => setCounter(counter-1)}>-</button>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter+1)}>+</button>
        </div>
    )
}