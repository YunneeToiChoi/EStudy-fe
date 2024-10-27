import * as request from "@/lib/utils/request";
import {
    addWalletStart,
    addWalletSuccess,
    addWalletFailed,
    trackingWalletStart,
    trackingWalletSuccess,
    trackingWalletFailed,
} from "@/service/reduxState/walletSlices"
import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const handleAddWalletMoMo = async (userName:string,userId:string,walletType:string,PartnerClientAlias:string,dispatch:any,navigate:any) => {
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
    const reqData= {
    SubPartnerCode: "", 
    Amount: 0, 
    OrderInfo: "test32",
    RedirectUrl: process.env.NEXT_PUBLIC_WALLET_MOMO,
    IpnUrl: process.env.NEXT_PUBLIC_WALLET_MOMO_IPNURL,
    RequestType: "linkWallet", 
    ExtraData: "", 
    Lang: "vi", 
    PartnerClientId: PartnerClientAlias, 
    UserInfo: {
       PartnerClientAlias: userName, 
       UserId : userId ,
       WalletName : walletType 
     }
   }
   const checkingReq = await addWalletMoMo(reqData,dispatch,idToast,navigate)
   return checkingReq;
}
 async function addWalletMoMo(data:any,dispatch:any,idToast:any,navigate:any) {
    dispatch(addWalletStart());

    try {
        const res = await request.post("/BankLink/LinkWallet", data);
        dispatch(addWalletSuccess(res));
        if(res.statusCode==200){
            toast.update(idToast, {
                render: res.message,
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
            localStorage.setItem("walletId", res.walletResponse.walletId); 
            const parsedResponse = JSON.parse(res.responseContent);
            const payUrl = parsedResponse.payUrl;
            navigate.push(payUrl);
        }
        return true;
    } catch (error:any) {
        dispatch(addWalletFailed());
        toast.update(idToast, {
            render: "Yêu cầu thanh toán không thành công.",
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
        return false;
    }
}

export const RequestApiNotifySuccess = async (dataTracking:any,dispatch:any) => {
      dispatch(trackingWalletStart()); 
      try{
        const res = await request.post('/BankLink/PaymentNotification',dataTracking);
        dispatch(trackingWalletSuccess(res));
        return res;
      }catch (err:any) {
        dispatch(trackingWalletFailed());
        return err?.response;
      }
    }