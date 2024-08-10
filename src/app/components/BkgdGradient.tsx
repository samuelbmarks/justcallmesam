import React from 'react'

const BkgdGradient = () => {
    return (
        <div className="absolute w-[100%] h-[100%] self-center">
            <div
                className="
                    opacity-0
                    dark:opacity-100
                    absolute w-full h-full
                    bg-gradient-to-r 
                    from-slate-900 to-slate-800
                    transition-all duration-300 ease-in-out
                "
            >
            </div>
                <div
                    className="
                        opacity-100
                        dark:opacity-0
                        absolute w-full h-full
                        bg-gradient-to-r 
                        from-slate-200 to-slate-300
                        transition-all duration-300 ease-in-out
                    "
                >
            </div>
        </div>
    );
};
  
export default BkgdGradient;