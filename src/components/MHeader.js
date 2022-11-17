import React, {useEffect, useState} from 'react';
import Logo from '../images/logo.png'
import MEnquiry from '../images/MEnquiry.png'
import Menue from '../images/menue.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './MHeader.css'
import * as Scroll from 'react-scroll'

const MHeader = () => {
    const [view, setView] = useState(window.visualViewport.width)
    const path = useLocation().pathname;
    const history = useNavigate();
    const scroller = Scroll.scroller;

    useEffect(()=> {
        window.addEventListener('resize', viewChange);
        return () => {
            window.removeEventListener('resize', viewChange);
        }
    })

    const viewChange = () => {
        setView(window.innerWidth)
    }

    const toService = () => {
        scroller.scrollTo('service', {
            duration: 1000,
            delay: 50,
            smooth: true,
            offset: -view*15/100
        })
        }

    const tohomeService = async() => {
        await history('/');
        await scroller.scrollTo('service', {
        duration: 1000,
        delay: 50,
        smooth: true,
        offset: -view*15/100
        });
    }

    const toSystem = () => {
        scroller.scrollTo('system', {
            duration: 1000,
            delay: 50,
            smooth: true,
            offset: -view*8/100
        })
    }

    const tohomeSystem = async() => {
        await history('/');
        await scroller.scrollTo('system', {
        duration: 1000,
        delay: 50,
        smooth: true,
        offset: -view*8/100
        });
    }

    return (
        <div className='MHeaderBar'>
            <div className='MlogoBox'>
                <img src={Logo} alt="" className='Mlogo' onClick={() => history('/')}/>
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