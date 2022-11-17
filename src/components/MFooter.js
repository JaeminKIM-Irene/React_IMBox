import React from 'react';
import './MFooter.css'
import Footerlogo from '../images/footerLogo.png'
import blogIcon from '../images/blogIcon.png'
import fbIcon from '../images/fbIcon.png'
import instaIcon from '../images/instaIcon.png'

const MFooter = () => {

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
        <div className='MfooterBar'>
            <img src={Footerlogo} alt="" className='MFooterlogo' />
            <div className='Mtext1' >상담 문의</div>
            <div className='Mtext2'>1000-0000</div>
            <div className='Mtext3'>IMBOX.OFFICIAL@GMAIL.COM</div>
            <div className='Mtext4'>(주) 아임박스 대표이사 : 김민재</div>
            <div className='Mtext4'>사업자등록번호 : 000-00-00000</div>
            <div className='Mtext4'>주소 : 서울시 용산구 한강대로 100</div>
            <div className='Mtext4'>COPYRIGHT (C) 2018 IMBOX. ALL RIGHT RESERVED.</div>
            <div className='MfootlogoBox'>
                <img src={fbIcon} alt="" className='Mfb' onClick={directToFb}/>
                <img src={blogIcon} alt='' className='Mblog' onClick={directToBlog}/>
                <img src={instaIcon} alt='' className='Minsta' onClick={directToInsta}/>
            </div>
        </div>
    );
};

export default MFooter;