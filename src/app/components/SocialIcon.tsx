interface SocialIconProps {
    iconSvg: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ iconSvg }) => {
      
    return (   
        <div className="relative flex flex-col group"
            style={{
                
            }}    
        >
            <div 
                className="
                    z-40 w-[48px] h-[48px] flex items-center justify-center
                    cursor-pointer rounded-lg shadow-xl
                    bg-slate-800 group-hover:bg-slate-600
                    dark:bg-slate-300 dark:group-hover:bg-slate-200
                    transition-all duration-300 ease-in-out
                "
            >{iconSvg}</div>
            <div 
                className="
                    z-20 absolute w-[48px] h-[48px]
                    translate-x-[-0.25rem] translate-y-[0.25rem]
                    group-hover:translate-x-[-0.4rem] group-hover:translate-y-[0.4rem]
                    cursor-pointer rounded-lg shadow-xl
                    bg-slate-600 group-hover:bg-slate-500
                    dark:bg-slate-400 dark:group-hover:bg-slate-300
                    transition-all duration-300 ease-in-out
                "
            ></div>
            <div
                className="
                    z-10 absolute w-[48px] h-[48px]
                    translate-x-[-0.5rem] translate-y-[0.5rem]
                    group-hover:translate-x-[-0.71rem] group-hover:translate-y-[0.71rem]
                    cursor-pointer rounded-lg shadow-xl
                    bg-slate-400 group-hover:bg-slate-400
                    dark:bg-slate-500 dark:group-hover:bg-slate-400
                    transition-all duration-300 ease-in-out
                "
            ></div>
        </div>
    )
};

export default SocialIcon;
