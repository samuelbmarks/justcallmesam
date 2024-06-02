import React from 'react'

const VideoBkgd = () => {
    return (
        <div className="absolute w-full h-full">
                <div className="absolute top-0 left-0 object-cover h-full w-full bg-gradient-to-b from-black-10 to-black-40 z-10"></div>
                <video 
                    className="absolute top-0 left-0 object-cover h-full w-[120vw]"
                    autoPlay
                    loop 
                    muted 
                    playsInline
                    preload="none"
                >
                    <source src="videos/lightning.mp4" type="video/mp4" />
                    <source src="videos/lightning.webm" type="video/webm" />
                </video>
            </div>
    );
};
  
export default VideoBkgd;