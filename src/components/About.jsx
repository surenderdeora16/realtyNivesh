"use client"

import React, { useEffect, useRef, useState } from 'react';
import sideImg from "@/assets/images/46f00ea88134fb2e0b90c47f7672bd3e.png";
import Image from 'next/image';

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [readMore, setReadMore] = useState(false)
    const [tapData, setTapData] = useState([
        { count: 0.0, text: "customers satisfaction" },
        { count: 0, text: "Brokerage Fees*" },
        { count: 0, text: "Experiences" },
        { count: 0, text: "Expert members" },
    ]);
    const aboutRef = useRef(null);

    useEffect(() => {

        const currentAboutrRef = aboutRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (!hasAnimated) {
                        setHasAnimated(true);
                        startCounterAnimation();
                    }
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (currentAboutrRef) observer.observe(currentAboutrRef);
        return () => {
            if (currentAboutrRef) observer.unobserve(currentAboutrRef);
        };
    }, [hasAnimated]);

    const startCounterAnimation = () => {
        const duration = 1000; // Duration in ms
        const stepTime = 50;
        const steps = Math.ceil(duration / stepTime);

        const endValues = [94, 0, 15, 11];

        const updateCount = (endValue, index) => {
            let startValue = 0;
            const stepValue = endValue / steps;

            const interval = setInterval(() => {
                startValue += stepValue;
                if (startValue >= endValue) {
                    startValue = endValue;
                    clearInterval(interval);
                }
                setTapData((prev) => {
                    const newData = [...prev];
                    newData[index].count = Math.floor(startValue);
                    return newData;
                });
            }, stepTime);
        };

        endValues.forEach((value, index) => updateCount(value, index));
    };

    const formatCount = (count) => {
        return count < 10 ? `0${count}` : count;
    };

    return (
        <div id='About-Us' className='2xl:container mx-auto flex flex-col-reverse md:flex-row justify-center  md:justify-evenly gap-x-5 lg:gap-x-0 px-5 lg:px-20 2xl:px-28 items-center lg:items-start sectionsGap' >
            <div className=' hidden md:flex w-[40%] relative justify-center items-center lg:justify-center lg:-ml-14 mt-16 md:mt-0'>
                <div className='w-[400px] xl:w-[450px] mx-auto relative'>
                    <Image
                        src={sideImg}
                        alt=""
                        layout="responsive"
                        width={400}
                        height={300}
                        className='object-cover'
                        priority={false} loading="lazy"
                    />
                </div>
            </div>
            <div className='w-full md:w-[60%] space-y-3 lg:space-y-4'>
                <div>
                    <p className='text-[#1E6DA4] md:text-start text-center'>
                        <span className='text-[#11508F] font-supera700 text-[30px]'>About us</span> <br className='hidden md:inline' />
                        <span className='text-[#474747] text-[22px] cxs:text-[25px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-supera800 uppercase leading-[1]'> Who We Are </span>
                    </p>
                    <p className='block md:hidden mt-1 px-0.5 cxs:px-2 font-supera700 text-[10px] xs:text-[14px] text-[#5A5454] text-center'>Expertly guiding your real estate investments with trust, innovation, and growth opportunities.</p>
                </div>
                <div className='flex md:hidden justify-center'>
                    <div className='flex md:hidden mx-auto w-[50%] relative justify-center lg:justify-end lg:-ml-16 my-0 cxs:my-5 md:my-0'>
                        <div className='w-[300px] mx-auto relative'>
                            <Image
                                src={sideImg}
                                alt=""
                                layout="responsive"
                                width={300}
                                height={225}
                                className='object-cover'
                                priority={false} loading="lazy"
                            />
                        </div>

                    </div>
                </div>
                <p className='px-2 lg:px-0 text-[13px] tracking-wide md:text-[14px] lg:text-[18px] lg:leading-[30px] text-[#575757] font-supera700 md:text-start text-center'>
                    At Realty Nivesh, we bring over 15 years of expertise in providing exceptional real estate services across Zirakpur, New Chandigarh, and Mohali. Our team of professionals has successfully marketed and sold commercial and residential projects in collaboration with top builders in the region. We take pride in serving HNI clients and top corporate employees, helping them find their ideal investments and homes.
                </p>
                <p className='px-2 lg:px-0 text-[13px] tracking-wide md:text-[14px] lg:text-[18px] lg:leading-[30px] text-[#575757] font-supera700 md:text-start text-center'>
                    Our mission is driven by a commitment to customer satisfaction, long-term client retainership, and maintaining transparency in all transactions. We strongly believe in harnessing technology and innovation to enhance the real estate experience, ensuring that our clients have access to the best market insights and opportunities.
                </p>
                {readMore && (
                    <>
                        <p className='px-2 lg:px-0 text-[13px] tracking-wide md:text-[14px] lg:text-[18px] lg:leading-[30px] text-[#575757] font-supera700 md:text-start text-center'>
                            At Realty Nivesh, we’re dedicated to creating value for our clients through expert guidance, personalized services, and an unwavering focus on building lasting relationships. Whether you’re looking for your next investment or a dream home, you can trust us to deliver excellence every step of the way.
                        </p>
                    </>
                )}
                <div className='w-full flex justify-center md:justify-start'>
                    <button onClick={() => setReadMore(!readMore)} className=' font-supera500 capitalize text-[15px] sm:text-[20px] text-[#1E6DA4] cursor-pointer text-justify'>{readMore ? 'Read less' : 'Read more'}</button>
                </div>

                <p className='lg:text-[30px] xl:text-[32.49px] text-[22px] text-[#575858] lg:leading-[38px] xl:leading-[48px] font-supera700 md:text-start text-center lg:pe-12'>
                    WE PROVIDE YOU THE
                    BEST <span className='font-supera800'>EXPERIENCE</span>
                </p>
                <div className='rounded-t-[10px] w-full lg:min-w-[560px] 2xl:w-[640px] bg-[#1E6DA4]  mx-3 md:mx-0 pb-[0.1px]'>
                    <div ref={aboutRef} className=' grid grid-cols-2 grid-flow-row cmd:flex justify-center items-end p-3 lg:px-2 lg:py-5 sm:gap-2'>
                        {
                            tapData.map((item, index) => (
                                <div key={index} style={{ borderColor: '#DCDCDC' }} className={` ${index == 1 ? 'border-b-[0.85px] border-r-[0px]' : ''} ${index == 2 ? 'border-b-[0px]' : ''} font-supera800 flex flex-col justify-between items-center text-center text-white leading-none sm:px-3 ${index < 3 ? "border-b-[0.85px]  border-r-[0.85px] sm:border-r-[0px] sm:border-b-[0.85px] pb-4 cmd:pb-0 cmd:border-b-[0px] cmd:border-r-[0.85px] border-dashed" : " sm:border-b-[0.85px] cmd:border-b-[0px] pb-4  cmd:pb-0 border-dashed border-r-0"}`}>
                                    <p className={`${index > 1 ? 'relative top-3 sm:top-0' : ''} text-[25px] lg:text-[30px] xl:text-[38.43px]  pb-1  font-[700]`}>
                                        {isVisible && hasAnimated ? (index == 1 ? 'Zero' : formatCount(item.count)) : '00'}
                                        <span className='text-2xl xl:text-4xl ml-0.5'>
                                            {index == 0 ? '%' : index == 1 ? '%' : index == 2 ? 'Yrs+' : '+'}
                                        </span>
                                    </p>
                                    <p className={`${index > 1 ? ' relative top-3 sm:top-0' : ''} sm:whitespace-nowrap capitalize font-supera500 text-[11px] cxs:text-[12px] md:text-[11px] cmd:text-[10px] lg:text-[11px] 3xl:text-[12px]  mt-0.5 tracking-[1px]`}>
                                        {item.text}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full py-0.5 sm:py-[0.6px] bg-white mb-1'></div>
                </div>
            </div>
        </div>
    );
}

export default About;
