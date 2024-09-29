import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {
  loginStart,
  loginFailed,
  loginSuccess,
} from "@/service/reduxState/authSlices";
import { getAllInfoUser } from "@/service/api/apiAuthRequest";
import { jwtDecode } from "jwt-decode";

export const handleGoogleLogin = async (dispatch: any, navigate: any) => {
  const googleOAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth'; // Sử dụng v2
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
          if (decoded) {
            dispatch(loginSuccess(decoded));
            getAllInfoUser({ userId: decoded.nameid }, dispatch);
            toast.success('Đăng nhập Google thành công!', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            });
            navigate.push("/");
          }
        } catch (error) {
          dispatch(loginFailed());
          console.error('Lỗi khi giải mã token:', error);
          toast.error('Lỗi khi giải mã token!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        }
      } else {
        dispatch(loginFailed());
        toast.error('Đăng nhập Google thất bại!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }

      // Gỡ bỏ listener sau khi đăng nhập xong
      window.removeEventListener("message", handlePopupMessage);
    }
  };

  // Thêm event listener
  window.addEventListener("message", handlePopupMessage);

  await new Promise<void>((resolve) => {
    const checkPopupClosed = setInterval(() => {
      if (popup?.closed) {
        clearInterval(checkPopupClosed);

        // Gỡ bỏ event listener khi popup đóng
        window.removeEventListener("message", handlePopupMessage);

        resolve();
      }
    }, 500);
  });
};
