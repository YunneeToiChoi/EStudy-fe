import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logOutFailed,
  logOutStart,
  logOutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authSlices";
import {
  deleteUserFailed,
  deleteUsersSuccess,
  deleteUserStart,
  getUsersFailed,
  getUsersStart,
  getUsersSuccess,
  resetMsg,
} from "./userSlice";
//npm install axios

const URL_ENDPOINT=process.env.NEXT_PUBLIC_API_ENDPOINT;

export const loginUser = async (user:any, dispatch:any, navigate:any) => {//truyen req user(username,password), dispatch( truyen action tu state cua login), navigate( chuyen den trang moi nhu route-dom cua react)
  dispatch(loginStart());
  try {
    const res = await axios.post(`${URL_ENDPOINT}/Auth/Login`, user,{withCredentials:true});
    dispatch(loginSuccess(res.data));//nhan du lieu tu backend
    navigate("/");
  } catch (err:any) {
    dispatch(loginFailed(err.response.data));
  }
};

export const registerUser = async (user:any, dispatch:any, navigate:any) => {
  dispatch(registerStart());
  try {
    await axios.post(`${URL_ENDPOINT}/Auth/Register`, user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (err:any) {
    dispatch(registerFailed(err.response.data));
  }
};

export const getAllUsers = async (accessToken:any, dispatch:any, axiosJWT:any) => {
  dispatch(getUsersStart());
  try {
    const res = await axiosJWT.get(`${URL_ENDPOINT}/Courses/GetAllCourses`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err:any) {
    dispatch(getUsersFailed(err.response.data));
  }
};

export const deleteUser = async (accessToken:any, dispatch:any, id:any, axiosJWT:any) => {
  dispatch(deleteUserStart());
  try {
    const res = await axiosJWT.delete(`${URL_ENDPOINT}/v1/user/` + id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(deleteUsersSuccess(res.data));
  } catch (err:any) {
    dispatch(deleteUserFailed(err.response.data));
  }
};

export const logOut = async (dispatch:any, id:any, navigate:any, accessToken:any, axiosJWT:any) => {
  dispatch(logOutStart());
  try {
    await axiosJWT.post(`${URL_ENDPOINT}/v1/auth/logout`, id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logOutSuccess());
    dispatch(resetMsg());
    navigate("/login");
  } catch (err:any) {
    dispatch(logOutFailed(err.response.data));
  }
};