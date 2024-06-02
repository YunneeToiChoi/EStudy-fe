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

export const RequestApiOrder = async (dataOrder:any,dispatch:any) => {
    dispatch(OrderStart()); 
    try{
      const res = await request.post('/Order_API/Buy_Course',dataOrder);
      dispatch(OrderSuccess(res));
    }catch (err:any) {
      dispatch(OrderFailed(err.response.data));
    }
  }

  export const RequestApiPaymentMomo = async (dataPayment:any,dispatch:any) => {
    dispatch(MomoStart()); 
    try{
      const res = await request.post('/Momo_Payment',dataPayment);
      dispatch(MomoSuccess(res));
    }catch (err:any) {
      dispatch(MomoFailed(err.response.data));
    }
  }

  export const RequestApiNotifySuccess = async (orderId:any,dispatch:any) => {
    dispatch(NotifyMomoStart()); 
    try{
      const res = await request.post('/Order_API/Buy_Success',orderId);
      dispatch(NotifyMomoSuccess(res));
    }catch (err:any) {
      dispatch(NotifyMomoFailed(err.response.data));
    }
  }