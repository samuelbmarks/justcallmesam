"use client"

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { useGlitch } from 'react-powerglitch'

const SocialIcons = () => {
    const glitch = useGlitch({
        "playMode": "hover", 
        "timing": {
            "duration": 700
        },
        "shake": {
            "velocity": 4,
            "amplitudeX": 0.05,
            "amplitudeY": 0.02
        },
    });

    const iconProps = {
        target: "_blank",
        rel: "noopener noreferrer",
        bgColor: "transparent",
        fgColor: "rgba(229,227,211,0.8)",
    }
    
    return (
      <div className="absolute top-10 z-20 flex gap-3">
        <SocialIcon
            className="drop-shadow-off-white-50"
            ref={glitch.ref}
            url="https://www.linkedin.com/in/samuelbmarks/"
            {...iconProps}
        />
        <SocialIcon
            className="drop-shadow-off-white-50"
            ref={glitch.ref}
            url="https://www.github.com/samuelbmarks/"
            {...iconProps}
        />
        <SocialIcon
            className="drop-shadow-off-white-50"
            ref={glitch.ref}
            url="https://www.instagram.com/thesammarks/"
            {...iconProps}
        />
      </div>
    );
  };
  
export default SocialIcons;
