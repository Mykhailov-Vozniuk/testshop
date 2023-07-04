import {useParams} from "react-router-dom"
import React, {useEffect} from 'react';
import { Carousel } from "../Shared/Carousel/Carousel"
import { useDispatch, useSelector} from 'react-redux';
import { actionProducts, actionProduct } from '../../Redux/Actions';
import { Grid } from "../Shared/Grid/Grid"
import { Header } from "../Shared/Header/Header"
import { Footer } from "../Shared/Footer/Footer"
import './ProductPage.css';
import { HeartIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { Rating } from '../Shared/Rating/Rating'
import { Counter } from '../Shared/Counter/Counter'
import { MiddleText } from './MiddleText/MiddleText'
import {ReactComponent as InstLogo} from '../../assets/InstLogo.svg'
import {ReactComponent as FacebookLogo} from '../../assets/FacebookLogo.svg'
import {ReactComponent as TwitterLogo} from '../../assets/TwitterLogo.svg'

export const ProductPage = () => {
    const dispatch = useDispatch()

	const productList = useSelector((state) => state.productReducer.productList)
    const product = useSelector((state) => state.productReducer.product)

    const { productId } = useParams()
    const {rating, price, image, title, category} = product || {};

    useEffect(() => {
		dispatch(actionProducts(3))
        dispatch(actionProduct(productId))
	}, [productId])

    return(
        <div className='wrapperProduct'>
            <Header section={'shop'}/>
            <div className="productArea">
                <Carousel images={[image, image, image, image]}/>
                <div className="info">
                    <div className="productTitle">
                        <h3>{title}</h3>
                        <p className='price'>{price ? `$ ${price.toString().replace('.',',')}` : null}</p>
                    </div>
                    <div className="review">
                        <Rating className='rating' rating={rating?.rate}/>
                        <p>{rating?.count} customers review</p>
                    </div>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.</p>
                    <div className="shopContainer">
                        <Counter />
                        <button className='addButton'>ADD TO CART</button>
                    </div>
                    <div className="icons">
                        <HeartIcon className="icon"/>
                        <div className="socials">
                            <EnvelopeIcon className="icon"/>
                            <FacebookLogo />
                            <InstLogo />
                            <TwitterLogo />
                        </div>
                    </div>
                    <div className="sku">
                        <span className='blackened'>SKU:</span>
                        <span>12</span>
                    </div>
                    <div className="categories">
                        <span className='blackened'>Categories:</span>
                        <span>{category}</span>
                    </div>
                </div>
            </div>
            <MiddleText product={product}/>
            <Grid productList={productList}/>
            <Footer />
        </div>
    )
}