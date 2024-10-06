import * as request from "@/lib/utils/request";

import {
  OrderStart,
  OrderFailed,
  OrderSuccess,
}
from "@/service/reduxState/orderSlices";

import{
    MomoStart,
    MomoFailed,
    MomoSuccess,
    NotifyMomoStart,
    NotifyMomoSuccess,
    NotifyMomoFailed,
}
from "@/service/reduxState/paymentSlices"

const handleRandomReqID = async (idUser: string, idCourse: string): Promise<string> => {
  const currentDate = new Date().toLocaleString().replace(/\D/g, '');
  return `${idUser}${idCourse}${currentDate}`.split('').sort(() => Math.random() - 0.5).join('');
};

 const handlePayment = async (ID:any,name:string,resOrder:any,lastPrice:any,idUser:any,dispatch:any,navigate:any) => {
  const reqId:string = await handleRandomReqID(idUser,ID.toString());
  const dataPaymentMomo = {
    subPartnerCode: "",
    requestId: reqId,
    amount: lastPrice,
    orderId: String(resOrder.orderId),
    orderInfo: `Thanh toán: ${name}`,
    redirectUrl: process.env.NEXT_PUBLIC_CLIENT_ENDPOINT,
    ipnUrl: process.env.NEXT_PUBLIC_MOMO_IPNURL,
    requestType: "captureWallet",
    extraData: "",
    lang: "vi",
  };
  RequestApiPaymentMomo(dataPaymentMomo, dispatch, navigate);
};
export const RequestApiOrderPlan = async (dataOrder:any,dispatch:any,lastPrice:any,ID:any,name:string,idUser:string,navigate:any) => {
  dispatch(OrderStart()); 
  try{
    const res = await request.post('/Order_API/Order_Plan',dataOrder);
    dispatch(OrderSuccess(res));
    await handlePayment(ID,name,res,lastPrice,idUser,dispatch,navigate);
  }catch (err:any) {
    dispatch(OrderFailed());
    return err.response;
  }
}

export const RequestApiOrderCourse = async (dataOrder:any,dispatch:any,lastPrice:any,ID:any,name:string,idUser:string,navigate:any) => {
    dispatch(OrderStart()); 
    try{
      const res = await request.post('/Order_API/Buy_Course',dataOrder);
      dispatch(OrderSuccess(res));
      await handlePayment(ID,name,res,lastPrice,idUser,dispatch,navigate);
    }catch (err:any) {
      dispatch(OrderFailed());
      return err.response;
    }
  }
  
  const RequestApiPaymentMomo = async (dataPayment:any,dispatch:any,navigate:any) => {
    dispatch(MomoStart()); 
    try{
      const res = await request.post('/Momo_Payment/MakePayment',dataPayment);
      dispatch(MomoSuccess(res));
      if(res.resultCode==0){
        navigate(res.payUrl);
      }
    }catch (err:any) {
      dispatch(MomoFailed())
      return err.response;
    }
  }

export const RequestApiNotifySuccess = async (dataTracking:any,dispatch:any) => {
const parsedUrl = new URL(dataTracking);
const queryParams = new URLSearchParams(parsedUrl.search);
const orderId = queryParams.get('orderId');
const requestId = queryParams.get('requestId');
const requestData={
  orderId: String(orderId),
  requestId: String(requestId)
}
  dispatch(NotifyMomoStart()); 
  try{
    const res = await request.post('/Momo_Payment/RequestTracking',requestData);
    dispatch(NotifyMomoSuccess(res));
    return res;
  }catch (err:any) {
    const { status, data } = err.response;
    dispatch(NotifyMomoFailed({ status, data }));
    return err?.response;
  }
}

export const ActiveCodeCourse = async (data:any) => {
  try{
    const res = await request.post('/Auth_API/ActiveCode',data);
    return res;
  }catch (err:any) {
    return err?.response;
  }
}
