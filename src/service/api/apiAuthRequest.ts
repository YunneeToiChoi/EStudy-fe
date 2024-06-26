import * as request from "@/lib/utils/request";
import {
  loginStart,
    loginFailed,
    loginSuccess,
    registerStart,
    registerSuccess,
    registerFailed,
    logOutStart,
    logOutSuccess,
    logOutFailed,
} from "@/service/reduxState/authSlices";

export const loginUser = async (user:any, dispatch:any) => {//truyen req user(username,password), dispatch( truyen action tu state cua login), navigate( chuyen den trang moi nhu route-dom cua react)
  dispatch(loginStart());
  try {
    const res = await request.post('/Auth_API/Login', user);
    dispatch(loginSuccess(res));//nhan du lieu tu backend
  } catch (err:any) {
    dispatch(loginFailed());
    return err?.response;
  }
};

export const registerUser = async (user:any, dispatch:any) => {
  dispatch(registerStart());
  try {
    await request.post('/Auth_API/Register', user);
    dispatch(registerSuccess());
  } catch (err:any) {
    dispatch(registerFailed());
    return err?.response;
  }
};

export const logOut = async (dispatch:any,navigate:any) => {
  dispatch(logOutStart());
  try {
    dispatch(logOutSuccess());
    navigate("/login");
  } catch (err) {
    dispatch(logOutFailed());
  }
};

export const reSendEmail = async (email:any) => {
  try {
    const res =await request.post('/Auth_API/ResendLink', email);
    return res;
  } catch (err:any) {
    return err?.response;
  }
} 

export const forgotPassword = async (email:any) => {
  try{
    const res = await request.post('/Auth_API/RequestForgotPassword', email);
    return res;
  }catch (err:any) {
    return err?.response;
  }
}