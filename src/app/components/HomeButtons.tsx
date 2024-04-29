import React from 'react'

const HomeButtons = () => {    
    return (
        <div className="flex gap-5 items-center text-xs max-sm:flex-col">
            <a 
                href="mailto:sam@justcallmesam.com"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <button className="border-solid border-2 pl-8 pr-8 pt-2 pb-2 rounded-xl border-off-white-50 max-sm:w-[250px] transition duration-300 hover:bg-off-white-50">
                    EMAIL ME
                </button>
            </a>
            <a 
                href="/Samuel_Marks_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
            >
                <button className="border-solid border-2 pl-8 pr-8 pt-2 pb-2 rounded-xl border-off-white-50 max-sm:w-[250px] transition duration-300 hover:bg-off-white-50">
                    DOWNLOAD RESUME
                </button>
            </a>
        </div>
    );
};

export default HomeButtons;
