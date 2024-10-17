import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";

function Blog_card({ img }) {
    return (
        <div className="cursor-pointer group rounded-[13.19px] shadow-[0px_10.8px_23.51px_0px_#0000001A] overflow-hidden ">
            <div className={`group-hover:scale-105 group-hover:duration-1000 duration-1000 w-full h-[180px] cxs:h-[240px] sm:h-[221px] relative`}>
                <img
                    src={img}
                    alt="img"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <div className='flex justify-start items-center gap-1'>
                    <div className='w-[25px] h-[25px] rounded-full overflow-hidden bg-[#F2F4F8] flex justify-center items-center mr-1.5'>
                        <CiCalendar className="text-[#3A4E5F] text-[15px] sm:text-[18px]" />
                    </div>
                    <p className='tracking-wide text-[9px] sm:text-[10px] cmd:text-[12px] text-[#6F6D6D] font-supera700 text-left'>
                        Published on June 20,2023
                    </p>
                </div>
                <h1 className="lg:text-[16px] text-[14px] sm:text-[15px]   text-[#494A4A] font-supera800 text-start pt-2 ">
                    What is a Short-Term Apartment Rentals? | Confident Group
                </h1>
                <p className="hidden cmd:block mt-3 lg:text-[14px] text-[7px] sm:text-[9px] md:text-[12px]  text-[#6F6D6D] font-supera700 tracking-wide text-start">
                    Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette  all over top.
                </p>

                <button
                    type="button"
                    className="mt-4 text-white cxs:text-[#1E6DA4]  sm:text-[12.55px] text-[11px] tracking-wide font-supera800 flex justify-center items-center gap-2 py-1 md:py-2 px-2 cxs:px-3 rounded-[5.26px] cxs:border-[0.75px] border-[#B7B7B7] bg-[#1E6DA4] cxs:bg-[#fff] cxs:hover:bg-[#1E6DA4] cxs:hover:text-white "
                >
                    Read More <BsArrowRightShort className='text-[18px]' />
                </button>
            </div>

        </div>
    )
}

export default Blog_card


