import React from 'react'

const HomeButtons = () => {
    return (
        <div className="flex gap-5 items-center text-sm max-sm:flex-col">
            <button className="border-solid border-2 pl-8 pr-8 pt-2 pb-2 rounded-xl border-off-white-50 max-sm:w-[250px] transition duration-300 hover:bg-[#354f52]">
                EMAIL ME
            </button>
            <button className="border-solid border-2 pl-8 pr-8 pt-2 pb-2 rounded-xl border-off-white-50 max-sm:w-[250px] transition duration-300 hover:bg-[#354f52]">
                DOWNLOAD RESUME
            </button>
        </div>
    );
};

export default HomeButtons;
