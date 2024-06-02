import Link from 'next/link';
import React from 'react'

const HomeButtons = () => {    
    return (
        <div className="flex gap-5 items-center text-xs max-sm:flex-col">
            <a 
                href="/Samuel_Marks_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
            >
                <button className="
                    bg-slate-500 hover:bg-slate-700 dark:bg-slate-300 dark:hover:bg-slate-100
                    text-slate-100 dark:text-slate-700
                    px-8 py-3 tracking-[0.1em]
                    rounded-xl border-off-white-50 max-sm:w-[250px] 
                    transition-all duration-300
                    focus:ring-2 focus:ring-white
                    text-sm font-medium sm:w-auto px-5 py-2.5 text-center
                ">Download Resume
                </button>
            </a>
            <Link href="/contact">
                <button className="
                    bg-slate-500 hover:bg-slate-700 dark:bg-slate-300 dark:hover:bg-slate-100
                    text-slate-100 dark:text-slate-700
                    px-8 py-3 tracking-[0.1em]
                    rounded-xl border-off-white-50 max-sm:w-[250px] 
                    transition-all duration-300
                    focus:ring-2 focus:ring-white
                    text-sm font-medium sm:w-auto px-5 py-2.5 text-center
                ">Contact Me
                </button>
            </Link>
        </div>
    );
};

export default HomeButtons;
