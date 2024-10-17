'use client'
import AllProjects from '@/components/AllProjects';
import About from '@/components/About';
import Art_Construction from '@/components/Art_Construction.';
import BoardMember from '@/components/BoardMember';
import Brands from '@/components/Brands.jsx';
import Connect_Banner from '@/components/Connect_Banner';
import Counter from '@/components/Counter';
import Faq from '@/components/Faq';
import Testimonial from '@/components/Testimonial';
import WhyShusma from '@/components/WhyShusma';
import Contact from '@/components/common/Contact';
import AppBar from '@/components/common/AppBar';
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import OurserviceIcn from '../assets/images/ourservice locationicn.svg'
import WhyRealtyNivesh from '@/components/WhyRealtyNivesh';

export default function Home() {
  return (
    <div>
      <Navbar />
      <AllProjects />
      <Counter />
      <About />
      <WhyShusma />
      <div id='our-service' className='mt-10'>
        <div className="w-full bg-[#11508f] py-4 flex">
          <div className=' table whitespace-nowrap font-supera700 text-3xl uppercase tracking-wide text-[#fd6502] px-3'>
            Our Service Locations
          </div>
          <Marquee>
            <div className='flex items-center gap-x-6'>
              <div className='text-white uppercase font-supera600 text-[22px] flex items-center gap-x-2'>
                <div className='min-w-[25px] min-h-[25px] relative'>
                  <Image src={OurserviceIcn} fill />
                </div>
                Zirakpur
              </div>
              <div className='text-white uppercase font-supera600 text-[22px] flex items-center gap-x-2'>
                <div className='min-w-[25px] min-h-[25px] relative'>
                  <Image src={OurserviceIcn} fill />
                </div>
                Mohali
              </div>
              <div className='text-white uppercase font-supera600 text-[22px] flex items-center gap-x-2'>
                <div className='min-w-[25px] min-h-[25px] relative'>
                  <Image src={OurserviceIcn} fill />
                </div>
                New Chandigarh
              </div>
              <div className='text-white uppercase font-supera600 text-[22px] flex items-center gap-x-2'>
                <div className='min-w-[25px] min-h-[25px] relative'>
                  <Image src={OurserviceIcn} fill />
                </div>
                Panchkula
              </div>
              <div className='text-white uppercase font-supera600 text-[22px] flex items-center gap-x-2'>
                <div className='min-w-[25px] min-h-[25px] relative'>
                  <Image src={OurserviceIcn} fill />
                </div>
                Zirakpur
              </div>
              <div className='text-white uppercase font-supera600 text-[22px] flex items-center gap-x-2'>
                <div className='min-w-[25px] min-h-[25px] relative'>
                  <Image src={OurserviceIcn} fill />
                </div>
                Mohali
              </div>
              <div className='text-white uppercase font-supera600 text-[22px] flex items-center gap-x-2'>
                <div className='min-w-[25px] min-h-[25px] relative'>
                  <Image src={OurserviceIcn} fill />
                </div>
                New Chandigarh
              </div>
              <div className='pr-6 text-white uppercase font-supera600 text-[22px] flex items-center gap-x-2'>
                <div className='min-w-[25px] min-h-[25px] relative'>
                  <Image src={OurserviceIcn} fill />
                </div>
                Panchkula
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      <Art_Construction />
      <WhyRealtyNivesh />
      <BoardMember />
      <div className="sectionsGap">
        <div style={{ position: 'relative' }} className="w-full lg:h-[466px] h-[180px] sm:h-[230px] md:h-[300px] relative">
          <img
            src="/images/3e8b373a6df6547a50ae2cb382d18a16.png"
            alt="bannerImg"
            style={{ position: 'relative' }}
            className="w-full h-full object-cover relative"
          />
        </div>
      </div>
      <div className='hidden sm:block'>
        <Connect_Banner />
      </div>
      <Testimonial />
      <Faq />
      <Brands />
      <Contact />
      <div className='sectionsGap'>
        <div className='pt-10 md:pt-0 '>
          <h4 className='text-[29px] uppercase tracking-[3%] text-center text-[#1E6DA4] font-supera800'>Corporate office</h4>
          <div className='w-full min-h-[227px] 3xl:h-[400px]  mt-5 cmd:mt-10'>
            <iframe className='w-full h-[227px] 3xl:h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.55602512208!2d76.8092663!3d30.618283699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe9ec15cbfd03%3A0x4cb1dcaa577519c8!2sRealty%20Nivesh!5e0!3m2!1sen!2sin!4v1728539124907!5m2!1sen!2sin" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <AppBar />
      <Footer />
    </div>
  );
}
