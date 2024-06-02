"use client"

import Link from 'next/link';
import React from 'react'
import { useGlitch } from 'react-powerglitch'

const ScrollContent = () => {
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
      <div className="absolute z-20 flex flex-col items-center gap-20 w-full bg-black top-[100vh] pt-16 pb-16">
        <div className="flex flex-col gap-5 items-center text-center">
          <div>Just Call Me Sam</div>
        </div>

        <footer className="text-xs">
            © Made by <a
              className="text-bold" 
              href="https://github.com/samuelbmarks/" 
              target="_blank" 
              rel="noopener noreferrer"
            >Sam
            </a>
        </footer>
      </div>
    );
  };
  
export default ScrollContent;
