import React from 'react';
import './main.css';
import * as Scroll from 'react-scroll';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import MHeader from '../components/MHeader'
import MFooter from '../components/MFooter'
import Banner1 from '../images/banner1.png'
import Banner2_1 from '../images/banner2-1.png'
import Banner2_2 from '../images/banner2-2.png'
import Banner2_3 from '../images/banner2-3.png'
import Banner2_4 from '../images/banner2-4.png'
import Banner3 from '../images/banner3.png'
import Banner4 from '../images/banner4.png'
import Mbanner from '../images/Mbanner.png'
import Mbanner1 from '../images/Mbanner1.png'
import Mbanner2 from '../images/Mbanner2.png'
import Mbanner3 from '../images/Mbanner3.png'
import Mbanner4 from '../images/Mbanner4.png'
import {Mobile, PC} from "../components/MediaQuery"
import Fade from 'react-reveal/Fade'

const main = () => {
    const Element = Scroll.Element;

    const directToHome = () => {
        window.location.pathname = '/';
       }
     
       const directToDownload = () => {
         window.location.href = 'https://docs.google.com/presentation/d/1PMJ4jaK2h9L7-MGSvItwmyBlKRDHr9rm9fRxY6VB_eU/edit?usp=sharing'
       }

    return (
        <div className="App">
            <PC>
                <div className='navMFS' onClick={directToHome}>
                    <div className='textMFS'><div className='textMFS2'>MFS</div>페이지로 넘어가기 ></div>
                </div>
                <HeaderNav />
                <div className='banner'>
                    <div className='bannerImage'>
                        <div className='bannerBox'>
                        <Fade bottom distance='2vw'>
                            <div className='bannerT'>아임박스는 스마트 물류 솔루션입니다</div>   
                        </Fade>
                        <Fade bottom distance='2vw' delay={200}>
                            <div className='bannerT2'>이커머스 셀러를 위한 고객 맞춤형 물류 솔루션</div>
                            <div className='bannerT2'>완벽한 풀필먼트 서비스를 제공합니다</div> 
                        </Fade>
                        </div>
                    </div>
                    
                </div>
                    <Element className='service' name="service">
                        <Fade bottom distance='2vw'>
                            <div className='bannerText'>풀필먼트 서비스</div>
                            <img src={Banner1} alt='' className='bannerImage1'/>
                        </Fade>
                        <Fade bottom distance='2vw'>
                            <div className='banner2Box'>
                                <img src={Banner2_1} alt='' className='bannerImage2'/>
                                <img src={Banner2_2} alt='' className='bannerImage2'/>
                                <img src={Banner2_3} alt='' className='bannerImage2'/>
                                <img src={Banner2_4} alt='' className='bannerImage2'/>
                            </div>
                        </Fade>
                    </Element>
                    <Element className='system' name="system">
                        <Fade bottom distance='2vw'>
                            <img src={Banner3} alt='' className='bannerImage3'/>
                        </Fade>
                        <Fade bottom distance='2vw'>
                            <img src={Banner4} alt='' className='bannerImage4'/>
                        </Fade>
                    </Element>
                <Footer />
                <div className='navDownload' onClick={directToDownload}>
                    <div className='download'>여기를 클릭해서 </div>
                    <div className='download2'>서비스 소개서</div>
                    <div className='download'>를 다운받아보세요</div>
                </div>
            </PC>
            <Mobile>
                <div className='MnavMFS' onClick={directToHome}>
                    <div className='MtextMFS'><div className='MtextMFS2'>MFS</div>페이지로 넘어가기 ></div>
                </div>
                <MHeader />
                <div className='Mbanner'>
                    <div className='MbannerImage'>
                        <div className='MbannerBox'>
                        <Fade bottom distance='2vw'>
                            <div style={{marginBottom:"7vw"}}>
                                <div className='MbannerT'>아임박스는</div>
                                <div className='MbannerT'>스마트 물류 솔루션입니다</div>
                            </div>
                        </Fade>
                        <Fade bottom distance='2vw' delay={200}>
                            <div className='MbannerT2'>이커머스 셀러를 위한 고객 맞춤형 물류 솔루션</div>
                            <div className='MbannerT2'>완벽한 풀필먼트 서비스를 제공합니다</div> 
                        </Fade>
                        </div>
                    </div>
                </div>
                <Element className='service' name="service">
                    <Fade bottom distance='2vw'>
                    <img src={Mbanner1} alt='' className='MbannerImage1'/>
                    </Fade>
                    <Fade bottom distance='2vw'>
                        <div>
                            <img src={Banner2_1} alt='' className='MbannerImage2'/>
                            <img src={Banner2_2} alt='' className='MbannerImage2'/>
                            <img src={Banner2_3} alt='' className='MbannerImage2'/>
                            <img src={Banner2_4} alt='' className='MbannerImage2'/>
                        </div>
                    </Fade>
                </Element>
                <Element className='Msystem' name="system">
                    <Fade bottom distance='2vw'>
                        <img src={Mbanner3} alt='' className='MbannerImage3'/>
                    </Fade>
                    <Fade bottom distance='2vw'>
                        <img src={Mbanner4} alt='' className='MbannerImage4'/>
                    </Fade>
                </Element>
                <MFooter />
                <div className='MnavDownload' onClick={directToDownload}>
                    <div className='Mdownload'>여기를 클릭해서 </div>
                    <div className='Mdownload2'>서비스소개서 다운</div>
                    <div className='Mdownload'>받아보세요</div>
                </div>
            </Mobile>
        </div>
    );
};

export default main;