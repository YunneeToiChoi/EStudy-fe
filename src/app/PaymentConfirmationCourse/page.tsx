"use client"
import { RequestApiNotifySuccess } from "@/service/api/apiOrderRequest";
import { useDispatch} from "react-redux";
import { useEffect, useState,useMemo } from "react";
import { useRouter } from 'next/navigation';
import  LoadingEvent from "@/app/components/partialView/loadingEvent"
import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function SuccessOrderByMomo() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useMemo(() => new URLSearchParams(window.location.search), []);
  const [isValidParams, setIsValidParams] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    const partnerCode = searchParams.get('partnerCode');
    const checkParamsAndFetch = async () => {
      if (partnerCode && searchParams.get('orderId')) {
        setIsValidParams(true);
       const res = await RequestApiNotifySuccess(window.location.href, dispatch)
       console.log(res)
       if (res && res?.status === 200) {
        toast.success('Thanh toán thành công !', {
          position: "bottom-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        toast.info('Chúng tôi đã gửi mã đến email của bạn, hãy kiểm tra và kích hoạt khoá học tại đây !', {
          position: "bottom-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        navigate.push('/activeCourse');
      }
      else{
        toast.error('Thanh toán thất bại !', {
          position: "bottom-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
         navigate.push('/');
      }
      } else {
        setIsValidParams(false);
        setIsLoading(false);
      }
    };

    checkParamsAndFetch();
  }, [dispatch,navigate]);

  if (isLoading) {
    return <LoadingEvent></LoadingEvent>;
  }

  if (!isValidParams) {
    return <div>Page không tồn tại</div>;
  }
}
