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
            <div className='sectionsGap mx-2 cxs:mx-4 md:mx-5 lg:mx-24'>
                <div className={`bg-[#FD6502] lg:container h-[50px] sm:h-[80px] cmd:h-[100px] mx-auto rounded-[12px] cmd:rounded-[19px] flex justify-between items-center  px-2 cxs:px-5 md:px-10  ${className} `}>
                    <p className="lg:text-[36px] text-[12px] xs:text-[15px] cxs:text-[20px] sm:text-[24px] md:text-[28px] font-supera600 lg:leading-[49px] text-white capitalize">
                        ready to start your real estate journey? 
                    </p>
                    <div onClick={() => { handleOpenModal() }}>
                        <button
                            type="button"
                            className="rounded-full uppercase bg-[#11508F] text-white  sm:px-6 px-2 py-2 lg:text-[16px] text-[8px] xs:text-[9px] cxs:text-[10px] font-supera700 sm:text-[12px] md:text-[14px] "
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
