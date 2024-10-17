import React from 'react'

function News_card({ img }) {
    return (
        <div className='group w-full'>
            <div className='rounded-[10.4px] w-full lg:h-[280px] h-[170px] xs:h-[240px] md:h-[240px] overflow-hidden'>
                <div
                    className='w-full h-full group-hover:scale-105 group-hover:duration-1000 duration-1000 bg-center bg-cover border-[1.73px] border-transparent overflow-hidden rounded-[10.4px]'
                >
                    <img
                        src={img?.src || img}
                        alt=""
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
            <div className='text-start pt-4 sm:pt-2'>
                <p className='text-[13px] lg:text-[12px] xl:text-[15px] text-[#1E6DA4] font-supera700'>
                    Nov 11, 2023
                </p>
                <p className='text-[14px] xs:text-[16px] sm:text-[12px] lg:text-[13px] tracking-wide xl:text-[17px]  text-[#3F4041] font-supera800 lg:pe-20'>
                    What is a Short-Term Apartment Rentals? | Confident Group
                </p>
            </div>

        </div>
    )
}

export default News_card
