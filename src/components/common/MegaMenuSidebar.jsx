'use client';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { RxCross2, RxThickArrowDown } from 'react-icons/rx';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo/footerlogo.png';
// import { useActivetab } from '@/app/context/ActiveTabContext';

const menuData = [
    { href: '#About-Us', label: 'About Us', submenu: [] },
    { href: '#what-we-do', label: 'What we do', submenu: [] },
    { href: '#why-realtynivesh', label: 'Why Choose Us', submenu: [] },
    { href: '#rcih', label: 'Featured Projects', submenu: [] },
    { href: '#our-association', label: 'Associated Builders', submenu: [] },
    { href: '#contact-us', label: 'Contact Us', submenu: [] },
   
];

const sidebarVariants = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 25,
            duration: 0.5
        }
    },
    closed: {
        x: "100%",
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 1
        }
    }
};

const Sidebar = ({ open, setOpen }) => {
    // const { setActiveSectionTab } = useActivetab()
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleSubMenu = (menuLabel) => {
        setActiveMenu(activeMenu === menuLabel ? null : menuLabel);
    };

    const handleTabChange = (href) => {
        setActiveSectionTab(href);
        setOpen(false)
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = '9988010405';
        const message = 'Hi I am interested in *Sushma Elementa Project*. Please send more detail';

        const encodedMessage = encodeURIComponent(message);

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window?.open(whatsappUrl, '_blank');
    };


    return (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-[#0f0f0fb2] backdrop-blur-lg transition-opacity duration-500 ease-in-out" />
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel className="pointer-events-auto relative w-screen max-w-md">
                            <TransitionChild>
                                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="text-gray-300 hover:text-white focus:outline-none"
                                    >
                                        <RxCross2 className='h-6 w-6' />
                                        <span className="sr-only">Close panel</span>
                                    </button>
                                </div>
                            </TransitionChild>

                            <motion.div
                                initial="closed"
                                animate={open ? "open" : "closed"}
                                variants={sidebarVariants}
                                className="flex h-full flex-col overflow-y-scroll bg-[#11508F] py-6 shadow-xl"
                            >
                                <div className="px-4 sm:px-6 flex items-center justify-between">
                                    <Link href="#" aria-label="Back to homepage" className="flex w-[200px] xs:w-[240px] h-[70px] relative duration-1000">
                                        <Image
                                            src={logo}
                                            fill
                                            className="object-contain"
                                            alt='sushma elementa logo'
                                        />
                                    </Link>
                                </div>

                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    <ul className="text-lg flex flex-col  gap-y-3 mt-5 ml-4">
                                        {menuData.map((menuItem, index) => (
                                            <li key={index} className="relative group">
                                                <button
                                                    onClick={() => {
                                                        toggleSubMenu(menuItem.label);
                                                    }}
                                                    className="py-2 text-white hover:text-[#797f8a] w-full text-left flex justify-between items-center"
                                                >
                                                    <Link href={menuItem?.href} onClick={() => {
                                                        setOpen(false);
                                                        setTimeout(() => {
                                                            const section = document.querySelector(menuItem?.href);
                                                            section?.scrollIntoView({ behavior: 'smooth' });
                                                        }, 100)
                                                    }}>
                                                        {menuItem.label}
                                                    </Link>
                                                    {menuItem.submenu.length > 0 && (
                                                        <span className={`ml-2 transform transition-transform duration-300 ${activeMenu === menuItem.label ? 'rotate-180' : ''}`}>
                                                            <MdOutlineKeyboardArrowDown className='w-6 h-6' />
                                                        </span>
                                                    )}
                                                </button>

                                                <AnimatePresence>
                                                    {menuItem.submenu.length > 0 && activeMenu === menuItem.label && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                                                            className="bg-[#3e5a4b] shadow-lg rounded-lg mt-1 overflow-hidden"
                                                        >
                                                            <ul className="py-2 px-5 space-y-2">
                                                                {menuItem.submenu.map((subItem, subIndex) => (
                                                                    <li key={subIndex}>
                                                                        <Link href={(subItem?.href) ? subItem?.href : menuItem?.href}
                                                                            onClick={() => {
                                                                                handleTabChange(subItem?.tab);
                                                                                setTimeout(() => {
                                                                                    const section = document.querySelector(menuItem?.href);
                                                                                    section?.scrollIntoView({ behavior: 'smooth' });
                                                                                }, 100)
                                                                            }}
                                                                            className="block py-2 text-white hover:text-[#6b7280]">
                                                                            {subItem?.label == '+91 89680 66698' ? (
                                                                                <>
                                                                                    <div onClick={() => { window.location.href = 'tel:918968066698' }}>
                                                                                        <button onClick={() => { }} className=' flex justify-center items-center gap-x-1.5'>
                                                                                            <svg className='w-4' viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="white" />
                                                                                            </svg>
                                                                                            {subItem?.label}
                                                                                        </button>
                                                                                    </div>
                                                                                </>
                                                                            ) :
                                                                                ''
                                                                            }
                                                                            {subItem?.label == '+91 99880 10405' ? (
                                                                                <>
                                                                                    <div onClick={() => { window.location.href = 'tel:919988010405' }}>
                                                                                        <button onClick={() => { }} className=' flex justify-center items-center gap-x-1.5'>
                                                                                            <svg className='w-4' viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="white" />
                                                                                            </svg>
                                                                                            {subItem?.label}
                                                                                        </button>
                                                                                    </div>
                                                                                </>
                                                                            ) :
                                                                                ''
                                                                            }
                                                                            {subItem?.label == 'whatsapp-icon' ? (
                                                                                <>
                                                                                    <div onClick={() => handleWhatsAppClick()} className='rounded-full bg-white ml-1'>
                                                                                        <button onClick={() => { }} className='w-full h-full font-supera600 text-[12px] py-2 px-2 text-[#000] uppercase flex justify-center items-center gap-x-1.5'>
                                                                                            <span>
                                                                                                <svg className='w-4' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 509 511.514">
                                                                                                    <path fill="#000" d="M434.762 74.334C387.553 26.81 323.245 0 256.236 0h-.768C115.795.001 2.121 113.696 2.121 253.456l.001.015a253.516 253.516 0 0033.942 126.671L0 511.514l134.373-35.269a253.416 253.416 0 00121.052 30.9h.003.053C395.472 507.145 509 393.616 509 253.626c0-67.225-26.742-131.727-74.252-179.237l.014-.055zM255.555 464.453c-37.753 0-74.861-10.22-107.293-29.479l-7.72-4.602-79.741 20.889 21.207-77.726-4.984-7.975c-21.147-33.606-32.415-72.584-32.415-112.308 0-116.371 94.372-210.743 210.741-210.743 56.011 0 109.758 22.307 149.277 61.98a210.93 210.93 0 0161.744 149.095c0 116.44-94.403 210.869-210.844 210.869h.028zm115.583-157.914c-6.363-3.202-37.474-18.472-43.243-20.593-5.769-2.121-10.01-3.202-14.315 3.203-4.305 6.404-16.373 20.593-20.063 24.855-3.69 4.263-7.401 4.815-13.679 1.612-6.278-3.202-26.786-9.883-50.899-31.472a192.748 192.748 0 01-35.411-43.867c-3.712-6.363-.404-9.777 2.82-12.873 3.224-3.096 6.363-7.381 9.48-11.092a41.58 41.58 0 006.357-10.597 11.678 11.678 0 00-.508-11.09c-1.718-3.18-14.444-34.357-19.534-47.06-5.09-12.703-10.37-10.603-14.272-10.901-3.902-.297-7.911-.19-12.089-.19a23.322 23.322 0 00-16.964 7.911c-5.707 6.298-22.1 21.673-22.1 52.849s22.671 61.249 25.852 65.532c3.182 4.284 44.663 68.227 108.288 95.649 15.099 6.489 26.891 10.392 36.053 13.403a87.504 87.504 0 0025.216 3.718c4.905 0 9.82-.416 14.65-1.237 12.174-1.782 37.453-15.291 42.776-30.073s5.303-27.57 3.711-30.093c-1.591-2.524-5.704-4.369-12.088-7.615l-.038.021z" />
                                                                                                </svg>
                                                                                            </span>
                                                                                            Whatsapp now
                                                                                        </button>
                                                                                    </div>
                                                                                </>
                                                                            ) :
                                                                                (subItem?.label === '+91 99880 10405' || subItem?.label === '+91 89680 66698') ? (

                                                                                    <>

                                                                                    </>
                                                                                ) : (
                                                                                    <>{subItem?.label}</>
                                                                                )}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default Sidebar;