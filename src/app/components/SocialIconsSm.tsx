"use client"

import React from 'react'
import { SocialIcon } from 'react-social-icons'

const SocialIcons = () => {

    const iconProps = {
        target: "_blank",
        rel: "noopener noreferrer",
        bgColor: "transparent",
        fgColor: "rgba(229,227,211,0.8)",
    }

    return (
        <div className="flex gap-3">
            <SocialIcon
                className="drop-shadow-off-white-50"
                url="https://www.linkedin.com/in/samuelbmarks/"
                {...iconProps}
            />    
            <SocialIcon
                className="drop-shadow-off-white-50"
                url="https://www.github.com/samuelbmarks/"
                {...iconProps}
            />    
            <SocialIcon
                className="drop-shadow-off-white-50"
                url="https://www.instagram.com/thesammarks/"
                {...iconProps}
            />    
        </div>
    );
  };
  
export default SocialIcons;
