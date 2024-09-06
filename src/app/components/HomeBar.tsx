"use client"

import { useTheme } from "next-themes";
import Link from "next/link";
import SocialIcon from "./SocialIcon";
import { usePathname } from 'next/navigation';

const HomeBar = () => {
    const { theme, setTheme } = useTheme();

    const pathname = usePathname();
  
    const handleThemeChange = () => {
        if (theme === "light") { setTheme("dark"); } 
        else { setTheme("light"); }
    };

    const tw_text_dark = "text-slate-700 dark:text-slate-100";
    const tw_fill_light = "fill-slate-100 dark:fill-slate-700";
    const tw_fill_dark = "fill-slate-700 dark:fill-slate-100";
    const tw_border_dark = "border-slate-100 dark:border-slate-800";
    const tw_bg_light = "bg-slate-200 dark:bg-slate-800";
    const tw_transition = "transition-all duration-300 ease-in-out";

    return (   
        <div className={`absolute top-0 h-[120px] w-[100%] px-[50px] z-20 flex justify-between ${tw_bg_light} drop-shadow-xl`}>
            <div className={`flex text-2xl font-bold gap-5 items-center`}>
                <Link href="/">
                    <SocialIcon
                        iconSvg={
                            <svg width="30" viewBox="0 0 249.42 156.16" xmlns="http://www.w3.org/2000/svg">
                                <path className={`${tw_fill_dark} ${tw_transition}`} d="M75.06,152.8c-.95-4.98,44.6-46.25,63.53-49.87,9.17-1.76,42.32-3.61,46.23,4.08,4.17,8.19-20.82,26.34-20.33,28.9.95,4.98-9.81,12.85-22.75,16.21-18.66,4.85-65.74,5.66-66.69.68Z"/>
                                <path className={`${tw_fill_light} ${tw_transition}`} d="M195.82,23.66c-1.54.32-9.14,10.65-10.39,16.89-2.49,9.98-.77,20.45,4.22,27.93-6.24,2.49-12.6,3.62-18.84,4.87H7.47C3.73,73.35.03,77.08,0,80.82c-.11,16.91,2.15,26.76,10.84,39.13,8.69,12.37,18.65,19.77,28.48,24.76,12.74,6.46,27.46,11.82,46.58,11.42,24.94-.52,34.25-1.55,35.22-17.5.47-7.78,3.39-15.18,22.08-22.73,15.88-6.41,28.29-7.34,30.2-3.9,1.98,3.56-2.29,9.18-5.52,12.34-3.44,3.38-9.93,8.53-15.26,11.69-11.43,6.78-8.23,15.4-8.23,15.4,0,0,8.11-1.49,14.2-4.52,11.49-5.73,21.29-16.14,25.85-21.92,10.99-13.9,20.07-26.71,26.3-44.16,0,0,22.18,4.27,31.5-8.12,3.73-4.95,7.47-14.61,7.14-15.59-.32-.97-8.69-5.75-13.96-6.82-9.04-1.84-16.02.7-18.51,1.95-2.49-11.22-1.94-11.46-7.47-18.51-2.62-3.33-12.1-10.39-13.64-10.07Z"/>
                                <path className={`${tw_fill_light} ${tw_transition}`} d="M63.71,50.7c0-1.51,1.22-2.73,2.73-2.73h17.26c1.51,0,2.73,1.22,2.73,2.73v15.5c0,1.51-1.22,2.73-2.73,2.73h-17.26c-1.51,0-2.73-1.22-2.73-2.73v-15.5Z"/>
                                <path className={`${tw_fill_light} ${tw_transition}`} d="M89.75,50.7c0-1.51,1.22-2.73,2.73-2.73h17.26c1.51,0,2.73,1.22,2.73,2.73v15.5c0,1.51-1.22,2.73-2.73,2.73h-17.26c-1.51,0-2.73-1.22-2.73-2.73v-15.5Z"/>
                                <path className={`${tw_fill_light} ${tw_transition}`} d="M115.78,50.7c0-1.51,1.22-2.73,2.73-2.73h17.26c1.51,0,2.73,1.22,2.73,2.73v15.5c0,1.51-1.22,2.73-2.73,2.73h-17.26c-1.51,0-2.73-1.22-2.73-2.73v-15.5Z"/>
                                <path className={`${tw_fill_light} ${tw_transition}`} d="M115.78,26.67c0-1.51,1.22-2.73,2.73-2.73h17.26c1.51,0,2.73,1.22,2.73,2.73v15.5c0,1.51-1.22,2.73-2.73,2.73h-17.26c-1.51,0-2.73-1.22-2.73-2.73v-15.5Z"/>
                                <path className={`${tw_fill_light} ${tw_transition}`} d="M89.75,26.67c0-1.51,1.22-2.73,2.73-2.73h17.26c1.51,0,2.73,1.22,2.73,2.73v15.5c0,1.51-1.22,2.73-2.73,2.73h-17.26c-1.51,0-2.73-1.22-2.73-2.73v-15.5Z"/>
                                <path className={`${tw_fill_light} ${tw_transition}`} d="M115.78,2.73c0-1.51,1.22-2.73,2.73-2.73h17.26c1.51,0,2.73,1.22,2.73,2.73v15.5c0,1.51-1.22,2.73-2.73,2.73h-17.26c-1.51,0-2.73-1.22-2.73-2.73V2.73Z"/>
                                <path className={`${tw_fill_dark} ${tw_transition}`} d="M28.8,98.41c-1.65-3.49,4.72-6.55,16.02-6.52,11.3.03,16.09,11.03,10.53,13.83-8.83,4.45-24.91-3.86-26.55-7.32Z"/>
                            </svg>    
                        }
                    />
                </Link>
                <div className={`${tw_text_dark} ${tw_transition}`}>justcallmesam.com / {pathname.slice(1)}</div>
            </div>

            <div className={`flex gap-5 items-center max-md:hidden`}>
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/samuelbmarks">
                    <SocialIcon
                        iconSvg={
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path className={`${tw_fill_light} ${tw_transition}`} d="M4.98 2.5C4.98 3.881 3.87 5 2.5 5C1.13 5 0.02 3.881 0.02 2.5C0.02 1.12 1.13 0 2.5 0C3.87 0 4.98 1.12 4.98 2.5ZM5 7L0 7L0 23L5 23L5 7ZM12.982 7L8.014 7L8.014 23L12.983 23L12.983 14.601C12.983 9.931 19.012 9.549 19.012 14.601L19.012 23L24 23L24 12.869C24 4.989 15.078 5.276 12.982 9.155L12.982 7Z"/>
                            </svg>
                        }
                    />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelbmarks">
                    <SocialIcon
                        iconSvg={
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path className={`${tw_fill_light} ${tw_transition}`} d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>    
                        }
                    />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/thesammarks">
                    <SocialIcon
                        iconSvg={
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path className={`${tw_fill_light} ${tw_transition}`} d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        }
                    />
                </a>
                <div onClick={handleThemeChange}>
                   <SocialIcon
                        iconSvg={
                            <div className={`flex relative`}>
                                <svg className={`dark:opacity-0 opacity-100 ${tw_transition}`} viewBox="0 0 16 16" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path className={`${tw_fill_light} ${tw_transition}`} d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                                    <path className={`${tw_fill_light} ${tw_transition}`} d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                                </svg>
                                <svg className={`absolute dark:opacity-100 opacity-0 ${tw_transition}`} viewBox="0 0 15.5 16.5" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path className={`${tw_fill_light} ${tw_transition}`} d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                                </svg>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
  };
  
export default HomeBar;
