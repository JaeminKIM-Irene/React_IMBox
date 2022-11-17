import React, {useEffect, useState} from 'react';
import Logo from '../images/logo.png'
import Enquiry from '../images/Enquiry.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import './HeaderNav.css'


const HeaderNav = () => {
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

    const directToHome = () => {
        window.location.pathname='/';
    }

    return (
        <div className='HeaderBar'>
            <div className='logoBox'>
                <img src={Logo} alt="" className='logo' onClick={directToHome}/>
            </div>
            
                { path === '/' ? (
                    <div className='tabs'>
                        <div onClick={toService}className='tab1'>풀필먼트 서비스</div>
                        <div onClick={toSystem} className='tab1'>차별점</div>
                    </div>
                ) : (
                    <div className='tabs'>
                        <div onClick={tohomeService}className='tab1' activeClass="tab1Active">풀필먼트 서비스</div>
                        <div onClick={tohomeSystem} className='tab1'  activeClass="tab1Active">차별점</div>
                    </div>
                )}
            <NavLink to={'/enquiry'}>
                <img src={Enquiry} alt="" className='enquiry'/>
            </NavLink>
            
        </div>
    );
};

export default HeaderNav;