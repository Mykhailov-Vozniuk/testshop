import React from 'react';
import './Footer.css';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import {ReactComponent as InstLogo} from '../../../assets/InstLogo.svg';
import {ReactComponent as FacebookLogo} from '../../../assets/FacebookLogo.svg';
import {ReactComponent as TwitterLogo} from '../../../assets/TwitterLogo.svg';
import {ReactComponent as LinkedinLogo} from '../../../assets/LinkedinLogo.svg';

export const Footer = () => {

    return(
        <div className={'footer'}>
            <div className={'footerFirstHalf'}>
                <div>
                    <button className={'footerButton'}>CONTACT</button>
                    <button className={'footerButton'}>TERMS OF SERVICES</button>
                    <button className={'footerButton'}>SHIPPING AND RETURNS</button>
                </div>
                <div className='inputContainer'>
                    <input className="footerInput" placeholder="Give an email, get the newsletter." />
                    <ArrowLongRightIcon className="icon" />
                </div>
            </div>
            <div className={'footerSecondHalf'}>
                <p><b>© 2021 Shelly.</b> Terms of use <b>and</b> privacy policy.</p>
                <div className="socials">
                    <LinkedinLogo />
                    <FacebookLogo />
                    <InstLogo />
                    <TwitterLogo />
                </div>
            </div>
        </div>
    )
}