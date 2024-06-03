import * as request from "@/lib/utils/request";
import {
    getCourseStart,
    getCourseFailed,
    getCourseSuccess,
    getCourseDetailSuccess,
    getCourseDetailStart,
    getCourseDetailFailed,
    getAllCourseByUsersStart,
    getAllCourseByUsersSuccess,
    getAllCourseByUsersFailed,
}
from "@/service/reduxState/courseSlices";

export const getAllCourse = async (dispatch:any) => {//truyen req user(username,password), dispatch( truyen action tu state cua login), navigate( chuyen den trang moi nhu route-dom cua react)
    dispatch(getCourseStart());
    try {
      const res = await request.get('/Courses_API/Get_AllCourses');
      dispatch(getCourseSuccess(res));//nhan du lieu tu backend
    } catch (err:any) {
      dispatch(getCourseFailed(err.response.data));
    }
  };

export const getAllDetailCourse = async (idCourse:any,dispatch:any) => {
  dispatch(getCourseDetailStart()); 
  try{
    const res = await request.post('/UserCourses_API/Get_DetailCourseAndUserBought',idCourse);
     dispatch(getCourseDetailSuccess(res));
  }catch (err:any) {
    dispatch(getCourseDetailFailed(err.response.data));
  }
}

export const getAllCoursesByUser = async (idUser:any,dispatch:any)=>{
  dispatch(getAllCourseByUsersStart());
  try {
    const res = await request.post('/UserCourses_API/Get_AllCoursesByUser', idUser);
     dispatch(getAllCourseByUsersSuccess(res))
  }
  catch (err:any) {
    dispatch(getAllCourseByUsersFailed(err.response.data));
  }
};