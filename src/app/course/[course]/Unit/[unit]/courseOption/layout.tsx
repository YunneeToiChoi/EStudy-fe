"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import NavLeftCourse from '@/app/components/course/navLeftCourse'; 
import BodyMainCourse from '@/app/components/course/bodyMainCourse';
import { useRouter } from 'next/navigation';
import { getAllCoursesByUser } from "@/service/api/apiCourseRequest";

export default function useCourseOption({
  navLeft, bodyMaterialCourse, params
}: {
  children: React.ReactNode,
  navLeft: React.ReactNode,
  bodyMaterialCourse: React.ReactNode,
  params: { course: string }
}) {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.persistedReducer.auth?.login?.data?.user);
  const listCourses = useSelector((state: any) => state.ThunkReducer.courses.AllCourseByUsers?.data?.courses);
  const navigate = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const redirectToLogin = useCallback(() => {
    navigate.push("/login");
  }, [navigate]);

  const fetchCourses = useCallback(() => {
    if (user) {
      const userId = { userId: user.userId };
      getAllCoursesByUser(userId, dispatch)
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch courses", error);
        });
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (!user) {
      redirectToLogin();
    } else {
      fetchCourses();
    }
  }, [user, redirectToLogin, fetchCourses]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const currentCourse = listCourses?.find((course: any) => course.courseId === Number(params.course));

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
    navigate.push(`/course/${params.course}/courseDetails`);
    return null;
  }
}
