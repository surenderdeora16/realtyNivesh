import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

function ClientCard({ name, img, title, discription }) {
    return (
        <div className='relative '>
            <div className={`card-container duration-600 bg-white text-[#747373] font-light xl:text-[14.01px] 3xl:text-[15px] xl:leading-[22px] text-[10px] cmd:text-[12px] shadow-[0px_-2px_50.1px_0px_#00000017,0px_116px_70px_0px_#0000000D,0px_323px_90px_0px_#00000000] rounded-[14.86px]  `}>
                <p className='font-semibold sm:font-normal px-2 cmd:px-5 xl:px-5 pt-4 xl:pt-6 pb-10 text-center   tracking-wide sm:tracking-[0.5px] capitalize'>
                    {discription}
                </p>
            </div>
            <div className='absolute left-[50%] translate-x-[-50%] top-[95%] xs:top-[90%] cxs:top-[85%] cmd:top-[85%]  '>
                <div className={`w-[70px] h-[70px] md:w-[90px] md:h-[90px] cmd:w-[100px] cmd:h-[100px] rounded-full overflow-hidden mx-auto relative`}>
                    <Image
                        src={img}
                        alt=""
                        layout="responsive"
                        width={100}
                        height={100}
                        className='object-cover'
                        priority={false} loading="lazy" 
                    />
                </div>
                <div className='text-center lg:mt-4 mt-1'>
                    <p className='sm:text-[22px] lg:text-[24px] text-[15px] font-supera800 text-[#1E6DA4] '>{name}</p>
                    <p className='text-[9.65px] text-[#636363] pb-1 sm:pb-2'>{title}</p>
                    <div className='text-[#FBB245] flex gap-1 md:gap-2 lg:gap-3 justify-center items-center text-[16px]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientCard
