import Heading from './common/Heading'
import Marquee from "react-fast-marquee";

import img1 from "../assets/images/associateimg1.jpg"
import img2 from "../assets/images/associateimg2.png"
import img3 from "../assets/images/associateimg3.jpg"
import img4 from "../assets/images/associateimg4.png"
import img5 from "../assets/images/associateimg5.png"
import img6 from "../assets/images/associateimg6.png"
import Image from 'next/image';

export default function Brands() {

    let brand = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6]

    return (
        <div id='associate-builders' className="sectionsGap  lg:max-w-[1250px] sm:mx-auto">
            <Heading
                heading="associated BRANDs with us !"
                para="Within the premises of the Sushma Township are reputed Schools."
                className="text-[#1E6DA4] pb-10"
            />
            <Marquee>
                <div className="lg:-mt-4 pl-10 pb-8 mx-auto  w-full flex justify-center items-center  gap-x-10 md:gap-x-20 lg:gap-x-24">
                    {
                        brand.map((item, index) => (
                            <div key={index} className="mx-auto lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] w-[100px] h-[100px]  relative flex items-center">
                                <Image
                                    src={item}
                                    alt=""
                                    layout="responsive"
                                    width={150}
                                    height={150}
                                    className="object-contain"
                                    priority={false} loading="lazy" 
                                />
                            </div>
                        ))
                    }
                </div>
            </Marquee>
        </div>
    )
}
