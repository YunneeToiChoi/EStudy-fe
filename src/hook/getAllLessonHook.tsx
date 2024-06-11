import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetAllUnitsByCourse } from "@/service/api/apiCourseRequest";

const useGetAllLessons = (params: any) => {
  const { course: idCourse } = params;
  const courseId = Number(idCourse);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.persistedReducer.auth?.login?.data);
  const CourseId = useSelector((state: any) => state.ThunkReducer.unit.units?.data?.units);

  const userId = user?.user.userId;

  const apiRequest = useMemo(() => ({
    courseId: courseId,
    userId: userId
  }), [courseId, userId]);

  const ListUnits=useSelector((state: any) => state.ThunkReducer.contentUnits?.ContentUnit?.data);
  const Unit=ListUnits?.find((unit:any)=>unit.unitId===Number(params.unit));
  const ListContainer =Unit?.containers;
  const Container=ListContainer?.find((container:any)=>container.containerId===Number(params.container));
  const ListLessons =Container?.lessons;


  useEffect(() => {
    if (!CourseId || CourseId.length === 0 || !CourseId.some((unit: any) => unit.courseId === courseId)) {
      GetAllUnitsByCourse(apiRequest, dispatch);
    }
  }, [dispatch, apiRequest, CourseId, courseId]);

  return ListLessons;
};

export default useGetAllLessons;
