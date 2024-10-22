'use client'
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../assets/images/logo/footerlogo.png";
import HambarIcon from '../../assets/images/hambar.svg';
import { useFixedSection } from '@/app/context/FixedSectionContext';
import { FiPhoneCall } from "react-icons/fi";
import Sidebar from './MegaMenuSidebar';
import EnquiryForm from './EnquiryForm';

const Navbar = () => {
  const params = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScroll, setIsScroll] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [megaMenu, setMegaMenu] = useState(false);
  const [isScrollInFloorPlans, setIsScrollInFloorPlans] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Enable scrolling
  };

  const handleUserInteraction = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isVisible]);

  useEffect(() => {
    const mouseMoveHandler = () => handleUserInteraction();
    const scrollHandler = () => handleUserInteraction();

    window?.addEventListener("mousemove", mouseMoveHandler);
    window?.addEventListener("scroll", scrollHandler);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => {
      window?.removeEventListener("mousemove", mouseMoveHandler);
      window?.removeEventListener("scroll", scrollHandler);
      clearTimeout(timer);
    };
  }, [isVisible, handleUserInteraction]);

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, handleUserInteraction]);


  useEffect(() => {
    const handleScroll = () => {
      const floorPlansSection = document?.getElementById('plans');

      if (floorPlansSection) {
        const rect = floorPlansSection.getBoundingClientRect();
        const isInView = rect.top <= 0 && rect.bottom >= 0;

        if (isInView) {
          setIsScrollInFloorPlans(true);  // User is scrolling within the floor plans section
          setIsFixed(true)
        } else {
          setIsScrollInFloorPlans(false);  // User is not in the floor plans section
          setIsFixed(false)
        }
      }

      if (window?.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Get the current scroll position and check which section is in the viewport
      const sections = document?.querySelectorAll('section[id]');
      let currentSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      setActiveSection(currentSection);
    };

    const handleHashChange = () => {
      setActiveSection(window?.location.hash.substring(1));
    };

    window?.addEventListener('scroll', handleScroll);
    window?.addEventListener('hashchange', handleHashChange);

    // Set the initial active section based on the current hash
    handleHashChange();

    return () => {
      window?.removeEventListener('scroll', handleScroll);
      window?.removeEventListener('hashchange', handleHashChange);
    };
  }, [params]);

  const isActive = (hash) => activeSection === hash;

  const handleTabChange = (tab) => {
    setActiveSectionTab(tab);
    setMegaMenu(false)
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '9988010405';
    const message = 'Hi I am interested in *Sushma Elementa Project*. Please send more detail';

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window?.open(whatsappUrl, '_blank');
  };

  return (
    <nav style={{ transform: isScrollInFloorPlans ? 'translateY(-100%)' : '' }} className={`${megaMenu ? 'bg-[#000000b1] backdrop-blur px-5 sm:px-10 cmd:px-14 lg:px-6 xl:px-16 3xl:px-4 pt-2 sm:pt-6 sm:pb-10' : ''}  w-full z-10 transition-all duration-500 ${isSticky ? `fixed top-0 bg-[#11508f] sm:bg-[#000000ef] shadow-lg py-1 z-50 ${isVisible ? 'translate-y-0' : `${megaMenu ? '' : '-translate-y-full'}`} duration-500` : ` absolute top-0 left-0  duration-500 py-2 lg:py-1 xl:py-4`} flex justify-center items-center duration-500`}>

      {isModalOpen && <EnquiryForm heading={'We Are Excited To Meet You'} formType={'bookSiteVisit'} isOpen={isModalOpen} onClose={handleCloseModal} eventSource="Book A Site Form" />}

      <div className={` duration-500  xl:py-1 lg:py-2.5 w-full 2xl:container flex justify-between lg:justify-around 3xl:justify-between ${megaMenu ? 'items-end xl:items-center duration-1000 px-0' : 'items-center duration-1000 px-1.5 cxs:px-5 xl:px-0'} duration-1000 mx-2`}>
        <Link href="#" aria-label="Back to homepage" className={`${isSticky ? 'w-[170px] h-[60px] xl:w-[180px] duration-1000' : 'w-[150px] bxxs:w-[160px] xs:w-[170px] cxs:w-[180px] h-[50px] sm:w-[200px] sm:h-[60px] xl:w-[206px] xl:h-[50px] duration-1000'} flex relative`}>
          <Image
            src={logo}
            fill
            className="object-contain"
            alt='sushma elementa logo'
          />
        </Link>
        <ul className={`w-full  ${megaMenu ? 'items-start w-[90%] xl:w-[85%] 2xl:w-[85%] justify-center pl-[20px] xl:pl-[30px] 2xl:pl-[50px] ' : 'items-center justify-around xl:justify-end 2xl:justify-between xl:gap-6 2xl:gap-0 w-[80%] xl:w-[77%] 2xl:w-[76%]  pl-16 xl:pl-5 3xl:px-0'} h-full duration-500 hidden  lg:flex `}>
          {[
            {
              href: '#About-Us',
              label: 'About Us',
              submenu: []
            },
            {
              href: '#what-we-do',
              label: 'What we do',
              submenu: []
            },
            {
              href: '#why-realtynivesh',
              label: 'Why Choose Us',
              submenu: []
            },
            {
              href: '#  ',
              label: 'Featured Projects',
              submenu: []
            },
            {
              href: '#contact-us',
              label: 'Contact Us',
              submenu: []
            }
          ].map((item) => (
            <li className={` ${megaMenu ? `font-supera500 xl:font-supera600  w-1/6 flex justify-center ${(item?.label === 'About Us' || item?.label === 'Amenities') ? 'hidden' : ''}` : 'font-supera400 xl:font-supera500'} h-full`} key={item.href}>
              <div className={`text-white  tracking-wide text-[14px] xl:text-[16px] 3xl:text-[17px] uppercase relative table`}>
                <Link href={item?.href} className={`w-full h-full text-left whitespace-nowrap relative  after:absolute after:left-0 after:top-[120%] after:h-[3px] after:rounded-[20px] after:duration-500 after:z-[60] after:bg-white ${isActive(item.href.substring(1)) ? 'after:w-[100%] after:duration-500' : ' after:w-[0%]'}`}>{item.label}</Link>
                <div className={`${megaMenu ? 'w-full  flex justify-center items-center' : 'hidden'}`}>
                  <ul className='leading-loose mt-4 mx-auto flex flex-col justify-center gap-y-5 '>
                    {item.submenu.map((subitem, idx) => (
                      <li key={idx} className={`cursor-pointer text-left font-supera400 capitalize flex justify-start gap-x-1 text-[13px] xl:text-[14px] 3xl:text-[15px] leading-tight`}>
                        <Link href={(subitem?.href) ? subitem?.href : item?.href} onClick={() => handleTabChange(subitem?.tab)}>

                          {subitem?.label == '+91 89680 66698' ? (
                            <>
                              <div onClick={() => { window.location.href = 'tel:918968066698' }}>
                                <button onClick={() => { }} className=' flex justify-center items-center gap-x-1.5'>
                                  <svg className='w-4' viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="white" />
                                  </svg>
                                  {subitem?.label}
                                </button>
                              </div>
                            </>
                          ) :
                            ''
                          }
                          {subitem?.label == '+91 99880 10405' ? (
                            <>
                              <div onClick={() => { window.location.href = 'tel:919988010405' }}>
                                <button onClick={() => { }} className=' flex justify-center items-center gap-x-1.5'>
                                  <svg className='w-4' viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="white" />
                                  </svg>
                                  {subitem?.label}
                                </button>
                              </div>
                            </>
                          ) :
                            ''
                          }
                          {subitem?.label == 'whatsapp-icon' ? (
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
                            (subitem?.label === '+91 99880 10405' || subitem?.label === '+91 89680 66698') ? (

                              <>

                              </>
                            ) : (
                              <>{subitem?.label}</>
                            )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
          <li>
            <div onClick={() => { handleOpenModal() }} className="uppercase cursor-pointer tracking-wide py-1 px-4 hidden lg:block bg-white rounded-full text-[13px] text-[#1E6DA4] font-supera700">
              Book a Site visit
            </div>
          </li>
          <li className={`${megaMenu ? 'self-start' : 'self-center'} flex lg:hidden`}>
            {!megaMenu && (
              <button className="flex justify-end  pl-[20px] xl:pl-[40px] relative top-1">
                <Image onClick={() => setMegaMenu(!megaMenu)} src={HambarIcon} alt='bar' />
              </button>
            )}
            {megaMenu && (
              <button className="flex justify-end pl-[20px] xl:pl-[40px]">
                <div onClick={() => setMegaMenu(false)} className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" cursor="pointer"><path d="M0.981 16L0 15.019L7.019 8L0 0.981L0.981 0L8 7.019L15.019 0L16 0.981L8.981 8L16 15.019L15.019 16L8 8.981L0.981 16Z" fill="white"></path></svg>
                </div>
              </button>
            )}
          </li>
        </ul>
        <button onClick={() => setIsSidebarOpen(true)} className="flex justify-end lg:p-4 lg:hidden">
          <Image src={HambarIcon} alt='bar' />
        </button>
      </div>

      <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
    </nav>
  );
};

export default Navbar;
