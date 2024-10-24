"use client"
import { RequestApiNotifySuccess } from "@/service/api/apiOrderRequest";
import {getPrivateDoc} from "@/service/api/apiDocumentRequest";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState,useMemo } from "react";
import { useRouter } from 'next/navigation';
import  LoadingEvent from "@/app/components/partialView/loadingEvent"
import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function SuccessOrderByMomo() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isValidParams, setIsValidParams] = useState(false);
  const searchParams = useMemo(() => new URLSearchParams(window.location.search), []);
  const partnerCode = searchParams.get('partnerCode');
  const navigate = useRouter();

  useEffect(() => {
    const checkParamsAndFetch = async () => {
      if (partnerCode && searchParams.get('orderId')) {
        setIsValidParams(true);
       const res = await RequestApiNotifySuccess(window.location.href, dispatch)
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
        const orderId = searchParams.get('orderId');
        const resPdf= await getPrivateDoc(orderId);
        const { pdfUrl, Title} = resPdf;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank'; 
        link.download = `${Title}.pdf`; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        navigate.push('/profile');
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
  }, [dispatch,partnerCode,searchParams,navigate]);

  if (isLoading) {
    return <LoadingEvent></LoadingEvent>;
  }

  if (!isValidParams) {
    return <div>Page không tồn tại</div>;
  }
}
