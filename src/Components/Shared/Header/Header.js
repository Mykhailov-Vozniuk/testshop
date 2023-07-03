import React from 'react';
import {ReactComponent as Logo} from '../../../assets/SHOPPE.svg'
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'
import './Header.css';

export const Header = (params) => {

    const routes = ['shop','blog','ourStory']
    console.log('header', params)
    return(
        <div className={routes.find(e => e === params.section) ? 'header' : 'headerHome'}>
            <Logo />
            <div className={'headerOthers'}>
                <div className='headerRoutes'>
                    <button className={params.section === 'shop' ? 'headerButtonSelected' : 'headerButton'}>Shop</button>
                    <button className={params.section === 'blog' ? 'headerButtonSelected' : 'headerButton'}>Blog</button>
                    <button className={params.section === 'ourStory' ? 'headerButtonSelected' : 'headerButton'}>Our Story</button>
                </div>
                <div className="headerSocials">
                    <MagnifyingGlassIcon className="icon"/>
                    <ShoppingCartIcon className="icon"/>
                    <UserIcon className="icon"/>
                </div>
            </div>
        </div>
    )
}