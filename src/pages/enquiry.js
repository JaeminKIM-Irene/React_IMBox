import React, {useState} from 'react';
import './enquiry.css'
import {Mobile, PC} from "../components/MediaQuery"
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import MHeader from '../components/MHeader'
import MFooter from '../components/MFooter'
import Modal from '../components/Modal'
import Mmodal from '../components/Mmodal'
import Enbanner from '../images/enBan.png'
import Submit from '../images/submitB.png'
import Menbanner from '../images/MenBan.png'
import Msubmit from '../images/MsubmitB.png'

const Enquiry = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [urls, setUrls] = useState('');
    const [list, setList] = useState('');
    const [color, setColor] = useState('');
    const [number, setNumber] = useState('');
    const [box, setBox] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const directToHome = () => {
        window.location.pathname = '/';
       }

    const nameC = (e) => {
        setName(e.target.value);
    }
    const emailC = (e) => {
        setEmail(e.target.value);
    }
    const contactC = (e) => {
        setContact(e.target.value);
    }
    const urlsC = (e) => {
        setUrls(e.target.value);
    }
    const listC = (e) => {
        setList(e.target.value);
    }
    const colorC = (e) => {
        setColor(e.target.value);
    }
    const numberC = (e) => {
        setNumber(e.target.value);
    }
    const boxC = (e) => {
        e.target.checked ? setBox(true) : setBox(false);
    }
    const submitC = (e) => {
        if (box == false) {
            alert('개인정보처리에 동의해주세요.')
        }
        else {
            setModalOpen(true);
        }
    }
    const closeModal = () => {
        setModalOpen(false);
    }



    return (
        <div className='enquiryBox'>
            <PC>
                <div className='navMFS' onClick={directToHome}>
                    <div className='textMFS'><div className='textMFS2'>MFS</div>페이지로 넘어가기 ></div>
                </div>
                <HeaderNav />
                <img src={Enbanner} alt="" className="enBanner" />
                <div className='inputBox'>
                    <div className='inputCol1'>
                    <div className='inTitle'>기본정보</div>
                    <input onChange={nameC} type="text" className='inputText' value={name} placeholder='회사명/담당자이름'/>
                    <input onChange={emailC} type="text" className='inputText' value={email} placeholder='담당자 이메일'/>
                    <input onChange={contactC} type="text" className='inputText' value={contact} placeholder='담당자 연락처'/>
                    <input onChange={urlsC} type="text" className='inputText' value={urls} placeholder='대표 판매처 URL'/>
                    </div>
                    <div className='inputCol2'>
                        <div className='inTitle'>상품정보</div>
                        <input onChange={listC} type="text" className='inputText' value={list} placeholder='상품 품목'/>
                        <input onChange={colorC} type="text" className='inputText' value={color} placeholder='색상, 사이즈, 기종 등을 별개로 구분한 품종수'/>
                        <input onChange={numberC} type="text" className='inputText' value={number} placeholder='상품 월 택배 출고건수'/>
                        <div className='clickable'>
                            <input onChange={boxC} className="checkb" type='checkbox' className='checkbox' id='agree'/> 
                            <label className="checklab" for='agree'>개인정보처리 동의 (필수)</label>
                            <img src={Submit} alt="" className="submitBut" onClick={submitC}/>
                            <Modal open={modalOpen} close={closeModal} >
                                <p>견적 신청이 완료되었습니다.</p>
                                <p>최대한 빠르게 답변드리도록 하겠습니다.</p>
                            </Modal>
                        </div>
                    </div>
                </div>
                <Footer />
            </PC>
            <Mobile>
                <div className='MnavMFS' onClick={directToHome}>
                    <div className='MtextMFS'><div className='MtextMFS2'>MFS</div>페이지로 넘어가기 ></div>
                </div>
                <MHeader />
                <img src={Menbanner} alt="" className="MenBanner" />
                <div className='MinputBox'>
                    <div className='MinputCol1'>
                        <div className='MinTitle'>기본정보</div>
                        <input onChange={nameC} type="text" className='MinputText' value={name} placeholder='회사명/담당자이름'/>
                        <input onChange={emailC} type="text" className='MinputText' value={email} placeholder='담당자 이메일'/>
                        <input onChange={contactC} type="text" className='MinputText' value={contact} placeholder='담당자 연락처'/>
                        <input onChange={urlsC} type="text" className='MinputText' value={urls} placeholder='대표 판매처 URL'/>
                    </div>
                    <div className='MinputCol2'>
                        <div className='Minputboxes'>
                            <div className='MinTitle'>상품정보</div>
                            <input onChange={listC} type="text" className='MinputText' value={list} placeholder='상품 품목'/>
                            <input onChange={colorC} type="text" className='MinputText' value={color} placeholder='색상, 사이즈, 기종 등을 구분한 품종수'/>
                            <input onChange={numberC} type="text" className='MinputText' value={number} placeholder='상품 월 택배 출고건수'/>
                            <input onChange={boxC} className="Mcheckb" type='checkbox' className='checkbox' id='agree' /> 
                            <label className="Mchecklab" for='agree'>개인정보처리 동의 (필수)</label>
                        </div>
                        <div className='Mclickable'>
                            <img src={Msubmit} alt="" className="MsubmitBut" onClick={submitC}/>
                        </div>
                        <Mmodal open={modalOpen} close={closeModal} >
                            <p>견적 신청이 완료되었습니다.</p>
                            <p>최대한 빠르게 답변드리도록 하겠습니다.</p>
                        </Mmodal>
                    </div>
                </div>
                <MFooter/>
            </Mobile>
        </div>
    );
};

export default Enquiry;