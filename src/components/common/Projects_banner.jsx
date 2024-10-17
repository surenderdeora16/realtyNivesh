'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ProjectsBanner = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    return (
        <div className="relative w-full h-[60vh] sm:h-[720px] bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url('/images/a3976ab774a3bb2724f73a06151e1e57.png')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60 sm:bg-opacity-50"></div>
            <div className="mt-10 absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                <h1 className="uppercase font-bold text-[28px] sm:text-[38px] md:text-[48px] lg:text-[68px]">
                    Great Place to Live
                </h1>
                <p className="font-medium text-[11px] sm:text-[15px] md:text-[18px] px-5 sm:px-0 pb-5 tracking-wide">
                    Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.
                </p>
                <nav aria-label="breadcrumb" className="flex text-[12px] sm:text-[15px] lg:text-[18px] ">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    {pathSegments.map((segment, index) => {
                        const to = `/${pathSegments.slice(0, index + 1).join('/')}`;
                        return (
                            <div key={to} className='flex'>
                                &nbsp; {'|'}&nbsp;
                                <Link href={to} className="flex hover:underline">
                                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                                </Link>
                            </div>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default ProjectsBanner;
