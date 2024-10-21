'use client'

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import crossIcon from '../../assets/images/crossmobilecontactus.svg'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css'
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input'
import EnquiryForm from './EnquiryForm';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3).max(50),
    email: Yup.string().email('Invalid email address').required('Email is required').min(5).max(50),
    mobile: Yup.string().min(10, 'Must be at least 10 digits').required('Mobile number is required'),
    message: Yup.string().required('Message is required').min(10).max(200),
});

const AppBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [explore, setExplore] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Enable scrolling
    };

    const handleUserInteraction = useCallback(() => {
        if (!explore) setIsVisible(true);
    }, [explore])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!explore) {
                setIsVisible(false);
            }
        }, 6000);

        return () => clearTimeout(timer);
    }, [isVisible, explore]);

    useEffect(() => {
        window?.addEventListener('mousemove', handleUserInteraction);
        window?.addEventListener('scroll', handleUserInteraction);

        const timer = setTimeout(() => {
            if (!explore) {
                setIsVisible(false);
            }
        }, 6000);

        return () => {
            window?.removeEventListener('mousemove', handleUserInteraction);
            window?.removeEventListener('scroll', handleUserInteraction);
            clearTimeout(timer);
        };
    }, [isVisible, handleUserInteraction, explore]);

    const handleWhatsAppClick = () => {
        const phoneNumber = '9988010405';
        const message = 'Hi I am interested in *Sushma Group Project*. Please send more detail';

        const encodedMessage = encodeURIComponent(message);

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window?.open(whatsappUrl, '_blank');
    };
    return (
        <>
            {isModalOpen && <EnquiryForm heading={'We Are Excited To Meet You'} formType={'bookSiteVisit'} isOpen={isModalOpen} onClose={handleCloseModal} eventSource="Book A Site Form (Mobile)" />}
            <div className={`${isVisible ? 'translate-y-[0%] duration-1000 opacity-100' : 'translate-y-[140%] opacity-0 duration-1000'} fixed bottom-1.5 w-full z-50 flex sm:hidden justify-center`}>
                <div className="relative justify-center items-center w-full px-3">
                    <div className='relative  table mx-auto w-full max-w-[461px] '>
                        <svg className='w-full ' viewBox="0 0 461 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M188.752 10.1253C185.653 4.61766 180.256 0.366638 173.936 0.366638H10.7858C5.28923 0.366638 0.833374 4.82249 0.833374 10.3191V50.6693C0.833374 56.1659 5.28922 60.6217 10.7858 60.6217H450.881C456.378 60.6217 460.833 56.1659 460.833 50.6693V10.3191C460.833 4.8225 456.378 0.366638 450.881 0.366638H288.202C281.882 0.366638 276.485 4.61766 273.386 10.1253C265.011 25.0091 249.198 35.0449 231.069 35.0449C212.94 35.0449 197.127 25.0091 188.752 10.1253Z" fill="#C1E6FF" />
                        </svg>

                        <div className='w-full h-full absolute left-0 bottom-0 flex text-[#154A6F]'>
                            <div onClick={() => window.location.href = "tel:918968066698"} className='w-1/3 relative pt-1.5 text-center text-[11px] whitespace-nowrap xs:text-[12px] font-supera700 tracking-widest flex flex-col justify-center items-center'>
                                <div className='absolute bottom-0.5 xs:bottom-1 flex flex-col gap-1 xs:gap-1.5'>
                                    <FaPhoneAlt className='text-[14px] xs:text-[16px] mx-auto font-extrabold' />
                                    Call
                                </div>
                            </div>
                            <div className=' relative  w-1/3 pt-5 ml-1 text-center text-[11px] whitespace-nowrap xs:text-[12px] font-supera700 tracking-widest flex flex-col justify-center items-center'>
                                <div className={` ${explore ? 'opacity-100 z-40 duration-[1ms] backdrop-blur-sm bottom-[-12%]  left-0' : 'duration-75 left-[100%] opacity-0 z-10  '} overlay-animation  fixed  overflow-hidden h-screen w-screen  bg-[#000000aa] `}>
                                    <div className='w-full h-full flex justify-center items-end py-9'>
                                        <div className={`${explore ? 'w-[200px] h-[200px] opacity-100 duration-500' : 'opacity-0 w-[55px] h-[55px] duration-500'}  relative rotate-[24deg] flex justify-between items-center rounded-full`}>
                                            <Link onClick={() => setExplore(false)} href="#rcih" className='rotate-[-24deg] absolute top-[-10%] left-[18%] w-[70px] h-[70px] bg-[#fff] rounded-full flex justify-center items-center'>
                                                <div className='w-full h-full rounded-full relative flex justify-center items-center'>
                                                    <svg className='mx-auto w-[35px]' viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.01833 7.57243C7.72073 7.57243 7.43532 7.69065 7.22489 7.90109C7.01445 8.11152 6.89623 8.39693 6.89623 8.69454V13.931C6.89623 14.5504 7.39893 15.0531 8.01833 15.0531H17.6505C18.0397 14.0596 18.7984 13.2554 19.7675 12.8089H9.14044V9.81664H22.6057V12.4349H24.8499V8.69454C24.8499 8.39693 24.7317 8.11152 24.5212 7.90109C24.3108 7.69065 24.0254 7.57243 23.7278 7.57243H8.01833ZM15.125 17.6714V18.0454C14.6552 18.6708 14.3769 19.4473 14.3769 20.2896V27.0222H3.52992C3.23232 27.0222 2.9469 26.904 2.73647 26.6936C2.52603 26.4831 2.40781 26.1977 2.40781 25.9001V5.67533C1.8374 5.34596 1.3916 4.83758 1.13955 4.22903C0.887499 3.62049 0.843287 2.94578 1.01377 2.30955C1.18425 1.67331 1.5599 1.11111 2.08245 0.710117C2.60501 0.309128 3.24527 0.0917648 3.90395 0.0917358H27.8422C28.5009 0.0917648 29.1411 0.309128 29.6637 0.710117C30.1862 1.11111 30.5619 1.67331 30.7324 2.30955C30.9028 2.94578 30.8586 3.62049 30.6066 4.22903C30.3545 4.83758 29.9087 5.34596 29.3383 5.67533V13.376C28.7007 12.8483 27.9184 12.5259 27.0941 12.4513V6.07629H4.65202V24.778H6.89623V17.6714C6.89623 17.3738 7.01445 17.0884 7.22489 16.8779C7.43532 16.6675 7.72073 16.5493 8.01833 16.5493H14.0029C14.3005 16.5493 14.5859 16.6675 14.7963 16.8779C15.0068 17.0884 15.125 17.3738 15.125 17.6714ZM3.15588 3.08401C3.15588 3.28241 3.2347 3.47269 3.37499 3.61298C3.51528 3.75327 3.70555 3.83208 3.90395 3.83208H27.8422C28.0406 3.83208 28.2309 3.75327 28.3711 3.61298C28.5114 3.47269 28.5902 3.28241 28.5902 3.08401C28.5902 2.88561 28.5114 2.69534 28.3711 2.55505C28.2309 2.41476 28.0406 2.33594 27.8422 2.33594H3.90395C3.70555 2.33594 3.51528 2.41476 3.37499 2.55505C3.2347 2.69534 3.15588 2.88561 3.15588 3.08401ZM12.8808 24.778V18.7935H9.14044V24.778H12.8808ZM18.8653 18.0454H18.1173C17.5221 18.0454 16.9512 18.2818 16.5304 18.7027C16.1095 19.1236 15.8731 19.6944 15.8731 20.2896V22.5338H19.6134V22.1598C19.6134 21.8622 19.7316 21.5768 19.9421 21.3663C20.1525 21.1559 20.4379 21.0377 20.7355 21.0377C21.0331 21.0377 21.3185 21.1559 21.529 21.3663C21.7394 21.5768 21.8576 21.8622 21.8576 22.1598V22.5338H26.346V22.1598C26.346 21.8622 26.4643 21.5768 26.6747 21.3663C26.8851 21.1559 27.1705 21.0377 27.4681 21.0377C27.7657 21.0377 28.0512 21.1559 28.2616 21.3663C28.472 21.5768 28.5902 21.8622 28.5902 22.1598V22.5338H32.3306V20.2896C32.3306 19.6944 32.0941 19.1236 31.6733 18.7027C31.2524 18.2818 30.6816 18.0454 30.0864 18.0454H29.3383V16.5493C29.3383 15.8549 29.0625 15.1889 28.5714 14.6979C28.0804 14.2069 27.4145 13.931 26.7201 13.931H21.4836C20.7892 13.931 20.1232 14.2069 19.6322 14.6979C19.1412 15.1889 18.8653 15.8549 18.8653 16.5493V18.0454ZM21.1096 16.5493C21.1096 16.4501 21.149 16.3549 21.2191 16.2848C21.2892 16.2146 21.3844 16.1752 21.4836 16.1752H26.7201C26.8193 16.1752 26.9144 16.2146 26.9846 16.2848C27.0547 16.3549 27.0941 16.4501 27.0941 16.5493V18.0454H21.1096V16.5493ZM15.8731 27.7703V24.778H19.6134V25.9001C19.6134 26.1977 19.7316 26.4831 19.9421 26.6936C20.1525 26.904 20.4379 27.0222 20.7355 27.0222C21.0331 27.0222 21.3185 26.904 21.529 26.6936C21.7394 26.4831 21.8576 26.1977 21.8576 25.9001V24.778H26.346V25.9001C26.346 26.1977 26.4643 26.4831 26.6747 26.6936C26.8851 26.904 27.1705 27.0222 27.4681 27.0222C27.7657 27.0222 28.0512 26.904 28.2616 26.6936C28.472 26.4831 28.5902 26.1977 28.5902 25.9001V24.778H32.3306V27.7703C32.3306 28.3655 32.0941 28.9363 31.6733 29.3572C31.2524 29.7781 30.6816 30.0145 30.0864 30.0145H18.1173C17.5221 30.0145 16.9512 29.7781 16.5304 29.3572C16.1095 28.9363 15.8731 28.3655 15.8731 27.7703Z" fill="#1E6DA4" />
                                                    </svg>
                                                    <h6 className='uppercase text-[13px] font-supera600 text-[#fff] text-center tracking-[1px] absolute top-[110%] left-[50%] translate-x-[-50%]'>Featured <br /> Projects</h6>
                                                </div>
                                            </Link>
                                            {/* <div className='rotate-[-24deg] absolute top-[-14%] left-[35%] w-[55px] h-[55px] bg-[#fff] rounded-full'>
                                            <div className='w-full h-full rounded-full relative'>
                                                <h6 className='uppercase text-[13px] font-supera600 text-[#fff] text-center tracking-[1px] absolute top-[110%] left-[50%] translate-x-[-50%]'>Price</h6>
                                            </div>
                                        </div> */}
                                            <Link onClick={() => setExplore(false)} href="#our-association" className='rotate-[-24deg] absolute top-[-6%] left-[82%] w-[70px] h-[70px] bg-[#fff] rounded-full flex justify-center items-center'>
                                                <div className='w-full h-full rounded-full relative flex justify-center items-center'>
                                                    <svg className='mx-auto w-[35px]' viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.22406 26.8176H28.221M5.93466 1.16907H16.0592C17.1333 1.16907 18.1633 1.59571 18.9227 2.35515C19.6821 3.11459 20.1088 4.1446 20.1088 5.21861V26.8162H1.88512V5.21861C1.88512 4.1446 2.31177 3.11459 3.0712 2.35515C3.83064 1.59571 4.86066 1.16907 5.93466 1.16907Z" stroke="#1E6DA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.94748 6.56989H15.0466M6.94748 11.9693H15.0466M20.1074 9.94377H22.8071C23.3391 9.94339 23.866 10.0479 24.3577 10.2512C24.8493 10.4545 25.2961 10.7528 25.6724 11.1288C26.0488 11.5049 26.3473 11.9514 26.551 12.4429C26.7547 12.9345 26.8596 13.4613 26.8596 13.9933V26.8176M9.66031 17.3687H12.36C12.897 17.369 13.4119 17.5823 13.7918 17.9617C14.1718 18.3412 14.3858 18.8557 14.387 19.3927V26.8176H7.63627V19.3927C7.63627 18.8559 7.84951 18.3411 8.22909 17.9615C8.60868 17.5819 9.1235 17.3687 9.66031 17.3687Z" stroke="#1E6DA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <h6 className='uppercase text-[13px] font-supera600 text-[#fff] text-center tracking-[1px] absolute top-[110%] left-[50%] translate-x-[-50%]'>Our <br /> Association</h6>
                                                </div>
                                            </Link>
                                            <Link onClick={() => setExplore(false)} href="#what-we-do" className='rotate-[-24deg] absolute top-[40%] left-[-24%] w-[70px] h-[70px] bg-[#fff] rounded-full flex justify-center items-center'>
                                                <div className=' w-full h-full rounded-full relative flex justify-center items-center'>
                                                    <svg className='mx-auto w-[35px]' viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M28.6732 27.3528H1.40045M1.40045 12.3528L12.4814 3.48918C13.2067 2.90894 14.1079 2.59283 15.0368 2.59283C15.9657 2.59283 16.8669 2.90894 17.5923 3.48918L28.6732 12.3528M19.8095 4.85281V2.12554C19.8095 1.94471 19.8814 1.77129 20.0092 1.64343C20.1371 1.51556 20.3105 1.44373 20.4913 1.44373H23.9004C24.0813 1.44373 24.2547 1.51556 24.3826 1.64343C24.5104 1.77129 24.5823 1.94471 24.5823 2.12554V8.94372M4.12772 27.3528V10.3074M25.9459 27.3528V10.3074" stroke="#1E6DA4" strokeWidth="2" strokeLinecap="round" />
                                                        <path d="M19.1277 27.3528V20.5346C19.1277 18.6064 19.1277 17.6423 18.5277 17.0437C17.9305 16.4437 16.9664 16.4437 15.0368 16.4437C13.1073 16.4437 12.1446 16.4437 11.5459 17.0437C10.9459 17.641 10.9459 18.6051 10.9459 20.5346V27.3528M17.7641 10.3073C17.7641 11.0307 17.4768 11.7244 16.9653 12.2358C16.4538 12.7473 15.7601 13.0346 15.0368 13.0346C14.3135 13.0346 13.6198 12.7473 13.1084 12.2358C12.5969 11.7244 12.3096 11.0307 12.3096 10.3073C12.3096 9.58403 12.5969 8.89034 13.1084 8.37888C13.6198 7.86742 14.3135 7.58008 15.0368 7.58008C15.7601 7.58008 16.4538 7.86742 16.9653 8.37888C17.4768 8.89034 17.7641 9.58403 17.7641 10.3073Z" stroke="#1E6DA4" strokeWidth="2" />
                                                    </svg>
                                                    <h6 className=' uppercase text-[13px] font-supera600 text-[#fff] text-center tracking-[1px] absolute top-[110%] left-[50%] translate-x-[-50%]'>Our Services</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => setExplore(!explore)} className={`${explore ? 'rotate-180 duration-300' : 'rotate-0 duration-500'} flex justify-center items-center w-[55px] xs:w-[62px] h-[55px] xs:h-[62px] absolute bottom-[25px] xs:bottom-[32px] cxs:bottom-[34px] left-[50%] z-50 translate-x-[-55%] rounded-full bg-[#1e6da4]`}>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="compass-icon compass-rotate-backward"><path d="M4.09789 22.9004L16.2666 17.0147C16.4334 16.9485 16.583 16.8488 16.7155 16.7155C16.8488 16.5822 16.9653 16.4326 17.065 16.2666L22.9004 4.09669C23.0664 3.76473 23.0249 3.47385 22.7759 3.22408C22.5261 2.9751 22.2353 2.93361 21.9033 3.09959L9.73338 8.93498C9.5674 9.03473 9.41777 9.15124 9.2845 9.2845C9.15124 9.41697 9.05149 9.5666 8.98525 9.73338L3.09959 21.9021C2.93361 22.2349 2.9751 22.5261 3.22408 22.7759C3.47385 23.0249 3.76512 23.0664 4.09789 22.9004ZM13.0251 14.9703C12.4602 14.9703 11.9861 14.7791 11.6031 14.3969C11.2209 14.0139 11.0297 13.5398 11.0297 12.9749C11.0297 12.4099 11.2209 11.9359 11.6031 11.5528C11.9861 11.1706 12.4602 10.9795 13.0251 10.9795C13.5901 10.9795 14.0641 11.1706 14.4472 11.5528C14.8294 11.9359 15.0205 12.4099 15.0205 12.9749C15.0205 13.5398 14.8294 14.0139 14.4472 14.3969C14.0641 14.7791 13.5901 14.9703 13.0251 14.9703Z" fill="white"></path></svg>
                                </div>
                                <span onClick={() => { handleOpenModal() }} className=' absolute pb-0.5 xs:pb-1 bottom-0 self-center capitalize'>Book a site visit </span>
                            </div>
                            <div onClick={() => handleWhatsAppClick()} className='w-1/3 relative pt-1 text-center text-[11px] whitespace-nowrap xs:text-[12px] font-supera700 tracking-widest flex flex-col justify-center items-center'>
                                <div className='absolute bottom-0.5 xs:bottom-1 flex flex-col gap-1 xs:gap-1.5'>
                                    <FaWhatsapp className='text-lg xl:text-xl font-extrabold mx-auto' />
                                    Whatsapp
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppBar;
