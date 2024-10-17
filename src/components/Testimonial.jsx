'use client'
import React from 'react'
import Heading from './common/Heading'
import ClientCard from './ClientCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import TestimonalImg1 from "../assets/images/testimonalIMG1.jpg"
import TestimonalImg2 from "../assets/images/jitendraTestimonal.png"
import TestimonalImg3 from "../assets/images/karantestimonal.png"
import TestimonalImg4 from "../assets/images/user.png"
import TestimonalImg5 from "../assets/images/subhammitalimg.png"


function Testimonial() {

  return (
    <div className='sectionsGap testimonal-slider'>
      <Heading
        heading="What Our Clients Say "
        para="Client Testimonials"
        className="text-[#4B4B4B]"
      />
      <div className="slider-container w-full overflow-hidden  lg:h-[580px]  shusma_group_home_testimonial ">
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1500}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
              centeredSlides: false
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
              centeredSlides: true
            },
            888: {
              slidesPerView: 3,
              spaceBetween: 40,
              centeredSlides:true
            },
            1441: {
              slidesPerView: 3,
              spaceBetween: 40,
              centeredSlides: true
            },

          }}
          modules={[Autoplay]}
          className="mySwiper"
          style={{ display: 'flex' }}
        >

          <SwiperSlide>
            <ClientCard name={'Dinesh Minocha'} img={TestimonalImg1} title={"Zirakpur"} discription={"We had been looking for the perfect property in Zirakpur for a while, and thanks to Realty Nivesh, we finally found our dream home! Their team is incredibly professional, transparent, and made the entire process hassle-free. They offered us the best price and guided us through every step. Truly the best real estate services in the region!"} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard name={'Jitendra Verma'} img={TestimonalImg2} title={"Mohali"} discription={"I was impressed with how easy Realty Nivesh made it for me to purchase a property in Mohali. Their market knowledge is top-notch, and they ensured I got the best deal possible. The team’s transparency and commitment to customer satisfaction are what really set them apart. Highly recommended if you’re looking for the best real estate agent in Mohali!"} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard name={'Karan Khattar'} img={TestimonalImg3} title={"New Chandigarh"} discription={'Finding the right property in New Chandigarh was a daunting task until we connected with Realty Nivesh. Their expertise in the local market helped us choose the perfect investment property. The team’s honest and fair dealing left us confident in our purchase, and we’ll definitely work with them again for future real estate needs!'} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard name={'Dr. Rajeev Kapoor'} img={TestimonalImg4} title={"Zirakpur"} discription={"Realty Nivesh is by far the best real estate service I’ve encountered. Their experience and knowledge of the property market in Zirakpur made buying a property a breeze. The level of detail and care they put into making sure we got exactly what we wanted was impressive. I couldn’t have asked for a better experience."} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard name={'Shubham Mittal'} img={TestimonalImg5} title={"Business Man "} discription={"Buying a residential property through Sushma Group and Realty Nivesh has been a seamless and rewarding experience. The Sushma Service Partner team took the time to understand my needs and provided tailored solutions that fit perfectly with my vision. Their commitment to transparency and customer satisfaction made the entire process stress-free. I’m delighted with my new home and grateful for the outstanding service provided by Sushma Group and Realty Nivesh"} />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}

export default Testimonial

