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

export const ProductPage = () => {
    const dispatch = useDispatch()

	const productList = useSelector((state) => state.productReducer.productList)
    const product = useSelector((state) => state.productReducer.product)

    const id = useParams()

    useEffect(() => {
		dispatch(actionProducts(3))
        dispatch(actionProduct(id.productId))
	}, [id])

    console.log('product', product)

    return(
        <div className='wrapperProduct'>
            <Header section={'shop'}/>
            <div className="productArea">
                <Carousel images={[product.image,product.image,product.image,product.image]}/>
                <div className="info">
                    <div className="productTitle">
                        <h3>{product.title}</h3>
                        <p className='price'>{product.price ? `$ ${product.price.toString().replace('.',',')}` : null}</p>
                    </div>
                    <div className="review">
                        <Rating className='rating' rating={product.rating ? product.rating.rate : null}/>
                        <p>{product.rating ? product.rating.count : null} customers review</p>
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
                            <svg className="icon" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 2.84211H6.5C5.94772 2.84211 5.5 3.26626 5.5 3.78948V6.63159H9.5C9.61374 6.62919 9.7216 6.67932 9.78923 6.766C9.85685 6.85267 9.87578 6.96507 9.84 7.06738L9.1 9.15159C9.03181 9.34288 8.84312 9.47219 8.63 9.47369H5.5V16.579C5.5 16.8406 5.27614 17.0526 5 17.0526H2.5C2.22386 17.0526 2 16.8406 2 16.579V9.47369H0.5C0.223858 9.47369 0 9.26162 0 9.00001V7.10527C0 6.84366 0.223858 6.63159 0.5 6.63159H2V3.78948C2 1.69661 3.79086 0 6 0H9.5C9.77614 0 10 0.212076 10 0.473685V2.36842C10 2.63003 9.77614 2.84211 9.5 2.84211Z" fill="#707070"/>
                            </svg>
                            <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0.947266H5C2.23858 0.947266 0 3.06802 0 5.68411V13.2631C0 15.8792 2.23858 17.9999 5 17.9999H13C15.7614 17.9999 18 15.8792 18 13.2631V5.68411C18 3.06802 15.7614 0.947266 13 0.947266ZM16.25 13.2631C16.2445 14.9614 14.7926 16.3369 13 16.3421H5C3.20735 16.3369 1.75549 14.9614 1.75 13.2631V5.68413C1.75549 3.98583 3.20735 2.61037 5 2.60517H13C14.7926 2.61037 16.2445 3.98583 16.25 5.68413V13.2631ZM13.75 5.92094C14.3023 5.92094 14.75 5.49679 14.75 4.97358C14.75 4.45038 14.3023 4.02623 13.75 4.02623C13.1977 4.02623 12.75 4.45038 12.75 4.97358C12.75 5.49679 13.1977 5.92094 13.75 5.92094ZM8.99999 5.21051C6.51472 5.21051 4.5 7.11918 4.5 9.47365C4.5 11.8281 6.51472 13.7368 8.99999 13.7368C11.4853 13.7368 13.5 11.8281 13.5 9.47365C13.5027 8.34223 13.0294 7.25641 12.1849 6.45637C11.3404 5.65633 10.1943 5.20799 8.99999 5.21051ZM6.25 9.47361C6.25 10.9125 7.48122 12.0789 9 12.0789C10.5188 12.0789 11.75 10.9125 11.75 9.47361C11.75 8.03477 10.5188 6.86835 9 6.86835C7.48122 6.86835 6.25 8.03477 6.25 9.47361Z" fill="#707070"/>
                            </svg>
                            <svg className="icon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9708 3.28138C19.4547 3.9335 18.8309 4.50235 18.1235 4.96596C18.1235 5.13632 18.1235 5.30667 18.1235 5.48648C18.1292 8.58004 16.8249 11.5464 14.5029 13.7205C12.181 15.8945 9.03567 17.0945 5.77211 17.0514C3.88538 17.0574 2.02281 16.6493 0.330301 15.859C0.239042 15.8212 0.18018 15.7357 0.180527 15.6413V15.5372C0.180527 15.4013 0.296758 15.2911 0.440136 15.2911C2.29475 15.2332 4.0832 14.624 5.55244 13.5498C3.87376 13.5177 2.36338 12.5756 1.66829 11.127C1.63318 11.0479 1.64411 10.9571 1.69713 10.8875C1.75016 10.818 1.83761 10.7796 1.9279 10.7863C2.43809 10.8349 2.95337 10.7899 3.44561 10.6538C1.59249 10.2894 0.200074 8.8319 0.000797149 7.04803C-0.00628542 6.96246 0.0341943 6.87957 0.107613 6.82931C0.181031 6.77906 0.276775 6.76869 0.360256 6.80197C0.857554 7.00986 1.39439 7.11935 1.93788 7.12375C0.314106 6.11407 -0.387258 4.19364 0.230452 2.44855C0.294214 2.27898 0.447402 2.15371 0.633723 2.11878C0.820043 2.08385 1.01201 2.14441 1.13908 2.2782C3.33027 4.48754 6.34099 5.80407 9.53645 5.95022C9.4546 5.6408 9.41434 5.32281 9.41663 5.00382C9.44652 3.33119 10.5389 1.84117 12.1825 1.23134C13.826 0.621516 15.6953 1.01257 16.9153 2.22142C17.747 2.07133 18.551 1.80669 19.3018 1.43591C19.3568 1.40338 19.4265 1.40338 19.4815 1.43591C19.5158 1.48803 19.5158 1.55413 19.4815 1.60626C19.1178 2.39518 18.5035 3.05687 17.7241 3.49905C18.4066 3.42407 19.0771 3.27155 19.7211 3.04478C19.7754 3.00981 19.8466 3.00981 19.9009 3.04478C19.9463 3.06447 19.9802 3.10212 19.9937 3.14771C20.0072 3.1933 19.9988 3.2422 19.9708 3.28138Z" fill="#707070"/>
                            </svg>
                        </div>
                    </div>
                    <div className="sku">
                        <span className='blackened'>SKU:</span>
                        <span>12</span>
                    </div>
                    <div className="categories">
                        <span className='blackened'>Categories:</span>
                        <span>{product.category ? product.category : null}</span>
                    </div>
                </div>
            </div>
            <MiddleText product={product}/>
            <Grid productList={productList}/>
            <Footer />
        </div>
    )
}