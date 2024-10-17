import Image from 'next/image'
import React from 'react'

function Story_card({ img, year, name, description, className, line }) {
    return (
        <div className={` relative flex justify-start items-start gap-2 w-[447px] pt-5 pb-1 pl-[22px] pr-4  ${className}`}>
            <div className='min-w-[113px] h-[129px] rounded-[4.19px]  '>
                <Image className='w-full h-full' src={img} alt="" />
            </div>
            <div>
                <p className='text-[#353535] font-supera800 text-[20px]'>{year}</p>
                <p className='text-[20.93px] text-[#1E6DA4] font-supera800 uppercase'>{name}</p>
                <p className='text-[#5A5454] text-[12.14px] leading-[17px] font-supera700 tracking-wide'>
                    {description}
                </p>
            </div>
            <div className={`${line ? 'h-[210%] flex flex-col justify-between items-center  absolute left-[100%] top-[0]' : 'hidden'} `}>
                <div className='w-3 h-3 rounded-full bg-[#1E6DA4]'></div>
                <div className='h-full border border-dashed border-[#1E6DA4]  '></div>
                <div className='w-3 h-3 rounded-full bg-[#1E6DA4]'></div>
            </div>
            <div className={`${line ? 'absolute border border-dashed border-[#1E6DA4] w-full left-0 top-[100%]' : 'hiddens'} `}></div>
        </div>
    )
}

export default Story_card
