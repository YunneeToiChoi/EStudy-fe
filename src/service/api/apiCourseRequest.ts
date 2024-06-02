import * as request from "@/lib/utils/request";
import {
    getCourseStart,
    getCourseFailed,
    getCourseSuccess,
    getAllUsersByCourseSuccess,
    getAllUsersByCourseStart,
    getAllUsersByCourseFailed,
    getAllCourseByUsersStart,
    getAllCourseByUsersSuccess,
    getAllCourseByUsersFailed,
}
from "@/service/reduxState/courseSlices";

export const getAllCourse = async (dispatch:any, navigate:any) => {//truyen req user(username,password), dispatch( truyen action tu state cua login), navigate( chuyen den trang moi nhu route-dom cua react)
    dispatch(getCourseStart());
    try {
      const res = await request.get('/Courses_API/Get_AllCourses');
      dispatch(getCourseSuccess(res));//nhan du lieu tu backend
      navigate("/");
    } catch (err:any) {
      dispatch(getCourseFailed(err.response.data));
    }
  };

export const getAllUserByCourse = async (idCourse:any,dispatch:any, navigate:any) => {
  dispatch(getAllUsersByCourseStart()); 
  try{
    const res = await request.post('/UserCourses_API/Get_AllUsersBuyCourse',idCourse);
    dispatch(getAllUsersByCourseSuccess(res));
    navigate("#");
  }catch (err:any) {
    dispatch(getAllUsersByCourseFailed(err.response.data));
  }
}
export const getAllCoursesByUser = async (idUser:any,dispatch:any, navigate:any)=>{
  dispatch(getAllCourseByUsersStart());
  try {
    const res = await request.post('/UserCourses_API/Get_AllCoursesByUser', idUser);
    dispatch(getAllCourseByUsersSuccess(res))
    navigate("#");
  }
  catch (err:any) {
    dispatch(getAllCourseByUsersFailed(err.response.data));
  }
};