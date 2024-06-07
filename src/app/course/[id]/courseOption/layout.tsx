"use client"
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import NavLeftCourse from '@/app/components/course/navLeftCourse'; 
import BodyMainCourse from '@/app/components/course/bodyMainCourse';
import { useRouter } from 'next/navigation';
import { useEffect,useState } from 'react';
import { getAllCoursesByUser } from "@/service/api/apiCourseRequest";
export default function courseOption({
  navLeft,bodyMaterialCourse,params // will be a page or nested layout
  }: {
    children: React.ReactNode
    navLeft: React.ReactNode
    bodyMaterialCourse: React.ReactNode
    params: { id: string }
  }) {
    const dispatch = useDispatch();
    const user = useSelector((state:any)=> state.persistedReducer.auth?.login?.data?.user);
    const listCourses = useSelector((state: any) => state.ThunkReducer.courses.AllCourseByUsers?.data?.courses);
    const navigate = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      if (!user) {
        navigate.push("/login");
      }
      else{
        const UserId = {
          userId: user.userId
      }
        getAllCoursesByUser(UserId, dispatch).then(() => {
          setIsLoading(false);
      });
      }
    }, [dispatch,user,navigate]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    const currentCourse = listCourses?.find((course: any) => course.courseId === Number(params.id));

  if (currentCourse) {
    return (
      <div className="content__container">
        <input type="checkbox" id="content_checkbox" className="peer/checkboxTranslate hidden" />
        <NavLeftCourse>
          {navLeft}
        </NavLeftCourse>
        <BodyMainCourse>
          {bodyMaterialCourse}
        </BodyMainCourse>
      </div>
    );
  } else {
    navigate.push(`/course/${params.id}/courseDetails`);
    return null;
  }
  }