 export default function NavLeftCourse({ children }: { children: React.ReactNode }){
    return(
        <div className=" peer-checked/checkboxTranslate:translate-x-[-90%] transition duration-300 ease-in-out animate-out h-full fixed z-[2] bg-white w-[300px] translate-x-0 max-lg:hidden">
        {children}
        </div>
    )
 }