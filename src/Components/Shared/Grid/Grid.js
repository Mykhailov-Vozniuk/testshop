import React from 'react';
import './Grid.css';
import { useNavigate } from "react-router-dom";

export const Grid = (params) => {

    const navigate = useNavigate();
    const cells = params.productList.map((product, index) => {
        return(
            <div id={product.id} key={index} className='cell' onClick={event => {navigate(`/product/${product.id}`)}}>
                <img src={product.image}/>
                <p className='title'>{product.title}</p>
                <p className='price'>{`$ ${product.price.toString().replace('.',',')}`}</p>
            </div>
        )
    })

    return(
        <div className='gridWrapper'>
            {cells}
        </div>
    )
}