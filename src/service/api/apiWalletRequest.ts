import * as request from "@/lib/utils/request";
import {
    addWalletStart,
    addWalletSuccess,
    addWalletFailed,
    trackingWalletStart,
    trackingWalletSuccess,
    trackingWalletFailed,
    walletUserStart,
    walletUserSuccess,
    walletUserFailed,
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

    export const RequestWalletOfUser = async (userId: string, dispatch: any) => {
        dispatch(walletUserStart());
        
        try {
          const res = await request.get(`/BankLink/GetUserWallets/${userId}`);
          
          dispatch(walletUserSuccess(res));
        } catch (err: any) {
          dispatch(walletUserFailed());
          return err?.response || { message: "Unknown error occurred" };
        }
    };

    const handleRandomReqID = async (idUser: string, idWallet: string): Promise<string> => {
      const currentDate = new Date().toISOString().replace(/[-:.TZ]/g, ''); // Ngày hợp lệ
      let rawId = `${idUser}${idWallet}${currentDate}`;
      const validId = rawId.replace(/[^0-9a-zA-Z-_.:]/g, ''); 
      const sanitizedId = validId.replace(/[-_.:]{2,}/g, '-');
      return sanitizedId.split('').sort(() => Math.random() - 0.5).join('');
    };
    
    const formatPrice = async (value: string) => {
      const numericValue = value.replace(/[^0-9]/g, '');
      return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };
    

    export const Disbursement =async (wallet:any,amount:number,walletTypeName:string) => {
      const idToast=toast.loading('Đang kiểm tra yêu cầu....', {
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
      try{
        const amountNotify = await formatPrice(String(amount));
        const requestId = await handleRandomReqID(wallet.userId, wallet.walletId);
        const data = {
          partnerClientId: wallet.cardNumber,
          requestId: requestId,
          requestType: "disburseToWallet",
          orderId: await handleRandomReqID(requestId, wallet.cardNumber),
          amount: amount,
          orderInfo: `Rút ${amountNotify} về ví ${walletTypeName}`,
          lang: "vi",
          extraData: "",
          walletId: wallet.walletId,
          userId: wallet.userId,
        };
        const res= await request.post("/BankLink/Disbursement",data);
        if(res?.statusCode==200){
          toast.update(idToast, {
            render:res.message,
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
          toast.info(`Bạn đã rút ${amountNotify} về ví ${walletTypeName} thành công! Số dư khả dụng: ${await formatPrice(String(res.saveOrder.user.blance))} vnd`, {
            isLoading: false,
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
          return true;
        }
      }
      catch (err:any) {
        toast.update(idToast, {
          render: "Yêu cầu không thành công!",
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