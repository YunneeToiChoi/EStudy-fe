import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetAllUnitsByCourse } from "@/service/api/apiCourseRequest";

const useGetAllUnits = (params: any) => {
  const { course: idCourse } = params;
  const courseId = Number(idCourse);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.persistedReducer.auth?.login?.data);
  const userId = user?.user.userId;
  // Sử dụng useMemo để giữ nguyên giá trị của apiRequest giữa các lần render
  const apiRequest = useMemo(() => ({
    courseId: courseId,
    userId: userId
  }), [courseId, userId]);

  const ListUnits = useSelector((state: any) => state.ThunkReducer.unit?.units?.data?.units);

  useEffect(() => {
    GetAllUnitsByCourse(apiRequest, dispatch);
  }, [apiRequest, dispatch]); // Thêm `apiRequest` vào dependency array

  return ListUnits;
};

export default useGetAllUnits;
