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
import Icon5 from "../assets/images/WhatWeDo5.png";
import Icon6 from "../assets/images/WhatWeDo6.png";

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
                <div className=' md:px-7 lg:px-3 lg:w-[70%]  w-full  h-[640px] cxs:h-[680px]  md:h-[500px] lg:h-full bg-[#1E6DA4] py-4 md:pt-5 lg:pt-5 md:pb-1 lg:pb-14 grid place-items-start gap-y-0 md:gap-y-0  '>
                    <div className='text-center md:bg-transparent lg:pb-0 w-full justify-center'>
                        <h2 className='text-[#fff] md:text-white cmd:text-[35px] lg:text-[40px] text-[23px] px-2 font-supera800 uppercase'>
                            What We Do
                        </h2>
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
                                    <Image className='object-contain' src={Icon1} alt="" />
                                </div>
                                <p className='  lg:text-[14px] 2xl:text-[17px] text-[11px] bxxs:text-[14px] xs:text-[15px]  font-supera700 lg:leading-[9.24px] text-[#FFFFFF] '>
                                    Real Estate Consultation
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:max-w-[461px] 3xl:max-w-[95%] whitespace-nowrap'>
                            <div className='w-full capitalize tracking-wide border-b border-b-[#378DC9] relative ps-2 py-2 xs:py-4 lg:ps-1 flex justify-start items-center  gap-3 cxs:gap-2 xl:gap-5'>
                                <div className='max-w-[34px] cxs:max-auto cxs:w-[28px] h-[25px] cxs:h-[18px] lg:w-[36px] lg:h-[26px] xl:w-[46px] xl:h-[37px]   z-[1]'>
                                    <Image className='object-contain' src={Icon2} alt="" />
                                </div>
                                <p className='  lg:text-[14px] 2xl:text-[17px] text-[11px] bxxs:text-[14px] xs:text-[15px]  font-supera700 lg:leading-[9.24px] text-[#FFFFFF] '>
                                    Property Investments
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:max-w-[461px] 3xl:max-w-[95%] whitespace-nowrap'>
                            <div className='w-full capitalize tracking-wide border-b border-b-[#378DC9] relative ps-2 py-2 xs:py-4 lg:ps-1 flex justify-start items-center  gap-3 cxs:gap-2 xl:gap-5'>
                                <div className='max-w-[34px] cxs:max-auto cxs:w-[28px] h-[25px] cxs:h-[18px] lg:w-[36px] lg:h-[26px] xl:w-[46px] xl:h-[37px]   z-[1]'>
                                    <Image className='object-contain' src={Icon3} alt="" />
                                </div>
                                <p className='  lg:text-[14px] 2xl:text-[17px] text-[11px] bxxs:text-[14px] xs:text-[15px]  font-supera700 lg:leading-[9.24px] text-[#FFFFFF] '>
                                    Plot & Apartment Sales
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:max-w-[461px] 3xl:max-w-[95%] whitespace-nowrap'>
                            <div className='w-full capitalize tracking-wide border-b border-b-[#378DC9] relative ps-2 py-2 xs:py-4 lg:ps-1 flex justify-start items-center  gap-3 cxs:gap-2 xl:gap-5'>
                                <div className='max-w-[34px] cxs:max-auto cxs:w-[28px] h-[25px] cxs:h-[18px] lg:w-[36px] lg:h-[26px] xl:w-[46px] xl:h-[37px]   z-[1]'>
                                    <Image className='object-contain' src={Icon4} alt="" />
                                </div>
                                <p className='  lg:text-[14px] 2xl:text-[17px] text-[11px] bxxs:text-[14px] xs:text-[15px]  font-supera700 lg:leading-[9.24px] text-[#FFFFFF] '>
                                    Leasing & Renting Assistance
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:max-w-[461px] 3xl:max-w-[95%] whitespace-nowrap'>
                            <div className='w-full capitalize tracking-wide border-b border-b-[#378DC9] relative ps-2 py-2 xs:py-4 lg:ps-1 flex justify-start items-center  gap-3 cxs:gap-2 xl:gap-5'>
                                <div className='max-w-[34px] cxs:max-auto cxs:w-[28px] lg:w-[36px] xl:w-[46px]  z-[1]'>
                                    <Image className='object-contain' src={Icon5} alt="" />
                                </div>
                                <p className='whitespace-normal  lg:text-[14px] 2xl:text-[17px] text-[11px] bxxs:text-[14px] xs:text-[15px]  font-supera700  text-[#FFFFFF] '>
                                    Real estate specialized digital marketing services
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:max-w-[461px] 3xl:max-w-[95%] whitespace-nowrap'>
                            <div className='w-full capitalize tracking-wide border-b border-b-[#378DC9] relative ps-2 py-2 xs:py-4 lg:ps-1 flex justify-start items-center  gap-3 cxs:gap-2 xl:gap-5'>
                                <div className='max-w-[34px] cxs:max-auto cxs:w-[28px] h-[25px] cxs:h-[18px] lg:w-[36px] lg:h-[26px] xl:w-[46px] xl:h-[37px]   z-[1]'>
                                    <Image className='object-contain h-8 -mt-1 lg:mt-0' src={Icon6} alt="" />
                                </div>
                                <p className='w-full whitespace-normal lg:text-[14px] 2xl:text-[17px] text-[11px] bxxs:text-[14px] xs:text-[15px]  font-supera700 text-[#FFFFFF] '>
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
