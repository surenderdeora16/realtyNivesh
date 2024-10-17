'use client'
import React, { useState } from 'react'
import Heading from './common/Heading'
import faqImg from "../assets/images/9500423e943f26118d254c27a17d48bb.png";
import Image from 'next/image';

function Faq() {

    const [isActiveFaq, setIsActiveFaq] = useState(-1)

    let faqData = [
        {
            faqQues: "What services does Realty Nivesh offer ?",
            faqAns: "Realty Nivesh provides a range of real estate services, including the sale and marketing of residential, commercial, industrial, and hospitality properties. They specialize in helping clients find properties that suit their needs, whether it’s for investment or personal use. Their services include property consultation, market analysis, and personalized recommendations based on client requirements."
        },
        {
            faqQues: "In which areas does Realty Nivesh operate ?",
            faqAns: "Realty Nivesh operates primarily in Zirakpur, Mohali, New Chandigarh, and surrounding regions. They offer expertise in these locations, working with top builders and developers to ensure clients have access to prime properties in these rapidly growing markets."
        },
        {
            faqQues: "How long has Realty Nivesh been in the real estate industry ?",
            faqAns: "Realty Nivesh has over 15 years of experience in the real estate industry. During this time, they have successfully helped numerous clients, including HNI (High Net-worth Individuals) and corporate employees, to find ideal investment properties and homes."
        },
        {
            faqQues: "Why should I choose Realty Nivesh for my real estate needs ?",
            faqAns: "Realty Nivesh is known for its transparency, honest dealings, and deep expertise in the regional property market. Their consultants offer personalized services, ensuring that each client’s specific needs are met. They also focus on providing the best deals and making sure that clients invest in the right location, with the right builder, and in projects that align with their financial goals."
        },
        {
            faqQues: "How does Realty Nivesh ensure transparency in its dealings ?",
            faqAns: "Realty Nivesh ensures transparency by keeping clients informed at every stage of the property buying process. They provide clear information on pricing, property features, and market conditions. Additionally, they work with trusted builders and developers to ensure all legal and contractual aspects are well-managed."
        },
        {
            faqQues: "Does Realty Nivesh provide property investment consultation ?",
            faqAns: "Yes, Realty Nivesh offers expert consultation on real estate investments, helping clients choose properties that promise high returns and long-term value. They assist in identifying the right investment opportunities based on market trends and client financial goals."
        },
        {
            faqQues: "How can I get in touch with Realty Nivesh ?",
            faqAns: "You can get in touch with Realty Nivesh through their website, phone, or email. They offer free property consultations and are available for site visits to help you explore potential investments."
        }
    ]

    const handleFaqToggle = (index) => {
        // Toggle the FAQ item: if the index is already active, close it (set to -1); otherwise, set it as active
        setIsActiveFaq(isActiveFaq === index ? -1 : index);
    };

    return (
        <div id='FAQ' className='pt-5  sm:pt-0'>
            <Heading
                heading="FAQ’s"
                className="text-[#1E6DA4]"
                color="text-[#5A5454]"
            />
            <div className='-mt-4 md:-mt-6 lg:-mt-6 lg:flex justify-between items-center lg:h-[426px]  '>
                <div className='lg:basis-[68%] px-2  lg:ps-24 w-full h-full overflow-y-auto flex flex-col justify-between faq_scroll_bar'>
                    {
                        faqData.map((item, index) => (
                            <div key={index} className={`border cursor-pointer text-[#1E6DA4] rounded-[4px]  px-3 md:px-6 flex justify-between items-center mb-2  ${isActiveFaq == index ? "bg-[#1E6DA4] text-white py-4" : "border-[#FD6502] text-[#1E6DA4] bg-white py-4  font-supera800"}`} onClick={() => { handleFaqToggle(index)}}>
                                <div className='w-full xl:basis-[80%]' >
                                    <p className='sm:text-[15.96px]  text-[12px] cxs:text-[13px]   font-supera700 tracking-wide'>
                                        {index + 1}. {item.faqQues}
                                    </p>
                                    <p className={`tracking-[1.1px] sm:text-[14px] text-[10px] cxs:text-[12px] font-supera400  text-wrap pe-6 pt-4 pb-3 ${isActiveFaq == index ? "block" : "hidden"} `}>
                                        {item.faqAns}
                                    </p>
                                </div>
                                <div className={`mx-2
                                    ${isActiveFaq == index ? "fill-[#fff] stroke-[#fff] w-[51.68px] h-[52.44px] rotate-90 duration-700" : "w-[28.79px] h-[27.61px] fill-[#1E6DA4] stroke-[#1E6DA4]  rotate-0 duration-300"}`}>
                                    <svg className='w-full h-full' viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_1_2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="52" height="51">
                                            <path d="M38.3601 3.47328C43.7799 6.58858 47.8623 11.5767 49.8321 17.4906C51.8018 23.4046 51.5218 29.8327 49.0453 35.5547C46.5687 41.2767 42.068 45.8943 36.3976 48.5308C30.7272 51.1673 24.2817 51.6394 18.2848 49.8571C12.288 48.0749 7.15711 44.1627 3.8663 38.863C0.575487 33.5633 -0.646184 27.2451 0.433195 21.1079C1.51258 14.9707 4.81787 9.44162 9.72162 5.57036C14.6254 1.69911 20.7861 -0.244856 27.0345 0.107495L25.5902 25.4932L38.3601 3.47328Z" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_1_2)">
                                            <path d="M25.5902 48.7436C38.4884 48.7436 48.9444 38.334 48.9444 25.4932C48.9444 12.6523 38.4884 2.24268 25.5902 2.24268C12.6921 2.24268 2.23607 12.6523 2.23607 25.4932C2.23607 38.334 12.6921 48.7436 25.5902 48.7436Z" stroke="" strokeWidth="0.75996" />
                                        </g>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M29.0381 31.5506C29.2621 31.5506 29.4437 31.3699 29.4437 31.1469C29.4437 30.9587 29.5458 30.6627 29.7635 30.2809C29.9726 29.9138 30.2576 29.5201 30.5518 29.1525C31.2998 28.2175 32.19 27.4047 33.2056 26.7859C33.5912 26.5509 34.0103 26.3257 34.4204 26.1601C34.835 25.9928 35.2145 25.897 35.5282 25.897V25.0894C35.2145 25.0894 34.8352 24.9937 34.4207 24.8263C34.0107 24.6608 33.5916 24.4355 33.2054 24.2005C32.1899 23.5825 31.3 22.77 30.5522 21.8336C30.2579 21.4663 29.9725 21.0727 29.7634 20.7059C29.5459 20.3246 29.4437 20.0286 29.4437 19.8396C29.4437 19.6166 29.2621 19.4357 29.0381 19.4357C28.814 19.4357 28.6324 19.6166 28.6324 19.8396C28.6324 20.2499 28.8276 20.701 29.0579 21.1047C29.2964 21.5228 29.6098 21.9526 29.9172 22.3363C30.7173 23.3383 31.677 24.2169 32.7822 24.8896C32.8923 24.9566 33.0061 25.0236 33.1228 25.0894H16.0578C15.8338 25.0894 15.6523 25.2702 15.6523 25.4932C15.6523 25.7162 15.8338 25.897 16.0578 25.897H33.1225C33.0059 25.9629 32.8921 26.0299 32.7821 26.0969C31.677 26.7703 30.7174 27.649 29.9174 28.6492C29.6098 29.0333 29.2964 29.4639 29.0579 29.8823C28.8276 30.2862 28.6324 30.7373 28.6324 31.1469C28.6324 31.3699 28.814 31.5506 29.0381 31.5506Z" fill="#F2FAFF" />
                                    </svg>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='hidden lg:flex basis-[30%] h-full relative'>
                    <Image
                        src={faqImg}
                        alt=""
                        layout="responsive"
                        width={800} // Adjust based on the aspect ratio of your image
                        height={600} // Adjust based on the aspect ratio of your image
                        className='object-cover'
                        priority={false} loading="lazy" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Faq
