import {useDispatch, useSelector} from 'react-redux';
import { actionProducts } from '../../Redux/Actions';
import { Grid } from "../Shared/Grid/Grid"
import React, {useEffect} from 'react';
import { Header } from "../Shared/Header/Header"
import { Footer } from "../Shared/Footer/Footer"
import './Home.css';

export const Home = () => {
    const dispatch = useDispatch()

	const productList = useSelector((state) => state.productReducer.productList)

    useEffect(() => {
		dispatch(actionProducts(6))
	}, [])

    return(
        <div className='wrapperHome'>
            <Header section={'home'}/>
            <div className='homeTitle'>
                <p className='primaryText'>Shop the Latest</p>
                <button className='secondaryText'>View All</button>
            </div>
            <Grid productList={productList}/>
            <Footer />
        </div>
    )
}