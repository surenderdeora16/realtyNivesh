'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import person from "../assets/images/705febab1eba783bdb74e0f6f6db3a90.png";
import person2 from "../assets/images/servicepartnerbord2.png";

import Image from 'next/image';

function BoardMember() {

    const [viewMember, setViewMember] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setViewMember(prev => (prev === 0 ? 1 : 0));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    let memberData = [
        {
            name: "Pawan kumar",
            picture: person,
            post: "Founder and Managing Partner, Realty Nivesh",
        },
        {
            name: "Raman Sharma",
            picture: person2,
            post: "Co-Founder and Partner, Realty Nivesh",
        },

    ]

    return (
        <div className='sectionsGap'>
            <div className=' bg-[#F3F3F3] px-4 xs:px-6 sm:px-16 cmd:px-24'>
                <div className='w-full lg:container mx-auto lg:py-16 py-5 flex justify-between flex-wrap gap-10 lg:gap-2 '>
                    <div className='xl:w-[314px] w-full'>
                        <p className='uppercase lg:text-[40px] text-[25px] text-center xl:text-start text-[#4B4B4B] font-supera800 lg:leading-[55px]'>
                            MEET OUR
                            board MEMBER
                        </p>

                    </div>
                    <div className='lg:basis-[83%] xl:basis-[50%] w-full'>
                        <div className='flex lg:justify-start justify-center items-center gap-4 lg:mb-9 mb-3 '>
                            <div className='size-[113.34px] rounded-full bg-[#1E6DA4] '>
                                <motion.div key={viewMember}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className='w-[113.34px] h-[113.34px] cursor-pointer rounded-full overflow-hidden translate-y-2 relative'>
                                    <Image
                                        src={memberData[viewMember]?.picture}
                                        alt="board-member"
                                        layout="responsive"
                                        width={113}
                                        height={113}
                                        className='object-cover'
                                        priority={false} loading="lazy"
                                    />
                                </motion.div>

                            </div>
                            <div>
                                <p className='duration-500 text-[20px] text-[#4D4D4E] font-supera800 uppercase'>
                                    {memberData[viewMember]?.name}
                                </p>
                                <p className='duration-500 text-[14px] cxs:text-[15.66px] text-[#686868] font-supera700 uppercase tracking-wide'>{memberData[viewMember]?.post}</p>
                            </div>
                        </div>
                        <div className=' bg-[#1E6DA4] w-[300px] xs:w-[100%] mx-auto  rounded-[9px] lg:px-12 px-5 lg:py-9 py-4 sm:py-5 sm:px-8 font-supera400 tracking-[1.2px] md:tracking-wide text-[12px] sm:text-[13px] md:text-[15px] lg:text-[17px] text-white mt-5 lg:mt-0'>
                            <p className='duration-1000 flex flex-col gap-y-4'>{memberData[viewMember]?.name == 'Pawan kumar' &&
                                <span>
                                    Pawan Kumar, an <b>MBA</b> graduate from <b>Symbiosis Pune</b>, brings a wealth of experience from his time serving <b>Fortune 500 companies</b> as a business analyst and marketing expert. With a keen understanding of market dynamics and customer behavior, Pawan has successfully transitioned into the real estate industry, where he has been providing <b> expert real estate services for over 15 years.</b>
                                </span>}
                                {memberData[viewMember]?.name == 'Pawan kumar' &&
                                    <span className='mt-4'>
                                        With a mission to deliver the <b> best real estate buying experience</b>, Pawan focuses on ensuring his clients get the <b>best deals at the lowest prices</b>, all while helping them invest their <b> hard-earned money </b> in the <b> right location, builder, and project </b> that perfectly fulfills their needs. His deep understanding of the real estate market, combined with a commitment to <b> transparency </b> and <b> customer satisfaction</b>, makes him a trusted advisor in the industry.
                                    </span>}
                            </p>
                            <p className='duration-1000 flex flex-col gap-y-2'>{memberData[viewMember]?.name == 'Raman Sharma' &&
                                <span>
                                    With over <b>15 years of experience </b> in real estate, Raman Sharma has an impressive background in <b> Marketing & Sales</b>, holding an <b> MBA from Kurukshetra University</b>. Before venturing into real estate, Raman worked with renowned firms like <b> CRISIL </b> and <b>ICRA</b>, gaining valuable insights into market dynamics and financial analysis.
                                </span>}
                                {memberData[viewMember]?.name == 'Raman Sharma' &&
                                    <span className='mt-4'>
                                        Raman transitioned into the real estate sector as a <b> Business Head</b>, where he successfully led teams and sold both <b>residential and commercial properties</b>. At <strong>Realty Nivesh</strong>, Raman is committed to providing customers with <b> fair dealings </b> and <b> honest services</b>, ensuring that every client experiences transparency and <b> complete satisfaction</b> in their real estate journey. His expertise and customer-first approach make him a trusted leader in the industry.
                                    </span>}
                            </p>
                        </div>
                    </div>
                    <div className='lg:basis-[5%] w-full lg:space-y-4 lg:block flex  lg:justify-between justify-center gap-x-5 cxs:gap-x-6'>
                        {
                            memberData.map((item, index) => (
                                <div key={index} className={` lg:size-[132px] cursor-pointer size-[100px]  rounded-full grid place-items-center ${viewMember == index ? "border-[3px] border-[#1E6DA4] duration-200" : "duration-200"}`} onClick={() => setViewMember(index)}>
                                    <div className='lg:w-[112px] lg:h-[112px] w-[90px] h-[90px] rounded-full overflow-hidden relative'>
                                        <Image
                                            src={item?.picture}
                                            alt=""
                                            layout="responsive"
                                            width={112}
                                            height={112}
                                            className='object-cover object-top'
                                            priority={false} loading="lazy"
                                        />
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardMember
