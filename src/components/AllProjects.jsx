'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'; // Import the effect
import Image from 'next/image';
import BannerImg1 from '../assets/images/topbannerimg1.png';
import BannerImg2 from '../assets/images/topbannerimg2.png';
import BannerImg3 from '../assets/images/topbannerimg3.png';
import { Autoplay, EffectFade } from 'swiper/modules'; // Import EffectFade

const MainBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const banners = [
        { id: 1, type: 'video', videoUrl: '/videos/realtyniveshbgimg.mov', heading: "Your Property Journey Starts Here – Let's Build Your Future!", subheading: "From residential to commercial spaces, Realty Nivesh offers the expertise to help you invest wisely." },
        { id: 2, type: 'image', img: BannerImg1, heading: 'Your Dream Property Awaits Make It Yours Today!', subheading: 'Begin your journey to owning the perfect home or investment with Realty Nivesh. Let us guide you to the best deals.' },
        { id: 3, type: 'image', img: BannerImg3, heading: 'Real Estate Excellence – Where Trust Meets Opportunity!', subheading: 'With 15 years of experience, Realty Nivesh ensures transparency, trust, and unmatched deals in real estate.' },
        { id: 4, type: 'image', img: BannerImg2, heading: 'Invest in Your Future, Invest in Real Estate', subheading: 'Secure your tomorrow by making smart real estate investments today. Explore premium properties in Mohali, Zirakpur, and beyond.' },
    ];

    const handlePaginationClick = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideToLoop(index); // Move to the clicked slide
        }
    };

    const handleSlideChange = () => {
        console.log("Ok")
        const swiper = swiperRef.current.swiper;
        const currentSlide = swiper.slides[swiper.activeIndex];
        const video = currentSlide.querySelector('video');
        console.log('video', video)

        if (video) {
            console.log('donr')
            swiper.autoplay.stop();
            video.play();

            video.onended = () => {
                swiper.slideNext();
            };

        } else {
            console.log("emd")
            swiper.params.autoplay.delay = 4000;
            swiper.autoplay.start();
        }
    };

    return (
        <section className="w-full h-screen relative">
            <Swiper
                ref={swiperRef}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                effect="fade" // Add fade effect
                fadeEffect={{ crossFade: true }} // Optional: smooth fade transition
                speed={2000}
                onSlideChange={(swiper) => { handleSlideChange(); setActiveIndex(swiper.realIndex) }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                modules={[EffectFade, Autoplay]} // Add EffectFade here
                className="w-full h-full relative"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className="relative w-full h-full">
                            {banner.type === 'image' ? (
                                <Image src={banner.img} fill className="w-full h-full object-cover" alt={`Banner ${banner.id}`} />
                            ) : (
                                <video
                                    src={banner.videoUrl}
                                    className="w-full h-full object-cover"
                                    muted
                                />
                            )}
                            <div className="w-full h-full absolute top-0 left-0 bg-[linear-gradient(360deg,_rgba(14,_13,_13,_0)_0%,_#0A0A0A_98.61%)]">
                                <div className="px-5 xs:px-10 cmd:px-14 lg:px-6 xl:px-16 3xl:px-4 w-full h-full flex flex-col justify-center items-start">
                                    <div className="2xl:container mx-auto mt-5">
                                        <h1 className="text-center sm:text-left mx-auto sm:mx-0 w-full bxxs:w-[300px] xs:w-full cxs:w-[400px] sm:w-[580px] md:w-[700px] cmd:w-full xl:w-[1100px] 3xl:w-[1250px] font-supera600 text-white text-[30px] xs:text-[35px] cxs:text-[40px] sm:text-[45px] md:text-[40px] lg:text-[55px] 3xl:text-[77px] uppercase leading-tight">
                                            {banner.heading}
                                        </h1>
                                        <h3 className="max-w-[900px] text-center sm:text-left font-supera500 text-[17px] xs:text-[19px] cxs:text-[22px] sm:text-[22px] text-white capitalize mt-[16px] xs:mt-[18px] md:mt-[22px]">
                                            {banner.subheading}
                                        </h3>
                                        <div className="mx-auto sm:mx-0 w-[150px] h-[34px] sm:w-[175px] sm:h-[44px] rounded-full bg-white mt-[25px] md:mt-[40px]">
                                            <button onClick={() => window.location.href = 'tel:919988010405'} className="w-full h-full font-supera700 text-[15px] text-[#000] uppercase">
                                                Call now
                                            </button>
                                        </div>
                                        <div className='mt-[40px] md:mt-[45px] '>
                                            <ul className='flex gap-x-4 justify-center sm:justify-start'>
                                                {banners.map((_, idx) => (
                                                    <li
                                                        key={idx}
                                                        onClick={() => handlePaginationClick(idx)}
                                                        className={`cursor-pointer w-[40px] h-[4px] rounded-md ${activeIndex === idx ? 'bg-[#FD6502]' : 'bg-white'}`}
                                                    ></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <h6 className='absolute bottom-[4%] left-[50%] cmd:left-[60%] lg:left-[70%] 2xl:left-[70%] 3xl:left-[75%] translate-x-[-50%] sm:translate-x-0 sm:right-[0%] mt-4 font-supera600 text-[17px] tracking-wide whitespace-nowrap flex justify-center text-white text-center'>
                                        <span className='capitalize'>Rera No</span>
                                        <b className='font-supera600 px-0.5'>-</b>
                                        <p className='uppercase'> PBRERA-SAS79-REA1009</p>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default MainBanner;
