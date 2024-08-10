interface TextButtonProps {
    textDiv: React.ReactNode;
}

const TextButton: React.FC<TextButtonProps> = ({ textDiv }) => {
      
    return (   
        <div className="relative flex group w-full">
            <div 
                className="
                    z-40 py-3 px-6 rounded-lg flex-1
                    bg-slate-800 group-hover:bg-slate-600
                    dark:bg-slate-300 dark:group-hover:bg-slate-200
                    cursor-pointer rounded-xl shadow-xl
                    transition-all duration-300 ease-in-out
                "
            >{textDiv}</div>
            <div 
                className="
                    z-20 absolute py-3 w-full rounded-lg flex-1
                    bg-slate-600 group-hover:bg-slate-500
                    dark:bg-slate-400 dark:group-hover:bg-slate-300
                    translate-x-[-0.25rem] translate-y-[0.25rem]
                    group-hover:translate-x-[-0.4rem] group-hover:translate-y-[0.4rem]
                    cursor-pointer rounded-xl shadow-xl
                    transition-all duration-300 ease-in-out
                "
            >{textDiv}</div>
            <div
                className="
                    z-10 absolute py-3 w-full rounded-lg flex-1
                    bg-slate-400 group-hover:bg-slate-400
                    dark:bg-slate-500 dark:group-hover:bg-slate-400
                    translate-x-[-0.5rem] translate-y-[0.5rem]
                    group-hover:translate-x-[-0.71rem] group-hover:translate-y-[0.71rem]
                    cursor-pointer rounded-xl shadow-xl
                    transition-all duration-300 ease-in-out
                "
            >{textDiv}</div>
        </div>
    )
};

export default TextButton;
