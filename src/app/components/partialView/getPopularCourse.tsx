"use client"
import Image from 'next/image';
import  Link  from 'next/link';

import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularCourse } from "@/service/api/apiCourseRequest";

export default function GetPoplarCourses() {
  const user = useSelector((state: any) => state.persistedReducer.auth.login?.data?.user);
  const dispatch = useDispatch();
  const listCourses = useSelector((state: any) => state.ThunkReducer.courses.PopularCourse?.data?.outstandingCourses);

    useEffect(() => {
        if (!listCourses) {
            const data = { 
                userId: user?.userId,
                amountOutstanding: 4
            }
            getPopularCourse(data, dispatch);
        }
    }, [dispatch, listCourses, user]);

    return(
      <div className="relative my-[150px] w-screen rounded-3xl left-1/2 transform -translate-x-1/2 bg-[#F5F5FD]  p-16">
             <h2 className="  font-semibold text-3xl text-center text-[#17165B] ">Khóa học online nổi bật</h2>
            <div className=" mt-16 grid grid-cols-3 gap-14">
            {listCourses?.map((course:any) =>{
                return(
                <Link key={course.courseId} href={`/course/${course.courseId}/courseDetails`}className=" group">
                <div className=" shadow-md flex flex-col items-center group-hover:shadow-lg transition duration-500 delay-75 ease-in-out bg-white p-4 rounded-xl mb-5">
                <div className='mb-5 w-full h-72 group relative overflow-hidden rounded-[10px] '>
                  <Image className='object-fill transition duration-500 ease group-hover:brightness-[95%] group-hover:scale-105' 
                  width={1000} 
                  height={1000} 
                  quality={100}
                  alt='image' 
                  src="/img/Speak_E.jpg">
                  </Image>
                </div>
                <h3 className=" text-base font-medium text-center">{course.courseName}</h3>
                  <div className=" pt-2 flex flex-col">
                    <div className="">
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className=" text-xl font-semibold text-price-color">{course.coursePrice}</span>
                    <span className=" text-xl line-through px-3">899.000đ</span>
                    <span className=" py-[3px] px-[6px] text-white font-bold text-sm bg-primary-bg-orange-color rounded-xl my-[10px]">-22%</span>
                  </div>
                </div>
              </Link>
                )
              })}
            </div>
        </div>
    )
}