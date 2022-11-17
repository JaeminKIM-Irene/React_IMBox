import React from 'react';
import { NavLink } from 'react-router-dom'
import './Footer.css'
import Footerlogo from '../images/footerLogo.png'
import blogIcon from '../images/blogIcon.png'
import fbIcon from '../images/fbIcon.png'
import instaIcon from '../images/instaIcon.png'

const Footer = () => {

    const directToFb = () => {
        window.location.href = 'https://www.facebook.com/'
      }
    
      const directToBlog = () => {
        window.location.href = 'https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0'
      }
    
      const directToInsta = () => {
        window.location.href = 'https://www.instagram.com/'
      }
    return (
        <div className='footerBar'>
            <div className='column1'>
                <img src={Footerlogo} alt="" className='Footerlogo' />
                <div className='text1'>상담 문의</div>
                <div className='text2'>1000-0000</div>
                <div className='text3'>IMBOX.OFFICIAL@GMAIL.COM</div>
            </div>
            <div className='column2'>
                <p className='text4'>(주) 아임박스 대표이사 : 김민재</p>
                <p className='text4'>사업자등록번호: 000-00-00000</p>
                <p className='text4'>주소: 서울시 용산구 한강대로 100</p>
                <p className='text4'>COPYRIGHT (C) 2018 IMBOX.ALL RIGHT RESERVED.</p>
            </div>
            <div className='column3'>
                <img src={fbIcon} alt="" className='fb' onClick={directToFb}/>
                <img src={blogIcon} alt='' className='blog' onClick={directToBlog}/>
                <img src={instaIcon} alt='' className='insta' onClick={directToInsta}/>
            </div>
        </div>
    );
};

export default Footer;