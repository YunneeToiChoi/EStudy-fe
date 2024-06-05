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

 const handlePayment = async (courseDetail:any,resOrder:any,idUser:any,dispatch:any,navigate:any) => {
  console.log("avvaaaa")
  const reqId:string = await handleRandomReqID(idUser,courseDetail.courseId.toString());
  const dataPaymentMomo = {
    subPartnerCode: "",
    requestId: reqId,
    amount: courseDetail.coursePrice,
    orderId: String(resOrder.orderId),
    orderInfo: `Thanh toán khoá học: ${courseDetail.courseName}`,
    redirectUrl: process.env.NEXT_PUBLIC_CLIENT_ENDPOINT,
    ipnUrl: "http://localhost:8000/api/Momo_Payment/GetIpnFromMomo",
    requestType: "captureWallet",
    extraData: "",
    lang: "vi",
  };
  console.log("aaaaa")
  RequestApiPaymentMomo(dataPaymentMomo, dispatch, navigate);
};

export const RequestApiOrder = async (dataOrder:any,dispatch:any,courseDetail:any,idUser:string,navigate:any) => {
    dispatch(OrderStart()); 
    try{
      const res = await request.post('/Order_API/Buy_Course',dataOrder);
      dispatch(OrderSuccess(res));
      await handlePayment(courseDetail,res,idUser,dispatch,navigate);
    }catch (err:any) {
      dispatch(OrderFailed());
    }
  }
  
  const RequestApiPaymentMomo = async (dataPayment:any,dispatch:any,navigate:any) => {
    dispatch(MomoStart()); 
    try{
      const res = await request.post('/Momo_Payment',dataPayment);
      dispatch(MomoSuccess(res));
      if(res.resultCode==0){
        navigate(res.payUrl);
      }
    }catch (err:any) {
      dispatch(MomoFailed())
    }
  }

 const RequestApiNotifySuccess = async (orderId:any,dispatch:any) => {
    dispatch(NotifyMomoStart()); 
    try{
      const res = await request.post('/Order_API/Buy_Success',orderId);
      dispatch(NotifyMomoSuccess(res));
    }catch (err:any) {
      dispatch(NotifyMomoFailed(err.response.data));
    }
  }