import React, { useEffect } from 'react';
import { Button } from "@/components/ui/buttonInfoPlan";
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { CancelPlan } from '@/service/api/apiPlansRequest';
import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { RequestApiOrderRenewPlan } from '@/service/api/apiOrderRequest';
import { checkExpirePlan } from '@/service/api/apiPlansRequest';

interface ShowPlanDialogProps {
  planId: number;
  planName: string;
  state: boolean;
}

const ShowPlanDialog: React.FC<ShowPlanDialogProps> = ({ planId, planName, state }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const expirePlans = useSelector((state: any) => state.ThunkReducer.plan.checkExpirePlan?.data);

  // Đưa fetchData ra ngoài useEffect
  const fetchData = async () => {
    if (user?.userId) {
      const UserId = {
        userId: user.userId
      };
      try {
        await checkExpirePlan(UserId, dispatch);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const handleOrder = async () => {
    const dataOrder = {
      userId: user.userId,
      planId: planId,
    };
    const idToast = toast.loading('Đang chuyển hướng đến trang Momo....', {
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
    try {
      const paymentSuccess = await RequestApiOrderRenewPlan(dataOrder, dispatch, 10000, planId, planName, user.userId, router.push);
      if (paymentSuccess) {
        toast.update(idToast, {
          render: 'Chuyển hướng thành công!',
          type: "success",
          isLoading: false,
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
      } else {
        toast.update(idToast, {
          render: 'Chuyển hướng thất bại!',
          type: "error",
          isLoading: false,
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
    } catch (err) {
      toast.update(idToast, {
        render: 'Chuyển hướng thất bại!',
        type: "error",
        isLoading: false,
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
  };

  const checkUser = () => {
    if (!user) {
      toast.info('Hãy đăng nhập tài khoản!', {
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
    } else {
      // Gọi lại fetchData khi người dùng đã đăng nhập
      fetchData();
    }
  };

  const handleCancelPlan = async () => {
    const data = { userId: user.userId };
    const cancelSuccess = await CancelPlan(data, dispatch);

    if (cancelSuccess) {
      toast.success('Hủy gói thành công!', { position: "bottom-right", transition: Bounce });
    } else {
      toast.error('Hủy gói thất bại!', { position: "bottom-right", transition: Bounce });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={state ? `bg-[#fcd436]` : `bg-red-500 text-white`} onClick={checkUser}>{planName}</Button>
      </AlertDialogTrigger>
      {
        state ? (
          <AlertDialogContent className=" p-5 overflow-hidden">
            <AlertDialogTitle className="text-2xl font-bold mb-2 text-center text-primary-bg-color">
              Gói {planName} còn hiệu lực
            </AlertDialogTitle>
            <div className=" text-center text-gray-600">
              Thời gian còn lại: <span className=' text-red-500'>
              <strong>{expirePlans?.days} ngày</strong>{" "}
              <strong>{expirePlans?.hours} giờ</strong>{" "}
              <strong>{expirePlans?.minutes} phút</strong>.
              </span>
            </div>
            <div className='flex gap-32 justify-between items-center'>
              <AlertDialogCancel className='bg-slate-300 w-full text-black block mt-[10px] p-[10px] rounded-[10px] no-underline text-base text-center border-[1px] border-transparent'>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500 w-full text-white block mt-[10px] p-[10px] rounded-[10px] no-underline text-base text-center border-[1px] border-transparent"
                onClick={handleCancelPlan}
              >
                huỷ gói
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        ) : (
          <AlertDialogContent className="sm:min-w-[490px] p-5 overflow-hidden">
            <AlertDialogTitle className="text-2xl font-bold mb-2 text-center text-primary-bg-color">
              Gia hạn gói {planName} của bạn
            </AlertDialogTitle>
            <div className="text-gray-600 text-center">Gói của bạn đã hết hạn. Bạn có muốn gia hạn không?</div>
            <div className='flex gap-32 justify-between items-center'>
              <AlertDialogCancel className='bg-red-500 w-full text-white block mt-[10px] p-[10px] rounded-[10px] no-underline text-base text-center border-[1px] border-transparent'>huỷ</AlertDialogCancel>
              <AlertDialogAction
                className="bg-primary-bg-color w-full text-white block mt-[10px] p-[10px] rounded-[10px] no-underline text-base text-center border-[1px] border-transparent"
                onClick={handleOrder}
              >
                Gia hạn
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        )
      }
    </AlertDialog>
  )
}

export default ShowPlanDialog;
