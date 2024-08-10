import Link from 'next/link';
import React from 'react'
import TextButton from './TextButton';

const HomeButtons = () => {    
    return (
        <div className="relative flex gap-5 items-center text-xs max-sm:flex-col">
            <Link 
                className="relative flex"
                href="/contact">
                <TextButton
                    textDiv={
                        <div className="
                            tracking-[0.1rem] text-slate-100 dark:text-slate-700
                            text-sm font-semibold sm:w-auto text-center text-nowrap
                        ">CONTACT ME
                        </div>
                    }
                />
            </Link>
            <a 
                className="relative flex"
                href="https://github.com/samuelbmarks/justcallmesam"
                target="_blank"
                rel="noopener noreferrer"
                download
            >
                <TextButton
                    textDiv={
                        <div className="
                            tracking-[0.1rem] text-slate-100 dark:text-slate-700
                            text-sm font-semibold sm:w-auto text-center text-nowrap
                        ">VIEW SOURCE CODE
                        </div>
                    }
                />
            </a>
        </div>
    );
};

export default HomeButtons;
