"use client";
import { RequestApiNotifySuccess } from "@/service/api/apiWalletRequest";
import { useDispatch } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import LoadingEvent from "@/app/components/partialView/loadingEvent";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Định nghĩa kiểu dữ liệu cho params từ URL
interface MomoData {
  partnerCode?: string;
  orderId?: string;
  requestId?: string;
  amount?: number;
  orderInfo?: string;
  orderType?: string;
  transId?: string;
  resultCode?: number;
  message?: string;
  payType?: string;
  responseTime?: string;
  extraData?: string;
  signature?: string;
  callbackToken?: string;
  partnerClientId?: string;
  walletId?: string;
}

// Chuyển các query params thành object kiểu `MomoData`
const queryParamsToObject = (params: URLSearchParams): Partial<MomoData> => {
  const result: Partial<MomoData> = {};
  params.forEach((value:any, key:any) => {
    result[key as keyof MomoData] = key === "amount" || key === "resultCode" 
      ? Number(value) 
      : value;
  });
  return result;
};

export default function SuccessOrderByMomo() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isValidParams, setIsValidParams] = useState(false);
  const navigate = useRouter();

  const searchParams = useMemo(() => new URLSearchParams(window.location.search), []);

  const momoData = useMemo(() => {
    const data = queryParamsToObject(searchParams);
    const walletId = localStorage.getItem("walletId") ?? "";  
    return { ...data, walletId } as MomoData;
  }, [searchParams]);

  useEffect(() => {
    const checkParamsAndFetch = async () => {
      if (momoData.partnerCode && momoData.orderId) {
        setIsValidParams(true);

        try {
          const res = await RequestApiNotifySuccess(momoData, dispatch);

          if (res?.status === 200) {
            toast.success("Đăng kí thành công!", {
              position: "bottom-center",
              autoClose: 10000,
              theme: "light",
              transition: Bounce,
            });
          } else {
            throw new Error("Giao dịch thất bại");
          }
        } catch (error) {
          toast.error("Đăng kí thất bại!", {
            position: "bottom-center",
            autoClose: 10000,
            theme: "light",
            transition: Bounce,
          });
        }
      } else {
        setIsValidParams(false);
      }
      setIsLoading(false);
    };
    checkParamsAndFetch();
    localStorage.removeItem("walletId");
    navigate.push("/purchases/payment-method")
  }, [dispatch, momoData, navigate]);

  if (isLoading) {
    return <LoadingEvent />;
  }

  if (!isValidParams) {
    return <div>Page không tồn tại</div>;
  }

  return null;
}
