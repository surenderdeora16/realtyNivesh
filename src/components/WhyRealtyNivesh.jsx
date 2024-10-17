import Image from 'next/image'
import React from 'react'
import Heading from './common/Heading'
import Img1 from '../assets/images/whyRNIMg1.svg'
import Img2 from '../assets/images/whyRNIMg2.svg'
import Img3 from '../assets/images/whyRNIMg3.svg'
import Img4 from '../assets/images/whyRNIMg4.svg'
import Img5 from '../assets/images/whyRNIMg5.svg'
import Img6 from '../assets/images/whyRNIMg6.svg'
import Marquee from 'react-fast-marquee'



const WhyRealtyNivesh = () => {
    return (
        <div id='why-realtynivesh' className='sectionsGap'>
            <Heading
                heading="why realty nivesh"
                className="text-[#4B4B4B]"
            />
            <div className='w-full bg-[#393939] '>
                <div className='w-full'>
                    <Marquee className='w-full max-w-[1400px] mx-auto'>
                        <ul className=' py-7 mx-auto flex gap-x-10'>
                            <li className='table pl-7'>
                                <div className='flex items-center gap-x-2 relative'>
                                    <div>
                                        <svg width="39" height="62" viewBox="0 0 39 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.2218 50.9038C8.74782 49.4654 6.84914 47.4517 5.46829 44.8626C4.08743 42.331 3.397 39.3967 3.397 36.0596V28.1772C3.397 24.9553 4.08743 22.0209 5.46829 19.4318C6.84914 16.8427 8.74782 14.829 11.1643 13.3906C13.5808 11.9522 16.4001 11.2042 19.5645 11.2042C22.6714 11.2042 25.4331 11.9522 27.9072 13.3906C30.3237 14.829 32.2223 16.8427 33.6032 19.4318C34.9841 22.0209 35.6745 24.9553 35.6745 28.1772V36.0596C35.6745 39.3392 34.9841 42.2735 33.6032 44.8626C32.2223 47.4517 30.2661 49.4654 27.8496 50.9038C25.4331 52.3997 22.6714 53.0902 19.5645 53.0902C16.4576 53.0902 13.6383 52.3997 11.2218 50.9038ZM25.4907 42.9639C26.9866 41.2378 27.7346 38.9364 27.7346 36.0596V28.1772C27.7346 25.3005 26.9866 23.0566 25.4907 21.3305C23.9948 19.662 22.0385 18.7989 19.5645 18.7989C17.0329 18.7989 14.9617 19.662 13.4657 21.3305C11.9698 23.0566 11.2218 25.3005 11.2218 28.1772V36.0596C11.2218 38.9364 11.9698 41.2378 13.4657 42.9639C14.9617 44.69 17.0329 45.4955 19.5645 45.4955C22.0385 45.4955 23.9948 44.69 25.4907 42.9639Z" fill="white" />
                                            <path d="M16.2097 31.1407C15.8724 30.9533 15.61 30.6909 15.4226 30.3661C15.2352 30.0413 15.1478 29.679 15.1478 29.2792C15.1478 28.8794 15.2352 28.5171 15.4351 28.1923C15.6225 27.8675 15.8849 27.6176 16.2222 27.4302C16.547 27.2553 16.9218 27.1554 17.3341 27.1554C17.7338 27.1554 18.1086 27.2553 18.4335 27.4427C18.7583 27.6301 19.0206 27.88 19.208 28.2048C19.3954 28.5296 19.4954 28.8919 19.4954 29.2792C19.4954 29.6915 19.3954 30.0538 19.2205 30.3786C19.0331 30.7034 18.7708 30.9658 18.446 31.1407C18.1211 31.3281 17.7463 31.4155 17.3341 31.4155C16.9093 31.4155 16.5345 31.3281 16.2097 31.1407ZM16.0972 36.0755H14.9853L23.0185 27.3303H24.1428L16.0972 36.0755ZM17.9337 29.9039C18.0961 29.7415 18.1836 29.5291 18.1836 29.2792C18.1836 29.0418 18.0961 28.8419 17.9337 28.667C17.7713 28.5046 17.5714 28.4172 17.3216 28.4172C17.0717 28.4172 16.8593 28.5046 16.7094 28.667C16.547 28.8419 16.472 29.0418 16.472 29.2792C16.472 29.5291 16.547 29.7415 16.7094 29.9039C16.8718 30.0788 17.0717 30.1537 17.3216 30.1537C17.5714 30.1537 17.7713 30.0788 17.9337 29.9039ZM20.6198 35.9756C20.2825 35.7882 20.0201 35.5383 19.8327 35.2135C19.6453 34.8886 19.5578 34.5263 19.5578 34.1266C19.5578 33.7268 19.6453 33.3645 19.8452 33.0397C20.0326 32.7148 20.2949 32.465 20.6323 32.2776C20.9571 32.0902 21.3319 31.9902 21.7442 31.9902C22.1439 31.9902 22.5187 32.0902 22.8436 32.2776C23.1684 32.465 23.4307 32.7148 23.6181 33.0397C23.8055 33.3645 23.9055 33.7268 23.9055 34.1266C23.9055 34.5263 23.8055 34.8886 23.6306 35.2135C23.4432 35.5383 23.1809 35.8007 22.856 35.9756C22.5312 36.163 22.1564 36.2504 21.7442 36.2504C21.3194 36.2504 20.9446 36.163 20.6198 35.9756ZM22.3438 34.7387C22.5062 34.5763 22.5937 34.3764 22.5937 34.1266C22.5937 33.8767 22.5062 33.6768 22.3438 33.5019C22.1814 33.3395 21.9815 33.252 21.7317 33.252C21.4818 33.252 21.2694 33.3395 21.1195 33.5144C20.9571 33.6893 20.8821 33.8892 20.8821 34.1266C20.8821 34.3764 20.9571 34.5763 21.1195 34.7387C21.2819 34.9136 21.4818 34.9886 21.7317 34.9886C21.9815 34.9886 22.1814 34.9136 22.3438 34.7387Z" fill="white" />
                                        </svg>
                                    </div>
                                    <h4 className='uppercase font-supera700 text-[17px] text-[#fff] leading-tight tracking-[1.1px]'>
                                        Zero % <br />
                                        Brokerage Fees*
                                    </h4>
                                    <div className='absolute w-[1px] h-[95%] bg-white top-[50%] translate-y-[-50%] left-[110%] rotate-[25deg]'></div>
                                </div>
                            </li>
                            <li className='table'>
                                <div className='flex items-center gap-x-2 relative'>
                                    <div className='relative w-[40px] h-[60px] flex items-center '>
                                        <Image src={Img1} objectFit="contain" fill objectPosition="center" quality={100} alt='' />
                                    </div>
                                    <h4 className='uppercase font-supera700 text-[17px] text-[#fff] leading-tight'>
                                        Lowest Price <br /> guaranteed
                                    </h4>
                                    <div className='absolute w-[1px] h-[95%] bg-white top-[50%] translate-y-[-50%] left-[110%] rotate-[25deg]'></div>
                                </div>
                            </li>
                            <li className='table'>
                                <div className='flex items-center gap-x-2 relative'>
                                    <div className='relative w-[40px] h-[60px] flex items-center'>
                                        <Image src={Img2} objectFit="contain" fill objectPosition="center" quality={100} alt='' />
                                    </div>
                                    <h4 className='uppercase font-supera700 text-[17px] text-[#fff] leading-tight'>
                                        comparative <br /> market analysis
                                    </h4>
                                    <div className='absolute w-[1px] h-[95%] bg-white top-[50%] translate-y-[-50%] left-[110%] rotate-[25deg]'></div>
                                </div>
                            </li>
                            <li className='table'>
                                <div className='flex items-center gap-x-2 relative'>
                                    <div className='relative w-[40px] h-[60px] flex items-center'>
                                        <Image src={Img3} objectFit="contain" fill objectPosition="center" quality={100} alt='' />
                                    </div>
                                    <h4 className='uppercase font-supera700 text-[17px] text-[#fff] leading-tight'>
                                        exclusive <br /> inventory
                                    </h4>
                                    <div className='absolute w-[1px] h-[95%] bg-white top-[50%] translate-y-[-50%] left-[110%] rotate-[25deg]'></div>
                                </div>
                            </li>
                            <li className='table'>
                                <div className='flex items-center gap-x-2 relative'>
                                    <div className='relative w-[40px] h-[60px] flex items-center'>
                                        <Image src={Img4} objectFit="contain" fill objectPosition="center" quality={100} alt='' />
                                    </div>
                                    <h4 className='uppercase font-supera700 text-[17px] text-[#fff] leading-tight'>
                                        project <br /> site visits
                                    </h4>
                                    <div className='absolute w-[1px] h-[95%] bg-white top-[50%] translate-y-[-50%] left-[110%] rotate-[25deg]'></div>
                                </div>
                            </li>
                            <li className='table'>
                                <div className='flex items-center gap-x-2 relative'>
                                    <div className='relative w-[40px] h-[60px] flex items-center'>
                                        <Image src={Img5} objectFit="contain" fill objectPosition="center" quality={100} alt='' />
                                    </div>
                                    <h4 className='uppercase font-supera700 text-[17px] text-[#fff] leading-tight'>
                                        home loans <br /> insurance
                                    </h4>
                                    <div className='absolute w-[1px] h-[95%] bg-white top-[50%] translate-y-[-50%] left-[110%] rotate-[25deg]'></div>
                                </div>
                            </li>
                            <li className='table'>
                                <div className='flex items-center gap-x-2 relative'>
                                    <div className='relative w-[40px] h-[60px] flex items-center'>
                                        <Image src={Img6} objectFit="contain" fill objectPosition="center" quality={100} alt='' />
                                    </div>
                                    <h4 className='uppercase font-supera700 text-[17px] text-[#fff] leading-tight'>
                                        post sales <br /> service
                                    </h4>
                                    <div className='absolute w-[1px] h-[95%] bg-white top-[50%] translate-y-[-50%] left-[110%] rotate-[25deg]'></div>
                                </div>
                            </li>
                        </ul>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default WhyRealtyNivesh