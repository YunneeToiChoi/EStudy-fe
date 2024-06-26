"use client"
import { RequestApiNotifySuccess } from "@/service/api/apiOrderRequest";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function SuccessOrderByMomo() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const res = useSelector((state: any) => state.ThunkReducer.paymentMomo?.NotifyMomo?.data);
  const [isValidParams, setIsValidParams] = useState(false);
  const searchParams = new URLSearchParams(window.location.search);
  const partnerCode = searchParams.get('partnerCode');

  useEffect(() => {
    const checkParamsAndFetch = () => {
      // Kiểm tra xem partnerCode và orderId có tồn tại không
      if (partnerCode && searchParams.get('orderId')) {
        setIsValidParams(true);
        RequestApiNotifySuccess(window.location.href, dispatch)
          .then(() => {
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Failed to fetch", error);
            setIsLoading(false);
          });
      } else {
        setIsValidParams(false);
        setIsLoading(false);
      }
    };

    checkParamsAndFetch();
  }, [dispatch,partnerCode]);

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (!isValidParams) {
    return <div>Page không tồn tại</div>;
  }

  if (res && res?.status === 200) {
    return <div>Order completed successfully!</div>;
  }

  if (res && ( res.status === 400||res.status ===503||res.status ===403||res.status ===401||res.status ===500)) {
    return <div>{res?.data?.message}</div>;
  }

  return null;
}
