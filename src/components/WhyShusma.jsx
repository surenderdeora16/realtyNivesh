import React from 'react'
import buildingIcon from "../assets/images/building_icon.png";
// import Icon2 from "../assets/images/whyshusmacinimg.svg";
// import icon3 from "../assets/images/whyshusmacinimg2.svg";
// import icon4 from "../assets/images/whyshusmacinimg4.svg";
import Image from 'next/image';
import Icon1 from "../assets/images/WhatWeDo1.png";
import Icon2 from "../assets/images/WhatWeDo2.png";
import Icon3 from "../assets/images/WhatWeDo3.png";
import Icon4 from "../assets/images/WhatWeDo4.png";

function WhyShusma() {
    return (
        <div id='what-we-do' className='sectionsGap'>
            <div className=' 2xl:w-full flex flex-col-reverse cxs:flex-row justify-between items-start md:items-center h-[690px] md:h-auto lg:h-[500px]'>
                <div className='hidden md:flex lg:w-[30%] md:w-[70%] lg:h-full h-[300px] sm:h-[400px] md:h-[500px]'>
                    <video loop autoPlay style={{ width: '100%', height: '100%' }} className="object-cover object-center" muted>
                        <source src={'/videos/whysushmavideo.mp4'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className=' md:px-7 lg:px-3 lg:w-[70%]  w-full  h-[640px] cxs:h-[680px]  md:h-[500px] lg:h-full md:bg-[#1E6DA4] py-4 md:pt-5 lg:pt-10 md:pb-1 lg:pb-14 grid place-items-start gap-y-0 md:gap-y-0  '>
                    <div className='text-center md:bg-transparent lg:pb-0 w-full justify-center'>
                        <h1 className='text-[#1E6DA4] md:text-white cmd:text-[35px] lg:text-[40px] text-[23px] px-2 font-supera800 uppercase'>
                            What We Do
                        </h1>
                    </div>
                    <div className='mt-3 md:mt-0 flex md:hidden w-full  h-[250px] '>
                        <video loop autoPlay playsInline preload="auto" muted style={{ width: '100%', height: '100%' }} className="object-cover object-center" >
                            <source src={'/videos/whysushmavideo.mp4'} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className=' bg-[#1E6DA4] md:bg-transparent  w-full grid lg:grid-cols-2 grid-cols-1 pb-10 lg:pb-0 gap-y-3 md:gap-y-3 lg:gap-y-5 h-full sm:gap-x-8 overflow-y-auto gap-x-4 lg:gap-x-3 xl:gap-x-10 place-items-center  mb-10 md:my-3 px-2 bxxs:px-5 cxs:px-8 md:px-2 lg:px-1 '>
                        <div className='w-full md:max-w-[461px] 3xl:max-w-[95%] whitespace-nowrap'>
                            <div className='w-full capitalize tracking-wide border-b border-b-[#378DC9] relative ps-2 py-2 xs:py-4 lg:ps-1 flex justify-start items-center  gap-3 cxs:gap-2 xl:gap-5'>
                                <div className='max-w-[30px] cxs:max-auto cxs:w-[28px] h-[25px] cxs:h-[18px] lg:w-[36px] lg:h-[26px] xl:max-w-[60px] xl:h-[35px]   z-[1]'>
                                    <Image className=' h-full' src={Icon1} alt="" />
                                </div>
                                <p className='  lg:text-[14px] 2xl:text-[17px] text-[11px] bxxs:text-[14px] xs:text-[15px]  xl:font-supera700 lg:leading-[9.24px] text-[#FFFFFF] '>
                                    Real Estate Consultation
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:max-w-[461px] 3xl:max-w-[95%] whitespace-nowrap'>
                            <div className='w-full capitalize tracking-wide border-b border-b-[#378DC9] relative ps-2 py-2 xs:py-4 lg:ps-1 flex justify-start items-center  gap-3 cxs:gap-2 xl:gap-5'>
                                <div className='max-w-[34px] cxs:max-auto cxs:w-[28px] h-[25px] cxs:h-[18px] lg:w-[36px] lg:h-[26px] xl:w-[46px] xl:h-[37px]   z-[1]'>
                                    <Image className=' h-full' src={Icon2} alt="" />
                                </div>
                                <p className='  lg:text-[14px] 2xl:text-[17px] text-[11px] bxxs:text-[14px] xs:text-[15px]  xl:font-supera700 lg:leading-[9.24px] text-[#FFFFFF] '>
                                    Property Investments
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:max-w-[461px] 3xl:max-w-[95%] whitespace-nowrap'>
                            <div className='w-full capitalize tracking-wide border-b border-b-[#378DC9] relative ps-2 py-2 xs:py-4 lg:ps-1 flex justify-start items-center  gap-3 cxs:gap-2 xl:gap-5'>
                                <div className='max-w-[34px] cxs:max-auto cxs:w-[28px] h-[25px] cxs:h-[18px] lg:w-[36px] lg:h-[26px] xl:w-[46px] xl:h-[37px]   z-[1]'>
                                    <Image className=' h-full' src={Icon3} alt="" />
                                </div>
                                <p className='  lg:text-[14px] 2xl:text-[17px] text-[11px] bxxs:text-[14px] xs:text-[15px]  xl:font-supera700 lg:leading-[9.24px] text-[#FFFFFF] '>
                                    Plot & Apartment Sales
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:max-w-[461px] 3xl:max-w-[95%] whitespace-nowrap'>
                            <div className='w-full capitalize tracking-wide border-b border-b-[#378DC9] relative ps-2 py-2 xs:py-4 lg:ps-1 flex justify-start items-center  gap-3 cxs:gap-2 xl:gap-5'>
                                <div className='max-w-[34px] cxs:max-auto cxs:w-[28px] h-[25px] cxs:h-[18px] lg:w-[36px] lg:h-[26px] xl:w-[46px] xl:h-[37px]   z-[1]'>
                                    <Image className='w-full h-full' src={Icon2} alt="buildingIcon" />
                                </div>
                                <p className='  lg:text-[14px] 2xl:text-[17px] text-[11px] bxxs:text-[14px] xs:text-[15px]  xl:font-supera700 lg:leading-[9.24px] text-[#FFFFFF] '>
                                    Leasing & Renting Assistance
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:max-w-[461px] 3xl:max-w-[95%] whitespace-nowrap'>
                            <div className='w-full capitalize tracking-wide border-b border-b-[#378DC9] relative ps-2 py-2 xs:py-4 lg:ps-1 flex justify-start items-center  gap-3 cxs:gap-2 xl:gap-5'>
                                <div className='max-w-[34px] cxs:max-auto cxs:w-[28px] lg:w-[36px] xl:w-[46px]  z-[1]'>
                                    <Image className='w-full h-[25px] cxs:h-[18px] lg:h-[26px] xl:h-[37px]' src={Icon3} alt="buildingIcon" />
                                </div>
                                <p className='whitespace-normal  lg:text-[14px] 2xl:text-[17px] text-[11px] bxxs:text-[14px] xs:text-[15px]  xl:font-supera700  text-[#FFFFFF] '>
                                    Real estate specialized digital marketing services
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:max-w-[461px] 3xl:max-w-[95%] whitespace-nowrap'>
                            <div className='w-full capitalize tracking-wide border-b border-b-[#378DC9] relative ps-2 py-2 xs:py-4 lg:ps-1 flex justify-start items-center  gap-3 cxs:gap-2 xl:gap-5'>
                                <div className='max-w-[34px] cxs:max-auto cxs:w-[28px] lg:w-[36px] xl:w-[46px]  z-[1]'>
                                    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 30 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.8138 1.93604H4.8138C3.92975 1.93604 3.0819 2.28722 2.45678 2.91235C1.83166 3.53747 1.48047 4.38531 1.48047 5.26937V31.936C1.48047 32.8201 1.83166 33.6679 2.45678 34.2931C3.0819 34.9182 3.92975 35.2694 4.8138 35.2694H24.8138C25.6979 35.2694 26.5457 34.9182 27.1708 34.2931C27.7959 33.6679 28.1471 32.8201 28.1471 31.936V10.2694L19.8138 1.93604Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.1484 1.93604V8.6027C18.1484 9.48676 18.4996 10.3346 19.1247 10.9597C19.7499 11.5848 20.5977 11.936 21.4818 11.936H28.1484M8.14844 20.2694H11.4818M18.1484 20.2694H21.4818M8.14844 26.936H11.4818M18.1484 26.936H21.4818" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className='w-full whitespace-normal lg:text-[14px] 2xl:text-[17px] text-[11px] bxxs:text-[14px] xs:text-[15px]  xl:font-supera700 text-[#FFFFFF] '>
                                    Strategic Advisory Commercial & Residential Sales
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyShusma
