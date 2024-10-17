"use client"

import React, { useEffect, useRef, useState } from 'react';
import Icon1 from "../assets/images/counterImg1.svg";
import Icon2 from "../assets/images/counterImg2.svg";
import Icon3 from "../assets/images/counterImg3.svg";
import Icon4 from "../assets/images/counterImg4.svg";
import Image from 'next/image';

function Counter() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [countValues, setCountValues] = useState({
        countOne: 0,
        countTwo: 0,
        countThree: 0,
        countFour: 0,
    });
    const counterRef = useRef(null);

    useEffect(() => {

        const currentCounterRef = counterRef.current;
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

        if (currentCounterRef) observer.observe(currentCounterRef);
        return () => {
            if (currentCounterRef) observer.unobserve(currentCounterRef);
        };
    }, [hasAnimated]);

    const startCounterAnimation = () => {
        const duration = 2000; // Duration in ms
        const stepTime = 50;
        const steps = Math.ceil(duration / stepTime);

        const updateCount = (endValue, key) => {
            let startValue = 0;
            const stepValue = endValue / steps;

            const interval = setInterval(() => {
                startValue += stepValue;
                if (startValue >= endValue) {
                    startValue = endValue;
                    clearInterval(interval);
                }
                setCountValues((prev) => ({
                    ...prev,
                    [key]: Math.floor(startValue),
                }));
            }, stepTime);
        };

        updateCount(2000, 'countOne');
        updateCount(1000, 'countTwo');
        updateCount(70, 'countThree');
        updateCount(15, 'countFour');

    };

    return (
        <div className='sectionsGap' >
            <div ref={counterRef} style={{ backgroundImage: `url('/images/089035460b1685390c840f400f092d06.png')` }} className='mx-auto w-[99%] h-[288px] bg-cover bg-no-repeat'>
                <div className=' w-full h-full mx-auto grid grid-cols-2 grid-flow-row'>
                    <div className='flex lg:ps-28 items-center py-2 md:ps-10 border-r-[1px] border-[#ffffff46]'>
                        <div className=' text-white flex flex-col gap-3 justify-center cxs:justify-normal cxs:gap-0 cxs:flex-row w-full md:w-[550px] px-2 items-center lg:ml-8 xl:ml-12'>
                            <div className='w-[50px] cxs:w-[65px]  left-2 cxs:left-0 ps-2 pe-2 cxs:mr-1.5 relative'>
                                <Image
                                    src={Icon1}
                                    alt=""
                                    layout="responsive"
                                    width={50}
                                    height={50}
                                    className='object-cover'
                                    priority={false} loading="lazy"
                                />
                            </div>
                            <div className='leading-tight cxs:border-l-[1.50px] cxs:border-[#fff] pl-4'>
                                <p className='tracking-wide relative text-center cxs:text-left text-[24px] sm:text-[25px] lg:text-[28px] xl:text-[37px] font-semibold flex items-center gap-3'>
                                    {isVisible && hasAnimated ? countValues.countOne : '0'}
                                    <p className='flex justify-center items-center'>
                                        <span className='-ml-2.5'>+</span>
                                        <span className=' text-[#238AD1] font-supera500 tracking-wide text-[15px] lg:text-[17px] xl:text-[19px] ml-2.5 mt-2 uppercase'> CLIENTS </span>
                                    </p>
                                </p>
                                <p className='capitalize text-center cxs:text-left text-[10px] md:text-[14px] font-500'>
                                    Its not more than Satisfaction on Client's Face
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:ps-24 items-center py-2 md:ps-10 border-b-[1px] border-[#ffffff46]'>
                        <div className='text-white flex flex-col gap-3 justify-center cxs:justify-normal cxs:gap-0 cxs:flex-row w-full md:w-[550px] px-2 items-center lg:mr-8 xl:mr-12'>
                            <div className='w-[50px] cxs:w-[65px]  left-2 cxs:left-0 ps-2 pe-2 cxs:mr-1.5 relative'>
                                <Image
                                    src={Icon2}
                                    alt=""
                                    layout="responsive"
                                    width={65}
                                    height={65}
                                    className='object-cover'
                                    priority={false} loading="lazy"
                                />
                            </div>
                            <div className=' flex flex-col items-center cxs:items-start leading-tight cxs:border-l-[1.50px] cxs:border-[#fff] pl-4'>
                                <p className='tracking-wide relative text-center cxs:text-left text-[24px] sm:text-[25px] lg:text-[28px] xl:text-[37px] font-semibold flex items-center gap-3'>
                                    {isVisible && hasAnimated ? countValues.countTwo : '0'}
                                    <p className='flex justify-center items-center'>
                                        <span className='-ml-2.5'>+</span>
                                        <span className=' text-[#238AD1] font-supera500 tracking-wide text-[15px] lg:text-[17px] xl:text-[19px] ml-2.5 mt-2 uppercase'> SALES </span>
                                    </p>
                                </p>
                                <p className='capitalize tracking-wide text-center cxs:text-left text-[10px] md:text-[14px] font-500'>
                                    happy realty nivesh customers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='relative top-[-1px] flex lg:ps-28 items-center pb-2 pt-2 md:ps-10 border-t-[1px] border-r-[1px] border-[#ffffff46]'>
                        <div className='text-white flex flex-col gap-3 justify-center cxs:justify-normal cxs:gap-0 cxs:flex-row w-full md:w-[550px] px-2 items-center lg:ml-8 xl:ml-12'>
                            <div className='w-[50px] cxs:w-[65px] left-2 cxs:left-0 ps-2 pe-2 cxs:mr-1.5 relative'>
                                <Image
                                    src={Icon3}
                                    alt=""
                                    layout="responsive"
                                    width={65}
                                    height={65}
                                    className='object-cover'
                                    priority={false} loading="lazy"
                                />
                            </div>
                            <div className='leading-tight cxs:border-l-[1.50px] cxs:border-[#fff] pl-4'>
                                <p className='text-center cxs:text-left text-[24px] sm:text-[25px] lg:text-[28px] xl:text-[40px] font-semibold flex items-center gap-3'>
                                    {isVisible && hasAnimated ? countValues.countThree : '0'}
                                    <p className='flex justify-center items-center'>
                                        <span className='-ml-2.5'>+</span>
                                        <span className=' text-[#238AD1] font-supera500 tracking-wide text-[15px] lg:text-[17px] xl:text-[19px] ml-2.5 mt-2'> PROJECTS </span>
                                    </p>
                                </p>
                                <p className='capitalize text-center cxs:text-left text-[10px] md:text-[14px] font-500'>
                                    residential AND COMMERCIAL
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:ps-24 items-center py-2 md:ps-10'>
                        <div className='text-white flex flex-col gap-3 justify-center cxs:justify-start cxs:gap-0 cxs:flex-row w-full md:w-[550px] px-2 lg:mr-8 xl:mr-12 items-center'>
                            <div className='w-[50px] cxs:w-[65px]  left-2 cxs:left-0 ps-2 pe-2 cxs:mr-1.5 relative'>
                                <Image
                                    src={Icon4}
                                    alt=""
                                    layout="responsive"
                                    width={65}
                                    height={65}
                                    className='object-cover'
                                    priority={false} loading="lazy"
                                />
                            </div>
                            <div className='leading-tight cxs:border-l-[1.50px] cxs:border-[#fff] pl-4'>
                                <p className='text-center cxs:text-left text-[24px] sm:text-[25px] lg:text-[28px] xl:text-[40px] font-semibold flex items-center gap-3'>
                                    {isVisible && hasAnimated ? countValues.countThree : '0'}
                                    <p className='flex justify-center items-center'>
                                        <span className='-ml-2.5'>+</span>
                                        <span className=' text-[#238AD1] font-supera500 tracking-wide text-[15px] lg:text-[17px] xl:text-[19px] ml-2.5 mt-2 uppercase'> awards </span>
                                    </p>
                                </p>
                                <p className='text-center cxs:text-left text-[10px] md:text-[14px] font-500'>
                                    CHANDIGARH | MOHALI | PANCHKULA | ZIRAKPUR
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;
