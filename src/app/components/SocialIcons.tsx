"use client"

import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import SocialIcon from "./SocialIcon";
import TextButton from "./TextButton";

const SocialIcons = () => {
    const { theme, setTheme } = useTheme();
    const [menuVisible, setMenuVisible] = useState(false);
  
    const handleThemeChange = () => {
        if (theme === "light") { setTheme("dark"); } 
        else { setTheme("light"); }
    };

    const handleMenuClick = () => {
        setMenuVisible(!menuVisible);
    };
  
    return (   
        <div className={`relative z-20 flex flex-col gap-5 ${menuVisible ? "mb-10" : "mb-0"}`}>
            <div className="flex gap-5 max-sm:gap-3">
                <div onClick={handleMenuClick}>
                    <SocialIcon
                        iconSvg={
                            <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-slate-100 dark:fill-slate-700" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/>
                            </svg>
                        }
                    />              
                </div>
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/samuelbmarks">
                    <SocialIcon
                        iconSvg={
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-slate-100 dark:fill-slate-700 transition-all duration-300 ease-in-out" d="M4.98 2.5C4.98 3.881 3.87 5 2.5 5C1.13 5 0.02 3.881 0.02 2.5C0.02 1.12 1.13 0 2.5 0C3.87 0 4.98 1.12 4.98 2.5ZM5 7L0 7L0 23L5 23L5 7ZM12.982 7L8.014 7L8.014 23L12.983 23L12.983 14.601C12.983 9.931 19.012 9.549 19.012 14.601L19.012 23L24 23L24 12.869C24 4.989 15.078 5.276 12.982 9.155L12.982 7Z"/>
                            </svg>
                        }
                    />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelbmarks">
                    <SocialIcon
                        iconSvg={
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-slate-100 dark:fill-slate-700 transition-all duration-300 ease-in-out" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>    
                        }
                    />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/thesammarks">
                    <SocialIcon
                        iconSvg={
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-slate-100 dark:fill-slate-700 transition-all duration-300 ease-in-out" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        }
                    />
                </a>
                <div onClick={handleThemeChange}>
                   <SocialIcon
                        iconSvg={
                            <div className="flex relative">
                                <svg className="dark:opacity-0 opacity-100 transition-all duration-300 ease-in-out" viewBox="0 0 16 16" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path className="fill-slate-100 dark:fill-slate-700 transition-all duration-300 ease-in-out" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                                    <path className="fill-slate-100 dark:fill-slate-700 transition-all duration-300 ease-in-out" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                                </svg>
                                <svg className="absolute dark:opacity-100 opacity-0 transition-all duration-300 ease-in-out" viewBox="0 0 15.5 16.5" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path className="fill-slate-100 dark:fill-slate-700 transition-all duration-300 ease-in-out" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                                </svg>
                            </div>
                        }
                    />
                </div>
            </div>

            <div className={`
                z-50 absolute top-[100%] mt-6 flex flex-col w-full text-sm font-semibold
                transition-all duration-300 ease-in-out
                ${menuVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}>
                <div className="flex w-full gap-3">
                    <Link className="flex-1" href="/">
                        <TextButton
                            textDiv={
                                <div className="
                                    tracking-[0.1rem] text-slate-100 dark:text-slate-700 flex-1
                                    text-sm font-semibold sm:w-auto text-center text-nowrap
                                ">HOME
                                </div>
                            }
                        />
                    </Link>
                    <Link className="flex-1" href="/contact">
                        <TextButton
                            textDiv={
                                <div className="
                                    tracking-[0.1rem] text-slate-100 dark:text-slate-700 flex-1
                                    text-sm font-semibold sm:w-auto text-center text-nowrap
                                ">CONTACT
                                </div>
                            }
                        />
                    </Link>
                </div>  
            </div>
        </div>
    );
  };
  
export default SocialIcons;
