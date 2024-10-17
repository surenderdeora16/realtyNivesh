'use client'
import React, { useState } from 'react'
import EnquiryForm from './common/EnquiryForm';

function Connect_Banner({ className }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Enable scrolling
    };

    return (
        <>
            {isModalOpen && <EnquiryForm heading={'We Are Excited To Meet You'} formType={'enquiry'} isOpen={isModalOpen} onClose={handleCloseModal} eventSource="Call To Action" />}
            <div className='sectionsGap w-full px-2'>
                <div className={`bg-[#FD6502] w-full cmd:w-[95%] 2xl:container h-[50px] sm:h-[80px] cmd:h-[100px] mx-auto rounded-[12px] cmd:rounded-[19px] flex justify-between items-center  px-2 cxs:px-4 cmd:px-10  ${className} `}>
                    <p className="2xl:text-[36px] text-[12px] xs:text-[15px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-supera600 lg:leading-[49px] text-white capitalize">
                        ready to start your real estate journey? 
                    </p>
                    <div onClick={() => { handleOpenModal() }}>
                        <button
                            type="button"
                            className="rounded-full uppercase bg-[#11508F] text-white  sm:px-6 px-2 py-2 lg:text-[16px] text-[8px] xs:text-[9px] cxs:text-[10px] font-supera700 sm:text-[12px] md:text-[14px] tracking-wider"
                        >
                            Book a free consultation
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Connect_Banner
