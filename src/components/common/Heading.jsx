import React from 'react'

function Heading({heading, para, className, color}) {
    return (
        <div className={`text-center pb-6 md:pb-10 lg:pb-16  ${className} `}>
            <h1 className='lg:text-[40px] text-[22px] sm:text-[32px] md:text-[37px] font-supera800 uppercase'>
                {heading}
            </h1>
            <p className={`px-1 lg:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] font-supera700 ${color ? `${color}` : `text-[#5A5454]`}`}>
                {para}
            </p>
        </div>
    )
}

export default Heading
