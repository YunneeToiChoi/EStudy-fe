import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import { RequestApiOrderPlan } from "@/service/api/apiOrderRequest";

import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

interface OrderDialogProps {
  planId: number;
  planName: string;
  planDuration: number;
  PlanPrice: number;
}

const OrderDialog: React.FC<OrderDialogProps> = ({ planId, planName,planDuration,PlanPrice }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const checkUser = () => {
    if (!user) {
      toast.info('Hãy đăng nhập tài khoản !', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      router.push("/login");
    }
  }

  const handleOrder = async () => {
    setIsSubmitting(true); 
    const dataOrder = {
      userId: user.userId,
      planId: planId,
    };
   const idToast=toast.loading('Đang chuyển hướng đến trang Momo....', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    const res = await RequestApiOrderPlan(dataOrder, dispatch,PlanPrice,planId,planName, user.userId, router.push);
    if(res?.status ==400){
      toast.update(idToast, { 
        render:'Chuyển hướng thất bại !',
         type: "error", 
         isLoading: false ,
         position: "bottom-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         transition: Bounce,});
    }
    else{
      toast.update(idToast, { 
        render:'Chuyển hướng thành công !',
         type: "success", 
         isLoading: false ,
         position: "bottom-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         transition: Bounce,});
    }
    setIsSubmitting(false); 
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button onClick={checkUser}>ĐĂNG KÝ HỌC NGAY</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[490px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Thanh toán khoá học</AlertDialogTitle>
          <AlertDialogDescription>
          Mua khoá học: {planName}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogCancel className=' bg-slate-300 w-full text-black block mt-[10px] p-[10px] rounded-[10px] no-underline text-base text-center border-[1px] border-transparent'>Cancel</AlertDialogCancel>
            <AlertDialogAction
             className="bg-primary-bg-color w-full text-white block mt-[10px] p-[10px] rounded-[10px] no-underline text-base text-center border-[1px] border-transparent" 
             onClick={handleOrder}
            > ĐẶT HÀNG NGAY</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default OrderDialog;
