'use client'
import React, { useState } from 'react'
import SideImg from '../../assets/images/getInTouch-img.png'
import Image from 'next/image'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-phone-number-input/style.css'
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input'
import AxiosHelper from '@/app/AxiosHelper';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3).max(50),
    email: Yup.string().email('Invalid email address').required('Email is required').min(5).max(50),
    mobile: Yup.string().min(10, 'Must be at least 10 digits').required('Mobile number is required'),
    message: Yup.string().required('Message is required').min(10).max(200),
});

const GetInTouch = () => {
    const [value, setValue] = useState('')
    const [countryCode, setCountryCode] = useState('+ 91');
    const [loaderShow, setLoaderShow] = useState(false);

    const handleCountryChange = (country) => {
        if (country) {
            const callingCode = getCountryCallingCode(country);
            setCountryCode('+' + ' ' + callingCode)
        }
    };

    return (
        <section id='contact-us' className='get-in-touch sectionsGap'>
            <div className='w-full h-full bg-[#0C4278] flex'>
                <div className='hidden md:block w-[35%] h-full'>
                    <div className='w-full h-[750px] relative'>
                        <Image src={SideImg} fill className='object-cover bg-center' alt="" />
                    </div>
                </div>
                <Formik
                    initialValues={{
                        type: 1,
                        name: '',
                        lastName: '',
                        email: '',
                        mobile: '',
                        city: '',
                        message: '',
                        preferredHomeSize: '-',
                        broker: '-',
                        howHeardAboutUs: '-',
                        event: 'Get In touch Form',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, resetForm }) => {
                        setLoaderShow(true);
                        try {
                            const payload = {
                                ...values,
                                name: `${values.name} ${values.lastName}`,
                                mobile: `${values.mobile}`,
                                action: "getintouch",
                            };
                            const data = await AxiosHelper.postData(`/realtynivesh-enquiry/`, payload);

                            setLoaderShow(false);
                            if (data && data.status) {
                                resetForm();
                                setValue('');
                                toast.success('Enquiry Sent Successfully');
                            } else {
                                toast.error(data.message || 'An error occurred');
                                setErrors(data.errors || {});
                            }
                        } catch (error) {
                            setLoaderShow(false);
                            toast.error('Something went wrong. Please try again.');
                        }
                    }}
                >
                    {({ handleSubmit, setFieldValue }) => (
                        <Form onSubmit={handleSubmit} className='w-full md:w-[70%] h-full'>
                            <div className='w-full h-full'>
                                <div className='mx-auto flex flex-col justify-center items-center mt-[24px]'>
                                    <h2 className='font-supera700 text-[32px] sm:text-[35px] leading-[1] text-[#F3F9FF] uppercase flex items-center gap-x-2'>Get in
                                        <span className='font-bebas_Neue text-[60px] sm:text-[71px] tracking-[6%] bg-transparent outlined-text text-transparent'> Touch</span>
                                    </h2>
                                    <p className='font-supera400 px-2 text-[14px] xs:text-[16px] text-center tracking-wide text-[#F3F9FF]'>You have any question? feel free to contact us.</p>
                                </div>

                                <div className='w-full'>
                                    <div className='w-[90%] md:w-[85%] h-full grid grid-cols-2 grid-flow-row mx-auto  gap-x-[15px] gap-y-3 mt-10'>
                                        <div className='col-span-2 lg:col-span-1'>
                                            <label className='ml-2 font-supera400 text-[15px] tracking-wide text-[#F3F9FF] capitalize'><span className='inline lg:hidden'>Your Name</span> <span className='hidden lg:inline'>First Name</span></label>
                                            <div className='mt-1.5 w-full h-[44px] bg-[#11508F] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field type="text" name="name" placeholder='Rohit' className='w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#bcbcbc]' />
                                            </div>
                                            <ErrorMessage component="div" className="text-left text-[10.5px]  pl-1 absolute text-red-500" name="name" />
                                        </div>
                                        <div className='hidden lg:block'>
                                            <label className='ml-2 font-supera400 text-[15px] tracking-wide text-[#F3F9FF] capitalize'>Last Name</label>
                                            <div className='mt-1.5 w-full h-[44px] bg-[#11508F] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field type="text" name="lastName" placeholder='Sharma (Optional)' className='w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#bcbcbc]' />
                                            </div>
                                        </div>
                                        <div className='col-span-2 cmd:col-span-1'>
                                            <label className='ml-2 font-supera400 text-[15px] tracking-wide text-[#F3F9FF] capitalize'>Mobile</label>
                                            <div className='mt-1.5 w-full h-[44px] bg-[#11508F] border-[0.74px] border-[#F2F9FF] rounded-[6px] font-supera500 flex items-center px-5'>
                                                {/* <input type="text" placeholder='91 +' className='w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#bcbcbc]' /> */}
                                                <div className='mr-2.5 font-supera500 text-[14.78px] text-[#bcbcbc] whitespace-nowrap '>{countryCode}</div>
                                                <PhoneInput
                                                    placeholder="Mobile"
                                                    defaultCountry='IN'
                                                    value={value}
                                                    onCountryChange={handleCountryChange}
                                                    onChange={(phone) => {
                                                        setValue(phone);
                                                        if (phone) {
                                                            setFieldValue('mobile', phone);
                                                        }
                                                    }} />
                                            </div>
                                            <ErrorMessage component="div" className="text-left text-[10.5px]  pl-1 absolute text-red-500" name="mobile" />
                                        </div>
                                        <div className='col-span-2 cmd:col-span-1'>
                                            <label className='ml-2 font-supera400 text-[15px] tracking-wide text-[#F3F9FF] capitalize'>Email</label>
                                            <div className='mt-1.5 w-full h-[44px] bg-[#11508F] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field type="email" name="email" placeholder='skt@gmail.com' className='w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#bcbcbc]' />
                                            </div>
                                            <ErrorMessage component="div" className="text-left text-[10.5px]  pl-1 absolute text-red-500" name="email" />
                                        </div>
                                        <div className='col-span-2 '>
                                            <label className='ml-2 font-supera400 text-[15px] tracking-wide text-[#F3F9FF] capitalize'>City</label>
                                            <div className='mt-1.5 w-full h-[44px] bg-[#11508F] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field type="text" name="city" placeholder='City' className='w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#bcbcbc]' />
                                            </div>
                                        </div>
                                        <div className='col-span-2 '>
                                            <div className='mt-1 pr-2 w-full h-[44px] bg-[#11508F] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field component="select" name="preferredHomeSize" className='cursor-pointer w-full h-full bg-transparent outline-none px-5 text-[#bcbcbc]  font-supera500 text-[14px]' >
                                                    <option value="" className='hover:bg-[#37493c] text-[#bcbcbc]'> Preferred Home Size?</option>
                                                    <option value="Studio Apartments 630 sqft" className='hover:bg-[#37493c] text-[#bcbcbc]'>Studio Apartments 630 sqft</option>
                                                    <option value="1BHK/2BRK 880 sqft" className='hover:bg-[#37493c] text-[#bcbcbc]'>1BHK/2BRK 880 sqft</option>
                                                    <option value="2BHK/3BRK 1335 sqft" className='hover:bg-[#37493c] text-[#bcbcbc]'>2BHK/3BRK 1335 sqft</option>
                                                    <option value="2BHK/3BRK 1385 sqft" className='hover:bg-[#37493c] text-[#bcbcbc]'>2BHK/3BRK 1385 sqft</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='col-span-2 '>
                                            <div className='mt-1 pr-2 w-full h-[44px] bg-[#11508F] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field component="select" name="broker" className='cursor-pointer w-full h-full bg-transparent outline-none px-5 text-[#bcbcbc] font-supera500 text-[14px]' >
                                                    <option value="" className='text-[#bcbcbc]'>Are you a broker?</option>
                                                    <option value="Yes, I am a broker" className='text-[#bcbcbc]'>Yes, I am a broker</option>
                                                    <option value="No, I am not a broker" className='text-[#bcbcbc]'>No, I am not a broker</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='col-span-2 '>
                                            <div className='mt-1 pr-2 w-full h-[44px] bg-[#11508F] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field component="select" name="howHeardAboutUs" className='cursor-pointer w-full h-full bg-transparent outline-none px-5 text-[#bcbcbc] font-supera500 text-[14px]' >
                                                    <option value="" className='text-[#bcbcbc]'>How did you hear about us?</option>
                                                    <option value="Press" className='text-[#bcbcbc]'>Press</option>
                                                    <option value="Advertisement" className='text-[#bcbcbc]'>Advertisement</option>
                                                    <option value="Email" className='text-[#bcbcbc]'>Email</option>
                                                    <option value="Word Of Mouth" className='text-[#bcbcbc]'>Word Of Mouth</option>
                                                    <option value="Broker" className='text-[#bcbcbc]'>Broker</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='col-span-2 '>
                                            <div className='mt-1 py-1 pr-2 w-full bg-[#11508F] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field as="textarea" name="message" placeholder='Message' className='placeholder:text-[#bcbcbc] w-full h-full bg-transparent outline-none px-5 text-[#fff] font-supera500 text-[14px]' />
                                            </div>
                                            <ErrorMessage component="div" className="text-left text-xs  absolute text-red-500" name="message" />
                                        </div>
                                        <div className='col-span-2 my-4'>
                                            <div className='w-[172px] h-[41px] rounded-sm overflow-hidden mx-auto'>
                                                <button disabled={loaderShow} className='w-full h-full bg-[#FD6502] text-[#fff] font-supera600 text-[19px] text-center flex justify-center items-center'>
                                                    <div className='flex justify-center items-center gap-x-4'> {loaderShow ? 'Submiting...' : 'Submit'} {loaderShow && (<span className="form-loader after:bg-[#fff] group-hover:after:bg-[#fff]"></span>)}</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default GetInTouch
