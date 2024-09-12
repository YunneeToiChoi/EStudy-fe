import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {
  loginStart,
    loginFailed,
    loginSuccess,
} from "@/service/reduxState/authSlices";
import { getAllInfoUser} from "@/service/api/apiAuthRequest";
import { jwtDecode } from "jwt-decode";

export const handleGoogleLogin = async (dispatch: any, navigate: any) => {
  const googleOAuthUrl = 'https://accounts.google.com/o/oauth2/auth';
  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!, 
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!, 
    response_type: 'code',
    scope: 'openid profile email'
  });

  dispatch(loginStart());
  const popup = window.open(`${googleOAuthUrl}?${params.toString()}`, '_blank', 'width=500,height=600');
  
  // Function to handle message event
  const handlePopupMessage = (event: MessageEvent) => {
    if (event.origin === 'https://localhost:44300') {
      const { token } = event.data;
      if (token) {
        try {
          const decoded = jwtDecode(token) as { [key: string]: any };
          if(decoded){
            dispatch(loginSuccess(decoded));
            getAllInfoUser({userId:decoded.nameid},dispatch)
            toast.success('Đăng nhập Google thành công!');
            navigate.push("/");
          }
        } catch (error) {
          dispatch(loginFailed());
          console.error('Lỗi khi giải mã token:', error);
          toast.error('Lỗi khi giải mã token!');
        }
      } else {
        dispatch(loginFailed());
        toast.error('Đăng nhập Google thất bại!');
      }
      window.removeEventListener('message', handlePopupMessage);
    }
  };

  window.addEventListener('message', handlePopupMessage);

  // Wait for the popup to close
  await new Promise<void>((resolve) => {
    const checkPopupClosed = setInterval(() => {
      if (popup?.closed) {
        clearInterval(checkPopupClosed);
        resolve();
      }
    }, 500);
  });

  window.removeEventListener('message', handlePopupMessage);
};
