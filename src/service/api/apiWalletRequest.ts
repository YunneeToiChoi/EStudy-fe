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
    allBankLinkStart,
    allBankLinkSuccess,
    allBankLinkFailed,
    historyTransactionStart,
    historyTransactionSuccess,
    historyTransactionFailed,
    removeWalletStart,
    removeWalletSuccess,
    removeWalletFailed,
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
    

    export const Disbursement =async (wallet:any,amount:number,dispatch:any) => {
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
          orderInfo: `Rút ${amountNotify} về ví ${wallet.name}`,
          lang: "vi",
          extraData: "",
          walletId: wallet.walletId,
          userId: wallet.userId,
        };
        const res= await request.post("/BankLink/Disbursement",data);
        if(res?.statusCode==200){
          await RequestWalletOfUser(wallet.userId,dispatch)
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
          toast.info(`Bạn đã rút ${amountNotify} về ví ${wallet.name} thành công! Số dư khả dụng: ${await formatPrice(String(res.saveOrder.user.blance))} vnd`, {
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

    export const getAllBankLink = async (dispatch: any) => {
      dispatch(allBankLinkStart());
      try {
        const res = await request.get(`BankLink/GetAllBanks`);
        
        dispatch(allBankLinkSuccess(res));
      } catch (err: any) {
        dispatch(allBankLinkFailed());
        return err?.response || { message: "Unknown error occurred" };
      }
  };

  export const addWalletBanking = async (data:any) => {
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
    try {
      const res = await request.post(`/BankLink/LinkBankAccountTingee`,data);
      if(res.statusCode===200){
        
        const walletData = res.walletData;
        const resultContent = JSON.parse(res.resultContent);
        const confirmId = resultContent.data.confirmId;
        const storageData = { ...walletData, confirmId };
        localStorage.setItem('walletBank', JSON.stringify(storageData));
        toast.update(idToast, {
          render:"Gửi yêu cầu thành công!",
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
        toast.info("Đã gửi mã OTP qua SMS", {
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
        return true;
      }
    } catch (err: any) {
      toast.update(idToast, {
        render: "Yêu cầu không thành công ! Hãy kiểm tra lại thông tin tài khoản",
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
};

export const linkBankAuthentication = async (data:any,dispatch:any) => {
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
  try {
    const res = await request.post(`/BankLink/ConfirmBankLinkTingee`,data);
    if(res.statusCode===200){
      toast.update(idToast, {
        render:"Xác thực thành công !",
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
      const storedWalletData = localStorage.getItem('walletBank');
      if (storedWalletData) {
        const walletBank = JSON.parse(storedWalletData);
        await RequestWalletOfUser(walletBank.userId,dispatch);
        localStorage.removeItem('walletBank');
      }
      return true;
    }
  } catch (err: any) {
    toast.update(idToast, {
      render: "Mã OTP sai, hãy kiểm tra lại tin nhắn của bạn!",
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
};

export const historyTransactionWallet = async(userId:string,dispatch:any)=>{
  dispatch(historyTransactionStart());
  try{
    const res = await request.get(`/BankLink/HistoryPayment/${userId}`);
    const transactions = res.data.map((transaction: any) => ({
      orderId: transaction.orderId,
      userId: transaction.userId,
      orderDate: transaction.orderDate,
      totalAmount: transaction.totalAmount,
      state: transaction.state,
      createdAt: transaction.createdAt,
      walletId: transaction.walletId,
      paymentType: transaction.paymentType,
      walletImage:transaction.walletImage
    }));
    dispatch(historyTransactionSuccess(transactions));
  }
  catch(err:any){
    dispatch(historyTransactionFailed(err.response.data));
  }
}


export const RemoveWallet = async (data:any,dispatch:any) =>{
  dispatch(removeWalletStart());
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
    const res = await request.post(`/BankLink/RemoveWallet`,data);
    if(res.statusCode===200){
      toast.update(idToast, {
        render:"Xoá thành công !",
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
      await RequestWalletOfUser(data.userId,dispatch);
      dispatch(removeWalletSuccess(res));
    }
  }catch(error:any){
    toast.update(idToast, {
      render: "Xoá thất bại",
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
    dispatch(removeWalletFailed());
  }
}