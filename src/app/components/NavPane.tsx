"use client"

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const NavPane = () => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path ? twActivePage : '';

    const twActivePage = "bg-slate-400 dark:bg-slate-600";
    const twNavButton = "px-4 py-2 rounded-xl transition-all duration-300 ease-in-out"

    return (
        <div className={`absolute z-10 bg-slate-300 dark:bg-slate-700 left-0 w-[300px] h-full drop-shadow-xl`}>
            <div className={`flex flex-col gap-3 text-lg font-medium pl-[50px] pt-[150px] max-w-[250px]`}>
                <Link href='/' className={`${isActive('/')} ${twNavButton}`}>/</Link>
                <Link href='/restClient' className={`${isActive('/restClient')} ${twNavButton}`}>/ restClient</Link>
                <Link href='/contact' className={`${isActive('/contact')} ${twNavButton}`}>/ contact</Link>
                {/* <Link href='/json' className={`${isActive('/json')} ${twNavButton}`}>/ json</Link> */}
                {/* <Link href='/base64' className={`${isActive('/base64')} ${twNavButton}`}>/ base64</Link> */}
                {/* <Link href='/data' className={`${isActive('/data')} ${twNavButton}`}>/ data</Link> */}
            </div>
        </div>
    );
};

export default NavPane;
