import Heading from './common/Heading'
import Marquee from "react-fast-marquee";

import img1 from "../assets/images/associateimg1.jpg"
import img2 from "../assets/images/associateimg2.png"
import img3 from "../assets/images/associateimg3.jpg"
import img4 from "../assets/images/associateimg4.png"
import img5 from "../assets/images/associateimg5.png"
import img6 from "../assets/images/associateimg6.png"
import img7 from "../assets/images/associateimg7.png"
import img8 from "../assets/images/associateimg8.jpg"

import img9 from "../assets/images/associateimg9.png"
import img10 from "../assets/images/associateimg10.png"
import img11 from "../assets/images/associateimg11.png"
import img12 from "../assets/images/associateimg12.png"

import Image from 'next/image';

export default function Brands() {

    let brand = [img7, img10, img9, img4, img6, img11, img8, img5, img2, img3, img1, img12, img7, img10, img9, img4, img6, img11, img8, img5, img2, img3, img1, img12]

    return (
        <div id="our-association" className="sectionsGap  lg:max-w-[1250px] sm:mx-auto">
            <Heading
                heading="Our Association"
                className="text-[#464646] pb-10"
            />
            <Marquee>
                <div className="lg:-mt-4 pl-10 pb-8 mx-auto  w-full flex justify-center items-center  gap-x-5">
                    {
                        brand.map((item, index) => (
                            <div key={index} className="mt-5 p-1 mx-auto  w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] relative flex items-center shadow-[0px_0px_7px_0px_#00000030]">
                                <Image
                                    src={item}
                                    alt=""
                                    fill
                                    objectFit="contain"
                                    className="object-contain px-2"
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
