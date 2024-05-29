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
import {
  deleteUserFailed,
  deleteUsersSuccess,
  deleteUserStart,
  getUsersFailed,
  getUsersStart,
  getUsersSuccess,
  resetMsg,
} from "@/service/reduxState/userSlice";
//npm install axios

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

export const getAllUsers = async (accessToken:any, dispatch:any, axiosJWT:any) => {
  dispatch(getUsersStart());
  try {
    const res = await axiosJWT.get('/Auth/Get_AllUsers', {
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
    const res = await axiosJWT.delete('/v1/user/' + id, {
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
    await axiosJWT.post('/v1/auth/logout', id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logOutSuccess());
    dispatch(resetMsg());
    navigate("/login");
  } catch (err:any) {
    dispatch(logOutFailed(err.response.data));
  }
};