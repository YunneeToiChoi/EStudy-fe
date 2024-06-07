"use client"
import Link from 'next/link';
import { useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {GetAllUnitsByCourse} from "@/service/api/apiCourseRequest"


export function getAllUnitsComponent(params:any){
  const { id: idCourse } = params;
  const courseId = Number(idCourse);
  const dispatch = useDispatch();
  const user = useSelector((state:any)=> state.persistedReducer.auth?.login?.data);
  const userId = user?.user.userId;
  const apiRequest={
    courseId:courseId,
    userId:userId
  }
  const ListUnits = useSelector((state:any)=> state.ThunkReducer.user?.units?.data?.units);

  useEffect(() => {
    GetAllUnitsByCourse(apiRequest, dispatch);
  }, [dispatch]);
  return ListUnits;
}

interface UnitsListProps {
    params: any;
  }

const ListUnitsComponent: React.FC<UnitsListProps> = ({params}) => {
    const ListUnits= getAllUnitsComponent(params);
    return(
        <div>
             <div className=" flex px-2 py-5 bg-nav-hover-text-color items-center justify-between">
            <Link href="" className=" text-xl no-underline text-white">IELTS General Reading</Link>
            <label htmlFor="content_checkbox"
              ><i className=" text-white text-xl cursor-pointer fa-solid fa-angle-left"></i></label>
          </div>
          <div className="border-r-[1px] border-r-[#e0e0e0]">
            <ul className=" list-none">
              {Array.isArray(ListUnits) && ListUnits.length > 0 ? (
                        ListUnits.map((units: any) => (
                            <li key={units.unitId} className="course-learn__item">
                                <Link href="" className="border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out">
                                    {units?.unitTittle}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>No units available</li>
                    )}
            </ul>
          </div>
        </div>
    )
}
export default ListUnitsComponent;