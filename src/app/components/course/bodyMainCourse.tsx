 export default function BodyMainCourse({ children }: { children: React.ReactNode }){
    return(
        <div className="peer-checked/checkboxTranslate:ml-[30px] transition duration-500 ease-linear animate-out lg:ml-[300px] bg-[#D4F1F4] min-h-[1200px]">
         {children}
        </div>
    )
 }