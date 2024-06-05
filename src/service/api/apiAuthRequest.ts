import * as request from "@/lib/utils/request";
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
} from "@/service/reduxState/authSlices";

export const loginUser = async (user:any, dispatch:any, navigate:any) => {//truyen req user(username,password), dispatch( truyen action tu state cua login), navigate( chuyen den trang moi nhu route-dom cua react)
  dispatch(loginStart());
  try {
    const res = await request.post('/Auth_API/Login', user);
    dispatch(loginSuccess(res));//nhan du lieu tu backend
    navigate("/");
  } catch (err:any) {
    dispatch(loginFailed(err.response.data));
  }
};

export const registerUser = async (user:any, dispatch:any, navigate:any) => {
  dispatch(registerStart());
  try {
    await request.post('/Auth_API/Register', user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (err:any) {
    dispatch(registerFailed(err.response.data));
  }
};