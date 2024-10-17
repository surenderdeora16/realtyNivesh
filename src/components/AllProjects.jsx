'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import BannerImg1 from '../assets/images/topbannerimg1.png';
import BannerImg2 from '../assets/images/topbannerimg2.png'; // Add more images as needed
import BannerImg3 from '../assets/images/topbannerimg3.png'; // Add more images as needed
import { Pagination } from 'swiper/modules';

const MainBanner = () => {

    // Dynamic banner images or content
    const banners = [
        { id: 1, img: BannerImg1, heading: 'Your Trusted Real Estate Investment Partner.', subheading: 'Expert Guidance for Smart Property Investments in North India.' },
        { id: 2, img: BannerImg2, heading: 'Invest in Your Future Invest in Real Estate', subheading: 'Secure your tomorrow by making smart real estate investments today. Explore premium properties in Mohali, Zirakpur, and beyond.' },
        { id: 3, img: BannerImg3, heading: 'Real Estate Excellence – Where Trust Meets Opportunity!', subheading: 'With 15 years of experience, Realty Nivesh ensures transparency, trust, and unmatched deals in real estate.' },
        // Add more banners as needed
    ];

    return (
        <section className="w-full h-screen relative">

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} w-3 h-3 bg-white rounded-full opacity-50 inline-block mx-1 transition-all duration-300"></span>`;
                    },
                }} // Custom pagination with Tailwind classes
                modules={[Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Optional: for auto-sliding
                className="w-full h-full"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className="relative w-full h-full">
                            <Image src={banner.img} fill className="w-full h-full object-cover" alt={`Banner ${banner.id}`} />

                            {/* Overlay content */}
                            <div className="w-full h-full absolute top-0 left-0 bg-[linear-gradient(360deg,_rgba(14,_13,_13,_0)_0%,_#0A0A0A_98.61%)]">
                                <div className="px-5 xs:px-10 cmd:px-14 lg:px-6 xl:px-16 3xl:px-4 w-full h-full flex flex-col justify-center sm:justify-center items-start">
                                    <div className="2xl:container mx-auto sm:mx-0 2xl:mx-auto   ">
                                        {/* Heading */}
                                        <h1 className="text-center sm:text-left w-full bxxs:w-[300px] xs:w-full cxs:w-[400px] sm:w-[580px] md:w-[631px] lg:w-[800px] 2xl:w-[1100px] font-supera600 text-white text-[30px] xs:text-[35px] cxs:text-[40px] sm:text-[50px] md:text-[50px] lg:text-[60px] 2xl:text-[77px] uppercase leading-tight">
                                            {banner.heading}
                                        </h1>
                                        {/* Subheading */}
                                        <h3 className="max-w-[900px] text-center sm:text-left font-supera500 text-[17px] xs:text-[19px] cxs:text-[22px] sm:text-[25px] text-white capitalize mt-[16px] xs:mt-[18px] md:mt-[22px]">
                                            {banner.subheading}
                                        </h3>
                                        {/* Button */}
                                        <div className="mx-auto sm:mx-0 w-[150px] h-[34px] sm:w-[175px] sm:h-[44px] rounded-full bg-white mt-[25px] md:mt-[40px]">
                                            <button onClick={() => window.location.href = 'tel:919988010405'} className="w-full h-full font-supera700 text-[15px] text-[#000] uppercase">
                                                Call now
                                            </button>
                                        </div>
                                    </div>
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
