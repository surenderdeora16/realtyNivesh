import React, { useState } from 'react'
import EnquiryForm from './common/EnquiryForm';

function Art_Construction() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Enable scrolling
    };

    return (
        <div id='rcih' className='sectionsGap lg:container mx-auto text-center '>
            {isModalOpen && <EnquiryForm heading={'We Are Excited To Meet You'} formType={'enquiry'} isOpen={isModalOpen} onClose={handleCloseModal} eventSource="Featured Projects" />}

            <div className={`text-center text-[#4B4B4B]`}>
                <h2 className='lg:text-[40px] text-[22px] sm:text-[32px] md:text-[37px] font-supera800 uppercase'>
                    Real Estate In tricity
                </h2>
                <p className={`px-1 lg:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] font-supera700 text-[#686868] capitalize`}>
                    Find Residential, Commercial & industrial  Properties
                </p>
                <p className={`mt-1 px-1 text-[10px] sm:text-[12px] md:text-[12px] lg:text-[14px] font-supera700 text-[#686868]`}>
                    NEW CHANDIGARH | MOHALI | PANCHKULA | ZIRAKPUR
                </p>
            </div>
            <div className='grid cmd:grid-cols-2 gap-5 lg:mt-10 mt-3 mx-3 xl:mx-0'>

                <div className='rounded-[13px] overflow-hidden sm:h-[372px] h-[250px] grid place-items-center text-white group ' style={{ backgroundImage: `url('/images/908591d6ce0a9de4cc9885a71d34cf63.png')` }}>
                    <div className='bg-[#11508FCC] py-3 xl:px-20 w-full h-[70px] cmd:h-[100px] lg:h-[114px] group-hover:h-[80%] bxxs:group-hover:h-[72%] cxs:group-hover:h-[64%] sm:group-hover:h-[42%] cmd:group-hover:h-[57%] lg:group-hover:h-[64%] group-hover:max-h-[500px]  overflow-hidden transition-all group-hover:overflow-visible group-hover:duration-1000 duration-1000 relative '>
                        <div className='h-full w-full flex flex-col justify-evenly'>
                            <p className='relative translate-y-[50%] group-hover:translate-y-[0%] duration-700 group-hover:duration-700 h-full uppercase cmd:text-[28px] lg:text-[33px] lg:leading-[45px] font-supera500'>
                                <span className='font-supera700 mt-2'>
                                    Residential
                                </span>
                            </p>
                            <p className=' text-[12px] md:text-[14px] lg:text-[15.82px] lg:leading-[24px] pb-2 px-4   group-hover:static opacity-0 group-hover:opacity-100 h-0 group-hover:h-full  duration-1000 group-hover:duration-1000 mt-2  font-supera500'>
                                <h6 className=' font-supera800 uppercase tracking-wider whitespace-nowrap text-[13px] lg:text-[14px]'>Discover Luxurious Living</h6>
                                Explore premium residential properties designed for comfort and modern living. From serene surroundings to top-notch amenities, find your perfect home with Realty Nivesh.
                            </p>
                            <div className="mx-auto rounded-full bg-white table opacity-0 group-hover:opacity-100 duration-1000 group-hover:duration-1000">
                                <button onClick={() => { handleOpenModal() }} className="w-full h-full px-3 py-0.5 font-supera700 text-[12px] text-[#074481cc] uppercase">
                                    Enquiry Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-[13px]  sm:h-[372px] h-[250px] grid place-items-center group overflow-hidden text-white' style={{ backgroundImage: `url('/images/a083c685dacc3cc178999bbd2187624d.png')` }}>
                    <div className='bg-[#EA6108CC] py-3 xl:px-20 w-full h-[70px] cmd:h-[100px] lg:h-[114px] group-hover:h-[80%] bxxs:group-hover:h-[72%] cxs:group-hover:h-[64%] sm:group-hover:h-[42%] cmd:group-hover:h-[57%] lg:group-hover:h-[64%] group-hover:max-h-[500px] overflow-hidden transition-all group-hover:overflow-visible group:hover:duration-700 duration-700 relative '>
                        <div className='h-full w-full flex flex-col justify-evenly'>
                            <p className='relative translate-y-[50%] group-hover:translate-y-[0%] duration-700 group-hover:duration-700 h-full uppercase cmd:text-[28px] lg:text-[33px] lg:leading-[45px] font-supera500'>
                                <span className='font-supera700 mt-2'>
                                    Commercial
                                </span>
                            </p>
                            <p className=' text-[12px] md:text-[14px] lg:text-[15.82px] lg:leading-[24px] pb-2 px-4   group-hover:static opacity-0 group-hover:opacity-100 h-0 group-hover:h-full  duration-1000 group-hover:duration-1000 mt-2  font-supera500'>
                                <h6 className='font-supera800 uppercase tracking-wider whitespace-nowrap text-[13px] lg:text-[14px]'>Elevate Your Business Space</h6>
                                Explore top commercial properties designed for growth and visibility. Whether for retail, offices, or showrooms, find the perfect space to expand your business with Realty Nivesh.
                            </p>
                            <div className="mx-auto rounded-full bg-white table opacity-0 group-hover:opacity-100 duration-1000 group-hover:duration-1000">
                                <button onClick={() => { handleOpenModal() }} className="w-full h-full px-3 py-0.5 font-supera700 text-[12px] text-[#EA6108CC] uppercase">
                                    Enquiry Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='rounded-[13px] overflow-hidden sm:h-[372px] h-[250px] grid place-items-center text-white group ' style={{ backgroundImage: `url('/images/908591d6ce0a9de4cc9885a71d34cf63.png')` }}>
                    <div className='bg-[#11508FCC] cmd:bg-[#EA6108CC] py-3 xl:px-20 w-full h-[70px] cmd:h-[100px] lg:h-[114px] group-hover:h-[80%] bxxs:group-hover:h-[72%] cxs:group-hover:h-[64%] sm:group-hover:h-[42%] cmd:group-hover:h-[57%] lg:group-hover:h-[64%] group-hover:max-h-[500px] overflow-hidden transition-all group-hover:overflow-visible group:hover:duration-700 duration-700 relative '>
                        <div className='h-full w-full flex flex-col justify-evenly'>
                            <p className='relative translate-y-[50%] group-hover:translate-y-[0%] duration-700 group-hover:duration-700 h-full uppercase cmd:text-[28px] lg:text-[33px] lg:leading-[45px] font-supera500'>
                                <span className='font-supera700 mt-2'>
                                    Industrial
                                </span>
                            </p>
                            <p className=' text-[12px] md:text-[14px] lg:text-[15.82px] lg:leading-[24px] pb-2 px-4   group-hover:static opacity-0 group-hover:opacity-100 h-0 group-hover:h-full  duration-1000 group-hover:duration-1000 mt-2  font-supera500'>
                                <h6 className='font-supera800 uppercase tracking-wider whitespace-nowrap text-[13px] lg:text-[14px]'>Power Your Business with Prime Industrial Spaces</h6>
                                Explore well-connected and strategically located industrial properties, perfect for manufacturing, warehousing, and logistics. Realty Nivesh offers industrial spaces designed to boost efficiency and growth.
                            </p>
                            <div className="mx-auto rounded-full bg-white table opacity-0 group-hover:opacity-100 duration-1000 group-hover:duration-1000">
                                <button onClick={() => { handleOpenModal() }} className="w-full h-full px-3 py-0.5 font-supera700 text-[12px] text-[#074481cc] cmd:text-[#EA6108CC] uppercase">
                                    Enquiry Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-[13px]  sm:h-[372px] h-[250px] grid place-items-center group overflow-hidden text-white' style={{ backgroundImage: `url('/images/a083c685dacc3cc178999bbd2187624d.png')` }}>
                    <div className='bg-[#EA6108CC] cmd:bg-[#11508FCC] py-3 xl:px-20 w-full h-[70px] cmd:h-[100px] lg:h-[114px] group-hover:h-[80%] bxxs:group-hover:h-[72%] cxs:group-hover:h-[64%] sm:group-hover:h-[42%] cmd:group-hover:h-[57%] lg:group-hover:h-[64%] group-hover:max-h-[500px] overflow-hidden transition-all group-hover:overflow-visible group:hover:duration-700 duration-700 relative '>
                        <div className='h-full w-full flex flex-col justify-evenly'>
                            <p className='relative translate-y-[50%] group-hover:translate-y-[0%] duration-700 group-hover:duration-700 h-full uppercase cmd:text-[28px] lg:text-[33px] lg:leading-[45px] font-supera500'>
                                <span className='font-supera700 mt-2'>
                                    Hospitality
                                </span>
                            </p>
                            <p className=' text-[12px] md:text-[14px] lg:text-[15.82px] lg:leading-[24px] pb-2 px-4   group-hover:static opacity-0 group-hover:opacity-100 h-0 group-hover:h-full  duration-1000 group-hover:duration-1000 mt-2  font-supera500'>
                                <h6 className='font-supera800 uppercase tracking-wider whitespace-nowrap text-[13px] lg:text-[14px]'>Invest in Premium Hospitality Spaces</h6>
                                Explore exclusive hospitality properties perfect for hotels, resorts, and serviced apartments. With prime locations and high footfall potential, Realty Nivesh offers the ideal space for your next hospitality venture.
                            </p>
                            <div className="mx-auto rounded-full bg-white table opacity-0 group-hover:opacity-100 duration-1000 group-hover:duration-1000">
                                <button onClick={() => { handleOpenModal() }} className="w-full h-full px-3 py-0.5 font-supera700 text-[12px] text-[#EA6108CC] cmd:text-[#074481cc] uppercase">
                                    Enquiry Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art_Construction
