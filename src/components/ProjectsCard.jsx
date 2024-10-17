import { CiLocationOn } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EnquiryForm from "./common/EnquiryForm";

function ProjectsCard({ propertyData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [heading, setHeading] = useState()
    const [modalLogo, setModalLogo] = useState()

    const handleOpenModal = (heading, logo) => {
        setHeading(heading)
        setModalLogo(logo)
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Enable scrolling
    };
    return (
        <div className="project-cards-sectionslider w-full lg:mx-auto flex justify-center  mt-1 xl:mt-4 px-2 cxs:px-4 md:pl-4 xl:pl-8 xl:px-[40px] 2xl:px-[55px]">
            {isModalOpen && <EnquiryForm formType={'enquiry'} heading={heading} propertyLogo={modalLogo} isOpen={isModalOpen} onClose={handleCloseModal} eventSource={`${heading} Offer Cards`} />}

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1441: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper  py-4 cxs:py-[17px] xl:py-[5px] 2xl:py-[5px]"
                style={{ display: 'flex', justifyContent: 'evenly', alignItems: 'flex-start', width: '100%', margin: '0px auto' }}
            >
                {propertyData && Array.isArray(propertyData) && propertyData?.length > 0 ? (
                    propertyData?.map((property, index) => (
                        <SwiperSlide  key={index} className=" w-full">
                            <Link href={property?.url || '#offer'} target={property?.url === '' ? undefined : '_blank'} onClick={() => { property?.url ? '' : handleOpenModal(property?.heading, property?.logo) }} className={` mx-auto flex w-full h-[140px] 2xl:h-[150px] 3xl:h-[185px] rounded-[10px] shadow-[0px_0px_3.74px_2.8px_#00000040]  `}>
                                <div className="w-[160px] xl:w-[200px] 3xl:w-[53%] h-full rounded-l-[10px] relative overflow-hidden group">
                                    <Image
                                        src={property?.propertyImg}
                                        alt="img"
                                        className=" w-full h-full object-cover hover:scale-125 hover:duration-1000 duration-1000"
                                    />
                                </div>
                                <div className=" rounded-r-[8px]  pl-2 3xl:pl-3 bxxs:pl-5 sm:pl-2 pr-1">
                                    <div className="w-[100px] 3xl:w-[130px] h-[35px] 3xl:h-[40px] overflow-hidden mt-4 ml-2 relative  pb-0">
                                        <Image
                                            src={property?.logo}
                                            layout="intrinsic"
                                            alt={property?.heading}
                                            width={130} 
                                            height={30} 
                                            className="object-contain object-center"
                                            priority={false} loading="lazy"
                                        />
                                    </div>
                                    <div className=" w-full mt-2 3xl:mt-6">
                                        <h2 className="xl:mt-2 pr-2 3xl:pr-1.5 pl-2 3xl:pl-3 text-[15px] bxxs:text-[18px] sm:text-[18.5px] md:text-[20px] lg:text-[16px] 2xl:text-[21px] 3xl:text-[23px] text-[#1E6DA4] font-supera800 uppercase leading-tight">{property?.heading}</h2>
                                        <p className="capitalize mt-1  pl-2  text-[10px] sm:text-[11.5px] lg:text-[11px] xl:text-[13.82px] text-[#5A5D5F] font-supera700 flex justify-start items-center leading-tight gap-2">
                                            <span className="text-[17px] text-[#1E6DA4] "> <CiLocationOn /></span> {property?.location}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))) : (
                    <></>
                )}
            </Swiper>
        </div>

    )
}

export default ProjectsCard

