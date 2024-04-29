"use client"

import React from 'react'
import { useEffect, useState } from 'react';

const SwipeIcon = () => {
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsFading(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
        <div
        className={`flex fixed z-20 bottom-10 transition-opacity duration-500 ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
        >
            <svg fill="rgba(229,227,211,0.8)" width="20" viewBox="0 0 5.85366 6.73171">
                <defs/>
                <g>
                    <path d="M4.85854 3.39512L2.92683 5.32683L0.995122 3.39512C0.760976 3.16098 0.409756 3.16098 0.17561 3.39512C-0.0585366 3.62927-0.0585366 3.98049 0.17561 4.21463L2.51707 6.5561C2.63415 6.67317 2.78049 6.73171 2.92683 6.73171C3.07317 6.73171 3.21951 6.67317 3.33659 6.5561L5.67805 4.21463C5.9122 3.98049 5.9122 3.62927 5.67805 3.39512C5.4439 3.16098 5.09268 3.16098 4.85854 3.39512Z"/>
                    <path d="M5.67805 0.17561C5.4439-0.0585366 5.09268-0.0585366 4.85854 0.17561L2.92683 2.10732L0.995122 0.17561C0.760976-0.0585366 0.409756-0.0585366 0.17561 0.17561C-0.0585366 0.409756-0.0585366 0.760976 0.17561 0.995122L2.51707 3.33659C2.63415 3.45366 2.78049 3.5122 2.92683 3.5122C3.07317 3.5122 3.21951 3.45366 3.33659 3.33659L5.67805 0.995122C5.9122 0.760976 5.9122 0.409756 5.67805 0.17561Z"/>
                </g>
            </svg>
        </div>
    );
  };
  
export default SwipeIcon;