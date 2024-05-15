"use client"

import Link from 'next/link';
import React from 'react'
import { useGlitch } from 'react-powerglitch'

const Name = () => {
    const glitch = useGlitch({
        "playMode": "hover", 
        "timing": {
            "duration": 1100
        },
        "shake": {
            "velocity": 2,
            "amplitudeX": 0.05,
            "amplitudeY": 0.02
        },
    });
    
    return (
        <div className="max-lg:hidden">
            <Link 
                href="/"
                ref={glitch.ref} 
                className="absolute flex flex-col items-center gap-1.5 left-10 top-20 z-20 drop-shadow-off-white-50">
                <div>S</div>
                <div>A</div>
                <div>M</div>
                <div>U</div>
                <div>E</div>
                <div>L</div>
            </Link>

            <Link 
                href="/"
                ref={glitch.ref} 
                className="absolute flex flex-col items-center gap-1.5 right-10 bottom-20 z-20 drop-shadow-off-white-50">
                <div>M</div>
                <div>A</div>
                <div>R</div>
                <div>K</div>
                <div>S</div>
            </Link>
        </div>
    );
  };
  
export default Name;