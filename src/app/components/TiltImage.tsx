"use client"

import { useRef } from 'react';
import Image from 'next/image'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltPhoto = () => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
  
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: any) => {
        if (!ref.current) return [0, 0];
    
        const rect = e.target.getBoundingClientRect();
    
        const width = rect.width;
        const height = rect.height;
    
        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    
        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;
    
        x.set(rX);
        y.set(rY);
      };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform
            }}
            className="relative flex"
        >
            <Image
                src="home-image1.png"
                width={264.4305}
                height={300}
                alt="Home Image"
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="z-20 drop-shadow-xl"
            />
            <Image
                src="home-image2.png"
                width={264.4305}
                height={300}
                alt="Home Image"
                style={{
                    transform: "translateZ(10px) translateX(-35px) translateY(30px) rotate(-25deg)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute z-20 drop-shadow-xl"
            />
        </motion.div>
    );
}

export default TiltPhoto;
