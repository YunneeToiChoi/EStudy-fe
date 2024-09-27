import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetAllUnitsByCourse } from "@/service/api/apiCourseRequest";

const useGetAllUnits = (params: any) => {
  const { course: idCourse } = params;
  const courseId = Number(idCourse);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const unitsFromState = useSelector((state: any) => state.ThunkReducer.unit?.units?.data?.units);
  
  const userId = user?.userId;

  const apiRequest = useMemo(() => ({
    courseId: courseId,
    userId: userId
  }), [courseId, userId]);

  useEffect(() => {
    if (!unitsFromState || !unitsFromState.some((unit: any) => unit.courseId === courseId)) {
      GetAllUnitsByCourse(apiRequest, dispatch);
    }
  }, [dispatch,courseId,apiRequest,unitsFromState]);

  return unitsFromState;
};

export default useGetAllUnits;
