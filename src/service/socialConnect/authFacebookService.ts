import {  toast } from 'react-toastify';
import * as request from "@/lib/utils/request";
import "react-toastify/dist/ReactToastify.css";
import {
  loginStart,
    loginFailed,
    loginSuccess,
} from "@/service/reduxState/authSlices";
import { getAllInfoUser} from "@/service/api/apiAuthRequest";

export const handleFacebookLoginAsync = async (
    accessToken: string,
    dispatch: any,
    navigate: any
  ) => {
      try {
        const res = await request.post('/Auth_API/facebook-login', {accessToken: accessToken});
        dispatch(loginSuccess(res));
        if(res.status==200){
          getAllInfoUser({userId:res?.user?.userId},dispatch)
          toast.success('Đăng nhập Facebook thành công!');
          navigate.push('/');
        } else {
          toast.error('Đăng nhập Facebook thất bại!');
        }
      } catch (err:any) {
        dispatch(loginFailed());
        toast.error('Đăng nhập Facebook thất bại!');
      }
    };
  
  // Hàm login với Facebook và xử lý kết quả
  export const handleFacebookLogin = (dispatch: any, navigate: any) => {
    dispatch(loginStart());
    window.FB?.login((response: any) => {
      if (response.authResponse) {
        const accessToken = response.authResponse.accessToken;
        handleFacebookLoginAsync(accessToken, dispatch, navigate);
      } else {
        dispatch(loginFailed());
        toast.error('Người dùng hủy đăng nhập hoặc không hoàn tất xác thực.');
      }
    }, { scope: 'public_profile,email' });
  };