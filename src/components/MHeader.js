import React from 'react';
import Logo from '../images/logo.png'
import MEnquiry from '../images/MEnquiry.png'
import Menue from '../images/menue.png'
import { NavLink } from 'react-router-dom'
import './MHeader.css'

const MHeader = () => {

    const directToHome = () => {
        window.location.pathname = '/';
    }

    return (
        <div className='MHeaderBar'>
            <div className='MlogoBox'>
                <img src={Logo} alt="" className='Mlogo' onClick={directToHome}/>
            </div>
            <div className='Mtabs'>
                <img src={Menue} alt="" className='menue' />
                <NavLink to={'/enquiry'}>
                    <img src={MEnquiry} alt="" className='Menquiry'/>
                </NavLink>
                
            </div>
        </div>
    );
};

export default MHeader;