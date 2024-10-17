'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import Heading from './common/Heading'

import locationIcon from "../assets/images/locationIconn.svg"
import compress_icon from "../assets/images/compress_icon.png";
const ShareButton = dynamic(() => import('../components/common/ShareButton'), { ssr: false });

import propertyData from '../app/PropertyData';
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import EnquiryForm from './common/EnquiryForm';

function Projects() {
    const params = useParams();
    const [activeTab, setActiveTab] = useState('all')
    const [projectCardToggle, setProjectCardToggle] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [heading, setHeading] = useState()
    const [modalLogo, setModalLogo] = useState()

    const handleOpenModal = (heading, logo) => {
        setModalLogo(logo)
        setHeading(heading)
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Enable scrolling
    };

    const tabs = [
        { key: 'all', label: "All Projects", textColor: '#747576' },
        { key: 'ongoingResidential', label: "Ongoing Residential", textColor: '#747576' },
        { key: 'ongoingCommercial', label: "Ongoing Commercial", textColor: '#747576' },
        { key: 'leisureHomes', label: "Leisure Homes", textColor: '#1d8b42f8' },
        { key: 'upcoming', label: "Upcoming", textColor: '#BC8B27' },
        { key: 'newLaunch', label: "New Launch", textColor: '#BC8B27' },
        { key: 'completed', label: "Completed", textColor: '#BC8B27' },
    ];

    const filterProjects = () => {
        const residentialProjects = Object.values(propertyData[0]?.residential || {});
        const commercialProjects = Object.values(propertyData[0]?.commercial || {});
        const completedProjects = Object.values(propertyData[0]?.completed || {});

        switch (activeTab) {
            case 'all':
                return [...residentialProjects, ...commercialProjects];

            case 'ongoingResidential':
                // return residentialProjects.filter(project => project.projectStatus === 'ongoing');
                return [
                    ...residentialProjects.filter(project => project.projectStatus === 'ongoingResidential'),
                ]

            case 'ongoingCommercial':
                // return commercialProjects.filter(project => project.projectStatus === 'ongoing');
                return [
                    ...commercialProjects.filter(project => project.projectStatus === 'ongoingCommercial')
                ]

            case 'leisureHomes':
                return [
                    ...residentialProjects.filter(project => project.category === 'LEISURE HOMES'),
                    ...commercialProjects.filter(project => project.category === 'LEISURE HOMES')
                ]
            case 'upcoming':
                return [
                    ...residentialProjects.filter(project => project.projectStatus === 'upcoming'),
                    ...commercialProjects.filter(project => project.projectStatus === 'upcoming')
                ];

            case 'newLaunch':
                return [
                    ...residentialProjects.filter(project => project.projectStatus === 'newLaunch'),
                    ...commercialProjects.filter(project => project.projectStatus === 'newLaunch')
                ];

            case 'completed':
                return [
                    ...completedProjects.filter(project => project.projectStatus === 'completed'),
                ];

            default:
                return [];
        }
    };

    const filteredProjects = filterProjects();


    useEffect(() => {
        const updateTabFromHash = () => {
            const hash = window?.location.hash?.substring(1);
            setActiveTab(hash || 'all');
        };

        updateTabFromHash();

        const handleHashChange = () => {
            updateTabFromHash();
        };

        const scrollToActiveTab = () => {
            const element = document.getElementById(activeTab); // Get the element by activeTab ID
            if (element) {
                const topPosition = element.offsetTop; // Get the element's top position
                window?.scrollTo({
                    top: topPosition, // Scroll to the element's top position
                    behavior: "smooth" // Optional: smooth scroll
                });
            }
        };

        // Scroll to the active tab when the effect runs
        scrollToActiveTab();

        // Add hashchange listener
        window?.addEventListener('hashchange', handleHashChange);

        return () => {
            window?.removeEventListener('hashchange', handleHashChange);
        };
    }, [params]); // Add activeTab to the dependencies


    const handleToggle = (projectId) => {
        setProjectCardToggle(prevProjectCardToggle => ({
            ...prevProjectCardToggle,
            [projectId]: !prevProjectCardToggle[projectId]
        }));
    };

    const handleWhatsAppClick = (heading) => {
        const phoneNumber = '9988010405';
        const message = `Hi I am interested in *${heading} Project*. Please send more detail`;

        const encodedMessage = encodeURIComponent(message);

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window?.open(whatsappUrl, '_blank');
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Share This Content',
                    text: 'Check out this amazing content!',
                    url: window?.location.href, // Share current page URL
                });
                console.log('Content shared successfully');
            } catch (error) {
                console.error('Error sharing content:', error);
            }
        } else {
            console.log('Web Share API not supported');
        }
    };

    const renderActiveTabContent = () => {
        return filteredProjects.map((project, index) => (
            <motion.div
                key={index}
                layoutId={`project-${project?.id || index}`}

                className={` cursor-pointer w-full  bg-white shadow-lg rounded-lg overflow-hidden mx-auto `}>
                <div className={`w-full h-auto md:h-[270px] cmd:h-[300px] xl:h-[350px] relative  `}>
                    <Image
                        className=" w-full h-full object-cover"
                        onClick={() => handleToggle(index)}
                        src={project?.propertyImg}
                        alt="Property"
                    />
                    <div onClick={() => handleToggle(index)} className='absolute top-4 left-0  w-[114px] h-[40px]'>
                        <div className='relative '>
                            <svg className='w-full h-full' viewBox="0 0 114 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M113.588 0.547974H-2.6283C-3.29415 0.547974 -3.83393 1.08775 -3.83393 1.7536V29.0341C-3.83393 29.7 -3.29415 30.2398 -2.6283 30.2398H113.588L105.538 14.8033L113.588 0.547974Z" fill="white" />
                            </svg>
                            <span className='whitespace-nowrap absolute top-[50%] translate-y-[-50%] left-[45%] translate-x-[-50%] text-[#325D84] font-supera800 text-[13px] capitalize tracking-wide'>Selling Fast</span>
                        </div>
                    </div>
                    {project?.projectStatus !== 'completed' && (
                        <div onClick={() => handleToggle(index)} style={{ animation: 'spin 16s linear infinite' }} className="absolute top-14 left-4  animate-spin animate-duration-[5000s] size-[60px] sm:size-[80px]">
                            <div className='w-full h-full bg-white rounded-full relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='max-w-[18px] sm:max-w-[22px]  absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' viewBox="0 0 16 16"><path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                                <span><svg
                                    className='fill-[#fff] w-[100%] h-[100%] p-1.5 lg:p-3'
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        id="circlePath"
                                        d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0"
                                    />
                                    <text className='fill-[#000] text-xs font-supera700'>
                                        <textPath href="#circlePath">
                                            {project?.ImgCircleText}
                                        </textPath>
                                    </text>
                                </svg></span>
                            </div>
                        </div>
                    )}
                    {/* {project?.projectStatus !== 'completed' && ( */}
                    <div onClick={() => handleShare()} className="cursor-pointer absolute top-2 right-3 z-50 font-supera700 ">
                        <div className='size-[25px] md:size-[30px] relative'>
                            <ShareButton title={`${project?.heading} Project`} />
                        </div>
                    </div>

                    {/* )} */}
                    <div onClick={() => handleToggle(index)} className={` absolute left-2 bottom-3    `}>
                        <div className=' font-supera800 tracking-[1px] text-[18px] leading-[20px] text-[#ffffffab] uppercase '>{project?.category}</div>
                    </div>
                    {project?.projectStatus !== 'completed' && (
                        <div onClick={() => handleToggle(index)} className={`absolute bottom-3 right-2  cursor-pointer ml-1.5 lg:ml-3  bg-[#1e6da4] border border-[#1e6da4] rounded-full w-[34px] h-[34px] scale-[0.7] sm:scale-1 flex justify-center items-center  ${!projectCardToggle[index] ? 'rotate-90 duration-300' : 'rotate-[270deg] duration-300'}`}>
                            <svg width="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.287109 11.6891H2.59549L7.49194 6.09752L2.59549 0.80127H0.287109L4.10687 4.93292C4.719 5.59503 4.73272 6.61235 4.13868 7.29073L0.287109 11.6891Z" fill="#fff" />
                            </svg>
                        </div>
                    )}
                </div>

                <div className={` ${!projectCardToggle[index] ? ' flex bg-white' : 'bg-white flex'} w-full `}>
                    <div className=' w-full  pt-[10px] lg:pt-[20px] pb-[10px] md:pb-[20px] lg:pb-[24px] pl-2 lg:pl-5 pr-2 lg:pr-5   '>
                        <div onClick={() => handleToggle(index)} className="relative lg:-top-2 text-[#464646] font-supera700 text-[10px] cxs:text-[10px] sm:text-[10px]  lg:text-[11px] xl:text-[12px]  pr-0.5 xl:pr-3  rounded-full">
                            RERA NUMBER: {project?.reraNumber}
                        </div>
                        <div onClick={() => handleToggle(index)}>
                            <div className={`${project?.projectStatus !== 'completed' ? 'flex-row-reverse' : 'flex-row-reverse pr-3'} lg:border-b-[0.5px] lg:border-none border-[#c3c3c39d] flex   items-start justify-between py-2.5 lg:py-0`}>
                                <div className=' flex relative'>
                                    <div className='w-[85px] sm:w-[100px] cmd:w-[100px] xl:w-[122px] h-[50px] relative'>
                                        <Image
                                            src={project?.logo}
                                            alt=""
                                            layout="responsive"
                                            width={122}
                                            height={122}
                                            className='object-cover '
                                            priority={false} loading="lazy"
                                        />
                                    </div>

                                    {/* {project?.projectStatus !== 'completed' && (
                                        <div className={`absolute -top-4 right-0 sm:static  cursor-pointer ml-1.5 lg:ml-3  bg-[#1E6DA4] rounded-full w-[19px] h-[19px] md:w-[24px] md:h-[24px] lg:w-[27px] lg:h-[27px] scale-[0.7] sm:scale-1 flex justify-center items-center  ${!projectCardToggle[index] ? 'rotate-90 duration-300' : 'rotate-[270deg] duration-300'}`}>
                                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.287109 11.6891H2.59549L7.49194 6.09752L2.59549 0.80127H0.287109L4.10687 4.93292C4.719 5.59503 4.73272 6.61235 4.13868 7.29073L0.287109 11.6891Z" fill="#fff" />
                                            </svg>
                                        </div>
                                    )} */}
                                </div>
                                <div className='bg-white  text-[16px] cxs:text-[14px] sm:text-[16px] md:text-[17px] cmd:text-[14px] lg:text-[14.5px] xl:text-[16px] leading-tight text-left text-[#4E4A4A] font-supera800 uppercase'>
                                    <div className='text-left pr-0.5'> {project?.heading}</div>
                                    {project?.projectStatus !== 'completed' ? (
                                        <div className='flex items-center gap-x-2 mt-1'>
                                            <Image src={locationIcon} alt="" />
                                            <p className="font-supera700 tracking-wide text-[9px] sm:text-[10.5px] md:text-[11px] cmd:text-[10.5px] lg:text-[12px] xl:text-[13px] text-[#464646] ">{project?.location}</p>
                                            <div className='flex cxs:hidden sm:flex ml-1 cxs:ml-0.5 md:ml-1'>
                                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.287109 11.6891H2.59549L7.49194 6.09752L2.59549 0.80127H0.287109L4.10687 4.93292C4.719 5.59503 4.73272 6.61235 4.13868 7.29073L0.287109 11.6891Z" fill="#1E6DA4" />
                                                </svg>
                                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.287109 11.6891H2.59549L7.49194 6.09752L2.59549 0.80127H0.287109L4.10687 4.93292C4.719 5.59503 4.73272 6.61235 4.13868 7.29073L0.287109 11.6891Z" fill="#1E6DA4" />
                                                </svg>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='text-sm text-[#464646c5] font-supera600'>
                                            {project?.year}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {project?.projectStatus !== 'completed' && (
                            <div onClick={() => handleToggle(index)} className={`${!projectCardToggle[index] ? 'h-[0px] duration-300 grid grid-cols-2 xl:grid-cols-3' : 'h-[340px] bxxs:h-[190px] cxs:h-[340px] sm:h-[190px] md:h-[180px] xl:h-[120px] overflow-y-auto grid grid-cols-1 bxxs:grid-cols-2 cxs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-4 mt-4 duration-300'} overflow-hidden`}>
                                <div className="w-full ">
                                    <div className='flex items-start gap-x-1 xl:gap-x-2 relative after:absolute after:top-[101%] after:left-0.5 after:w-full md:after:w-[125px] after:h-[0.62px] after:bg-[#B0B0B0CC]'>
                                        <Image src={compress_icon} className='mt-[1px] w-[14px] h-[11px]' alt="" />
                                        <p className={`font-supera700 tracking-wide  ${filteredProjects.length < 6 ? 'px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[9px]  3xl:text-[10px] ' : 'whitespace-nowrap px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[9px]  3xl:text-[10px] '}  pb-[1px] text-[#1E6DA4] `}>Size Available</p>
                                    </div>
                                    <p className="pt-2 px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[10px]  3xl:text-[10px]  font-supera700 tracking-wide text-[#464646] w-full sm:max-w-[150px] whitespace-wrap">{project?.sizeAvailable}</p>
                                </div>
                                <div className="w-full ">
                                    <div className='flex items-start gap-x-1 xl:gap-x-2 relative after:absolute after:top-[101%] after:left-0.5 after:w-full md:after:w-[125px] after:h-[0.62px] after:bg-[#B0B0B0CC]'>
                                        <Image src={compress_icon} className='mt-[1px] w-[14px] h-[11px]' alt="" />
                                        <p className={`font-supera700 tracking-wide  ${filteredProjects.length < 6 ? 'px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[9px]  3xl:text-[10px] ' : 'whitespace-nowrap px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[9px]  3xl:text-[10px] '}  pb-[1px] text-[#1E6DA4] `}>Offerings</p>
                                    </div>
                                    <p className="pt-2 px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[10px]  3xl:text-[10px]  font-supera700 tracking-wide text-[#464646]">{project?.offerings}</p>
                                </div>

                                <div className="w-full ">
                                    <div className='flex items-start gap-x-1 xl:gap-x-2 relative after:absolute after:top-[101%] after:left-0.5 after:w-full md:after:w-[125px] after:h-[0.62px] after:bg-[#B0B0B0CC]'>
                                        <Image src={compress_icon} className='mt-[1px] w-[14px] h-[11px]' alt="" />
                                        <p className={`uppercase font-supera700 tracking-wide  ${filteredProjects.length < 6 ? 'px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[9px]  3xl:text-[10px] ' : 'whitespace-nowrap px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[9px]  3xl:text-[10px] '}  pb-[1px] text-[#1E6DA4] `}>Type</p>
                                    </div>
                                    <p className="pt-2 px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[10px]  3xl:text-[10px]  font-supera700 tracking-wide text-[#464646]">{project?.type}</p>
                                </div>

                                <div className="w-full ">
                                    <div className='flex items-start gap-x-1 xl:gap-x-2 relative after:absolute after:top-[101%] after:left-0.5 after:w-full md:after:w-[125px] after:h-[0.62px] after:bg-[#B0B0B0CC]'>
                                        <Image src={compress_icon} className='mt-[1px] w-[14px] h-[11px]' alt="" />
                                        <p className={`uppercase font-supera700 tracking-wide  ${filteredProjects.length < 6 ? 'px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[9px]  3xl:text-[10px] ' : 'whitespace-nowrap px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[9px]  3xl:text-[10px] '}  pb-[1px] text-[#1E6DA4] `}>Start From</p>
                                    </div>
                                    <p className="pt-2 px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[10px]  3xl:text-[10px]  font-supera700 tracking-wide text-[#464646]">₹ {project?.startFrom}</p>
                                </div>
                                <div className="w-full ">
                                    <div className='flex items-start gap-x-1 xl:gap-x-2 relative after:absolute after:top-[101%] after:left-0.5 after:w-full md:after:w-[125px] after:h-[0.62px] after:bg-[#B0B0B0CC]'>
                                        <Image src={compress_icon} className='mt-[1px] w-[14px] h-[11px]' alt="" />
                                        <p className={`uppercase font-supera700 tracking-wide  ${filteredProjects.length < 6 ? 'px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[9px]  3xl:text-[10px] ' : 'whitespace-nowrap px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[9px]  3xl:text-[10px] '}  pb-[1px] text-[#1E6DA4] `}>Expected Hand Over</p>
                                    </div>
                                    <p className="pt-2 px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[10px]  3xl:text-[10px]  font-supera700 tracking-wide text-[#464646]">{project?.expectedHandOver}</p>
                                </div>

                                <div className="w-full ">
                                    <div className='flex items-start gap-x-1 xl:gap-x-2 relative after:absolute after:top-[101%] after:left-0.5 after:w-full md:after:w-[125px] after:h-[0.62px] after:bg-[#B0B0B0CC]'>
                                        <Image src={compress_icon} className='mt-[1px] w-[14px] h-[11px]' alt="" />
                                        <p className={`font-supera700 tracking-wide  ${filteredProjects.length < 6 ? 'px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[9px]  3xl:text-[10px] ' : 'whitespace-nowrap px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[9px]  3xl:text-[10px] '}  pb-[1px] text-[#1E6DA4] `}>Status</p>
                                    </div>
                                    <p className="pt-2 px-0.5 text-[11px] md:text-[12px] cmd:text-[9px] lg:text-[10.5px] xl:text-[8.5px] 2xl:text-[10px]  3xl:text-[10px]  font-supera700 tracking-wide text-[#464646]">Under Construction</p>
                                </div>
                            </div>
                        )}
                        {project?.projectStatus !== 'completed' ? (
                            <div className=' lg:mt-2.5 flex  flex-row cxs:flex-col sm:flex-row  items-center cxs:items-start sm:items-center justify-between cxs:justify-center sm:justify-between  bg-white w-full h-[60px] '>
                                <div className='flex items-center  text-center  sm:my-0 '>
                                    <div className='relative  flex  gap-4 sm:gap-3 lg:gap-4 xl:gap-7'>
                                        <div onClick={() => { window.location.href = 'tel:918968066698'; setProjectCardToggle(-1) }} className='relative group  size-[35px] cxs:size-[27px] sm:size-[40px] flex justify-center items-center text-[#1E6DA4] rounded-full border-[1.58px] border-[#1E6DA4]  cursor-pointer hover:bg-[#1E6DA4]'>
                                            <svg className='w-4 cxs:w-3 sm:w-4 duration-500 fill-[#1E6DA4] group-hover:fill-[#fff]' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.54926 2.33134H7.26243L8.78135 6.12917L6.34079 7.75621C6.19707 7.8521 6.07924 7.98198 5.99775 8.13433C5.91627 8.28668 5.87365 8.45679 5.87367 8.62956V8.65266C5.8743 8.6996 5.8764 8.74651 5.87997 8.79332C5.88627 8.87939 5.89677 8.99591 5.91671 9.13972C5.95765 9.42314 6.03638 9.81363 6.18963 10.2734C6.49825 11.1971 7.10288 12.3927 8.28064 13.5705C9.45841 14.7483 10.654 15.3529 11.5767 15.6615C12.0375 15.8148 12.427 15.8925 12.7125 15.9345C12.8737 15.957 13.0359 15.971 13.1985 15.9764L13.2122 15.9775H13.2205C13.4154 15.9774 13.6075 15.923 13.7732 15.8205C13.939 15.718 14.0729 15.5713 14.16 15.397L14.8633 13.9904L19.5198 14.7672V19.3019C17.3039 19.6221 11.3185 19.938 6.61581 15.2353C1.91314 10.5327 2.22805 4.54622 2.54926 2.33134ZM8.04971 9.13972L9.94652 7.87588C10.3472 7.60859 10.6439 7.21164 10.7866 6.75161C10.9294 6.29157 10.9096 5.79643 10.7307 5.34924L9.21173 1.55141C9.05586 1.16187 8.78685 0.827971 8.4394 0.592782C8.09195 0.357593 7.682 0.231905 7.26243 0.231934H2.49468C1.5405 0.231934 0.643001 0.894297 0.486595 1.9293C0.129696 4.28274 -0.354217 11.2339 5.13153 16.7196C10.6173 22.2054 17.5684 21.7204 19.9219 21.3646C20.9569 21.2071 21.6192 20.3107 21.6192 19.3565V14.7672C21.6193 14.2702 21.4431 13.7893 21.1219 13.4101C20.8007 13.0309 20.3554 12.7779 19.8652 12.6961L15.2087 11.9204C14.7658 11.8465 14.3109 11.9165 13.9108 12.1201C13.5106 12.3238 13.1863 12.6504 12.9854 13.052L12.6222 13.7794C12.4938 13.7478 12.3667 13.711 12.2412 13.6692C11.5904 13.453 10.6866 13.0079 9.76493 12.0862C8.84329 11.1646 8.39821 10.2608 8.18197 9.60894C8.13034 9.45485 8.08549 9.29824 8.04971 9.13972Z" />
                                            </svg>
                                            <div className='uppercase font-supera700 text-[10px] tracking-wide text-[#464646] duration-500 hidden group-hover:inline absolute top-[120%] left-[50%] translate-x-[-50%] whitespace-nowrap'>Call Us</div>
                                        </div>
                                        <div onClick={() => { handleOpenModal(project?.heading, project?.logo); setProjectCardToggle(-1) }} className='relative group  size-[35px] cxs:size-[27px] sm:size-[40px] flex justify-center items-center text-[#1E6DA4] rounded-full border-[1.58px] border-[#1E6DA4]  cursor-pointer hover:bg-[#1E6DA4]'>
                                            <svg className='w-5 cxs:w-4 sm:w-5 duration-500 fill-[#1E6DA4] group-hover:fill-[#fff]' viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.7916 8.49938L1.14771 2.77712C0.985174 2.52109 0.894707 2.22596 0.885839 1.92282C0.876971 1.61969 0.950029 1.31977 1.09732 1.05468C1.2446 0.789581 1.46067 0.56912 1.72274 0.41652C1.98482 0.263921 2.2832 0.184835 2.58645 0.187593L20.9042 0.371262C21.1817 0.374434 21.4521 0.458853 21.6821 0.614083C21.9121 0.769313 22.0916 0.988548 22.1984 1.24468C22.3051 1.50082 22.3345 1.78262 22.2828 2.05525C22.2311 2.32789 22.1006 2.5794 21.9075 2.77869L9.14093 15.9175C8.92915 16.1346 8.6628 16.2905 8.36988 16.369C8.07697 16.4474 7.76833 16.4455 7.47642 16.3634C7.18452 16.2812 6.92014 16.122 6.71109 15.9023C6.50205 15.6826 6.35606 15.4107 6.2885 15.1151L4.7916 8.49938ZM2.93511 2.07573L6.04218 6.95736L11.6897 4.60363C11.9203 4.5075 12.1797 4.50693 12.4108 4.60206C12.6419 4.69718 12.8257 4.88022 12.9219 5.11088C13.018 5.34155 13.0186 5.60096 12.9235 5.83205C12.8283 6.06313 12.6453 6.24697 12.4146 6.3431L6.76715 8.69683L8.04662 14.3402L19.7974 2.24533L2.93511 2.07573Z" />
                                            </svg>
                                            <div className='uppercase font-supera700 text-[10px] tracking-wide text-[#464646] duration-500 hidden group-hover:inline absolute top-[120%] left-[50%] translate-x-[-50%] whitespace-nowrap'>Enquire now</div>
                                        </div>
                                        <div onClick={() => { handleWhatsAppClick(project?.heading); setProjectCardToggle(-1) }} className='relative group  size-[35px] cxs:size-[27px] sm:size-[40px] flex justify-center items-center text-[#1E6DA4] rounded-full border-[1.58px] border-[#1E6DA4]  cursor-pointer  hover:bg-[#1E6DA4]'>
                                            <svg className='w-5 cxs:w-4 sm:w-5 duration-500 fill-[#1E6DA4] group-hover:fill-[#fff]' viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.8816 4.6434C21.6587 3.40813 20.2021 2.42871 18.5967 1.76228C16.9913 1.09585 15.2693 0.755743 13.5311 0.761798C6.24806 0.761798 0.312277 6.69758 0.312277 13.9806C0.312277 16.3149 0.925864 18.5825 2.073 20.5833L0.205566 27.4395L7.20846 25.5987C9.14259 26.6525 11.3168 27.2127 13.5311 27.2127C20.8141 27.2127 26.7499 21.2769 26.7499 13.9939C26.7499 10.4591 25.376 7.13777 22.8816 4.6434ZM13.5311 24.9718C11.5569 24.9718 9.62279 24.4383 7.92876 23.4378L7.52859 23.1977L3.36687 24.2915L4.474 20.2365L4.20722 19.823C3.11043 18.0716 2.52805 16.0471 2.52653 13.9806C2.52653 7.92476 7.4619 2.98939 13.5177 2.98939C16.4523 2.98939 19.2134 4.13653 21.2809 6.21739C22.3047 7.23643 23.116 8.44853 23.6678 9.78343C24.2196 11.1183 24.501 12.5495 24.4956 13.9939C24.5223 20.0498 19.5869 24.9718 13.5311 24.9718ZM19.5602 16.7551C19.2268 16.595 17.5994 15.7947 17.306 15.6746C16.9992 15.5679 16.7858 15.5146 16.559 15.8347C16.3322 16.1682 15.7053 16.9151 15.5186 17.1286C15.3318 17.3553 15.1317 17.382 14.7983 17.2086C14.4648 17.0485 13.3977 16.6884 12.1438 15.5679C11.1568 14.6876 10.5032 13.6071 10.3031 13.2736C10.1163 12.9402 10.2764 12.7668 10.4498 12.5934C10.5965 12.4466 10.7833 12.2065 10.9433 12.0198C11.1034 11.833 11.1701 11.6863 11.2768 11.4729C11.3835 11.2461 11.3302 11.0594 11.2501 10.8993C11.1701 10.7393 10.5032 9.11192 10.2364 8.44497C9.9696 7.80471 9.68949 7.88474 9.4894 7.8714H8.84914C8.62238 7.8714 8.27557 7.95144 7.96877 8.28491C7.67532 8.61838 6.82163 9.41871 6.82163 11.046C6.82163 12.6734 8.00879 14.2474 8.16886 14.4608C8.32892 14.6876 10.5032 18.0223 13.8112 19.4495C14.5982 19.7963 15.2118 19.9964 15.692 20.1431C16.479 20.3966 17.1993 20.3566 17.7728 20.2765C18.4131 20.1832 19.7336 19.4762 20.0004 18.7025C20.2805 17.9289 20.2805 17.2753 20.1872 17.1286C20.0938 16.9818 19.8937 16.9151 19.5602 16.7551Z" />
                                            </svg>
                                            <div className='uppercase font-supera700 text-[10px] tracking-wide text-[#464646] duration-500 hidden group-hover:inline absolute top-[120%] left-[50%] translate-x-[-50%] whitespace-nowrap'>Whatsapp</div>
                                        </div>
                                        <p className=' absolute bottom-0 text-nowrap translate-x-2 text-[13.51px] text-[#1E6DA4] font-supera800 pt-5  hidden group-hover:block'>
                                            Call Us
                                        </p>
                                    </div>
                                </div>
                                <Link href={project?.url || `#${activeTab}`} target={project?.url === '' ? undefined : '_blank'} onClick={() => { project?.url ? '' : handleOpenModal(project?.heading, project?.logo) }} className='mt-2 sm:mt-0 w-[120px] cxs:w-full sm:w-[116px] h-[34px] py-[8.32px] rounded-[5.21px] flex items-center justify-center sm:justify-evenly gap-2 sm:gap-0  bg-[#1E6DA4]'>
                                    <button className='cursor-pointer text-[10.5px] sm:text-[9px] md:text-[12px] font-supera400 md:font-supera600 text-[#FFFFFF] tracking-[1px] md:tracking-wide'>{(project?.url) ? 'Explore Now' : 'Enquiry Now'}</button>
                                    <span>
                                        <svg width="14" height="12" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.1781 6.02693L8.69694 1.54654L9.74047 0.503007L12.8718 3.63397L16.0031 6.76493L9.74121 13.0269L8.69694 11.9833L13.1788 7.50293L0.581054 7.50293L0.581054 6.02693L13.1781 6.02693Z" fill="#fff" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        ) : (
                            <div className='text-[#464646] font-supera700 tracking-wide pr-8 mt-4'>
                                {project?.description}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        ));
    };

    return (
        <div id={activeTab} className='lg:mt-12 pt-5'>
            <Heading
                heading="oUR projects "
                para="Within the premises of the Sushma Township are reputed Schools."
                className="text-[#1E6DA4] my-6"
            />
            <div>
                <div className='border-b-[3px] border-b-[#E9E9E9]'>
                    <ul className=' px-3 lg:px-3 xl:container mx-auto flex justify-between items-center gap-x-7 sm:gap-x-5 md:gap-x-7 cmd:gap-x-8  scroll-notvisible overflow-x-auto text-[12.5px] bxxs:text-[13px] cxs:text-[13.5px] md:text-[14px] lg:text-[16px]  xl:text-[18px]  font-supera800 uppercase  py-2 mt-2 text-nowrap projects_scroller '>
                        {tabs.map((tab, index) => (
                            <li className={`${activeTab === tab?.key ? 'bg-[#1E6DA4] rounded-full px-4 py-2' : ''} relative inline cursor-pointer `} key={index}
                                onClick={() => setActiveTab(tab?.key)}
                            >
                                <span
                                    style={{ color: activeTab === tab?.key ? '#fff' : tab?.textColor }}
                                    className={`${activeTab === tab?.key
                                        ? ""
                                        : ''}`}
                                >
                                    {tab?.label}
                                </span>

                            </li>
                        ))
                        }
                    </ul>
                </div>
                {/* after:absolute after:w-[100%] after:h-[2px] after:bg-[#1E6DA4] after:left-0 after:bottom-[-8px] */}
                <AnimatePresence mode='wait'>
                    <motion.div key={activeTab}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.6 } }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        className={`px-3 lg:px-3 xl:container mx-auto  lg:pt-16 pt-5 gap-y-8 gap-x-4 xl:gap-x-3 grid grid-cols-1 cxs:grid-cols-2 cmd:grid-cols-3 grid-flow-row `}>
                        {renderActiveTabContent()}
                    </motion.div>
                </AnimatePresence>


            </div>
            {isModalOpen && <EnquiryForm formType={'enquiry'} heading={heading} propertyLogo={modalLogo} isOpen={isModalOpen} onClose={handleCloseModal} eventSource={`Project Page ${heading} Enquiry Button`} />}

        </div>
    )
}

export default Projects
