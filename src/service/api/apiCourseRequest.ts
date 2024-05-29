import * as request from "@/lib/utils/request";
import {
    getCourseStart,
    getCourseFailed,
    getCourseSuccess,
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