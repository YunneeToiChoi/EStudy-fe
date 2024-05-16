import {
    loginFailed,
    loginStart,
    loginSuccess,
    registerStart,
    registerSuccess,
    registerFailed,
    logOutStart,
    logOutSuccess,
    logOutFailed,
  } from "./authSlices";
  import axios from "axios";
  import {
    // clearUserList,
    deleteUserFailed,
    deleteUserStart,
    deleteUsersSuccess,
    getUsersFailed,
    getUsersStart,
    getUsersSuccess,
  } from "./userSlice";
  
  export const login = async (user:any, dispatch:any, navigate:any) => {
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:8000/v1/auth/login", user);
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch {
      dispatch(loginFailed());
    }
  };
  
  export const register = async (user:any, dispatch:any, navigate:any) => {
    dispatch(registerStart());
    try {
      await axios.post("http://localhost:8000/v1/auth/register", user);
      dispatch(registerSuccess());
      navigate("/login");
    } catch (err:any) {
      console.log(err);
      dispatch(registerFailed(err));
    }
  };
  
  export const getAllUsers = async (token:any, dispatch:any, axiosJWT:any) => {
    dispatch(getUsersStart());
    try {
      const res = await axiosJWT.get("http://localhost:8000/v1/user/", {
        headers: { token: `Bearer ${token}` },
      });
      dispatch(getUsersSuccess(res.data));
    } catch (err) {
      dispatch(getUsersFailed());
    }
  };
  
  export const deleteUser = async (id:any, dispatch:any, token:any) => {
    console.log("delete");
    dispatch(deleteUserStart());
    try {
      console.log(id);
      const res = await axios.delete("http://localhost:8000/v1/user/" + id, {
        headers: { token: `Bearer ${token}` },
      });
      dispatch(deleteUsersSuccess(res.data));
    } catch (err:any) {
      dispatch(deleteUserFailed(err.response.data));
    }
  };
  
  export const logOut = async (dispatch:any, navigate:any) => {
    dispatch(logOutStart());
    try {
      const res = await axios.post("http://localhost:8000/v1/auth/logout");
      dispatch(logOutSuccess());
      // dispatch(clearUserList());
      navigate("/login");
    } catch (err) {
      dispatch(logOutFailed());
    }
  };