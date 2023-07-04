import React, { useState } from 'react';
import { Slider } from 'rsuite';
import './MiddleText.css';

export const MiddleText = (params) => {

    const [selected, setSelected] = useState(0)

    const chunks = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        '',
        ''
    ]

    return(
        <div className='textsWrapper'>
            <div className='buttonContainer'>
                <button className='selectedButton' onClick={() => setSelected(0)}>Description</button>
                <button onClick={() => setSelected(1)}>Aditional Information</button>
                <button onClick={() => setSelected(2)}>Reviews({params.product.rating?.count})</button>
            </div>
            <p>{chunks[selected]}</p>
        </div>
    )
}