import axios from "axios";
import {
    getCourseStart,
    getCourseFailed,
    getCourseSuccess,
}
from "@/app/service/redux/courseSlices";


const URL_ENDPOINT=process.env.NEXT_PUBLIC_API_ENDPOINT;

export const getAllCourse = async (dispatch:any, navigate:any) => {//truyen req user(username,password), dispatch( truyen action tu state cua login), navigate( chuyen den trang moi nhu route-dom cua react)
    dispatch(getCourseStart());
    try {
      const res = await axios.get(`${URL_ENDPOINT}/Courses_API/Get_AllCourses`);
      dispatch(getCourseSuccess(res.data));//nhan du lieu tu backend
      navigate("/");
    } catch (err:any) {
      dispatch(getCourseFailed(err.response.data));
    }
  };