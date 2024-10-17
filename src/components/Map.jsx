import React from 'react'

const Map = () => {
    return (
        <div>
            <div className='pt-10 md:pt-0 '>
                <h4 className='text-[29px] uppercase tracking-[3%] text-center text-[#1E6DA4] font-supera800'>Corporate office</h4>
                <div className='w-full min-h-[227px] 3xl:h-[350px]  mt-5 cmd:mt-10'>
                    <iframe className='w-full h-[227px] 3xl:h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7159.487162510549!2d72.9599744918971!3d26.261097279678673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723183840134!5m2!1sen!2sin" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map