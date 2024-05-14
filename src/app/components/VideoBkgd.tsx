import React from 'react'

const VideoBkgd = () => {
    return (
        <div>
            <div
                className="
                    absolute
                    top-0 
                    left-0
                    w-full
                    h-dvh
                    bg-gradient-to-b
                    from-gradient2
                    via-gradient3
                    via-gradient4
                    via-gradient5
                    via-gradient6
                    to-gradient7
                ">
            </div>

            {/* <div className="absolute top-0 left-0 object-cover h-full w-full bg-gradient-to-b from-black-10 to-black-40 z-10"></div> */}
            <video 
                className="absolute top-0 left-0 object-cover h-full w-full"
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