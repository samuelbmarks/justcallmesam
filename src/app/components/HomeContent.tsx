import React from 'react'
import Link from 'next/link';
import HomeButtons from './HomeButtons';

const HomeContent = () => {
    return (
        <div className="z-20 flex flex-col items-center gap-10 drop-shadow-off-white-50">
            <Link 
                className="flex flex-col items-center gap-3"
                href="/"
            >
                <div className="tracking-[0.5em] font-bold text-lg flex items-center gap-4 max-sm:flex-col">
                    <div>JUST</div>
                    <div>CALL</div>
                    <div>ME</div>
                    <div>SAM</div>
                </div>
                <div className="tracking-[0.5em] flex font-bold text-sm items-center gap-4 max-sm:flex-col max-sm:hidden">
                    <div>HUMAN BEING</div>
                    <div>|</div>
                    <div>SOFTWARE ENGINEER</div>
                </div>
            </Link>
            
            <div className="max-sm:hidden">
                <HomeButtons />
            </div>
        </div>
    );
};

export default HomeContent;
