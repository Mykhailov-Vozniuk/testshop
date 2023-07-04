import React, { useEffect, useState } from 'react';
import { Slider } from 'rsuite';
import './Carousel.css';

export const Carousel = (props) => {
    const [chosen, setChosen] = useState(0)

    const images = props.images.map((img, index) => {
        return(
            <div key={index}>
                <img id={index} src={img} onClick={event => {
                    setChosen(event.target.id)}} className="sub"/>
            </div>
        )
    })

    return(
    <div>
        <div className='wrapper'>
            <div className='subContainer'>
                {images}   
            </div>
            <div>
                <img src={props.images[chosen]} className="main"/>
            </div>
            
        </div>
        <div className='sliderContainer'>
            <Slider
                min={0}
                max={3}
                value={Number(chosen)}
                handleStyle={{
                    color: "#707070",
                    fontSize: 12,
                    width: 200
                }}
                tooltip={false}
                onChange={event => setChosen(event)}
            />
            <div className='sliderExtention'></div>
        </div>
    </div>
    )
}