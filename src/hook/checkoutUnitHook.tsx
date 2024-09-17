"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { getAllCoursesByUser } from "@/service/api/apiCourseRequest";

interface Params {
  course: string;
}

const useCheckoutUnitHook = (params: Params) => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const listCourses = useSelector((state: any) => state.ThunkReducer.courses.AllCourseByUsers?.data?.courses);
  const ListUnits = useSelector((state: any) => state.ThunkReducer.unit.units?.data?.units);

  const [dataFetched, setDataFetched] = useState(false);

  const checkCourse = ListUnits?.some((Unit: any) => Unit.courseId === Number(params.course));

  const redirectToLogin = useCallback(() => {
    navigate.push("/login");
  }, [navigate]);

  const fetchCourses = useCallback(async () => {
    if (user && !checkCourse) {
      const userId = { userId: user.userId };
      await getAllCoursesByUser(userId, dispatch);
    }
    setDataFetched(true);
  }, [user, dispatch, checkCourse]);

  useEffect(() => {
    if (!user) {
      redirectToLogin();
    } else {
      fetchCourses();
    }
  }, [user, redirectToLogin, fetchCourses]);

  const currentCourse = listCourses?.find((course: any) => course.courseId === Number(params.course));

  useEffect(() => {
    if (user && dataFetched && !currentCourse) {
      navigate.push(`/course/${params.course}/courseDetails`);
    }
  }, [user, dataFetched, currentCourse, navigate, params.course]);

  return { user, dataFetched, currentCourse };
};

export default useCheckoutUnitHook;
