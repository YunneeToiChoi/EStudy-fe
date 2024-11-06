"use client";
import React, { useEffect,useState } from "react";
import { DialogDisbursement } from "./popupDisbursement";
import { useDispatch, useSelector } from "react-redux";
import { RequestWalletOfUser } from "@/service/api/apiWalletRequest";
import { PopupPurchase } from "./popupMethod";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import {FullScreenDialogBanking}from "./popupBanking";
import  addDotsToCurrency  from "@/lib/utils/currency";
import { RemoveWallet } from "@/service/api/apiWalletRequest";
export default function PaymentMethodLayout() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const toggleBalanceVisibility = () => {
    setIsHidden(!isHidden);
  };
  const user = useSelector(
    (state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user
  );
  const listWallet = useSelector(
    (state: any) => state.ThunkReducer.wallet.walletUser.data?.data
  );
  const userBalance = useSelector(
    (state: any) => state.ThunkReducer.wallet.walletUser.data?.userPrices
  );

  useEffect(() => {
    const fetchWallet = async () => {
      if (user?.userId) {
        await RequestWalletOfUser(user.userId,dispatch);
      }
    };
    fetchWallet();
  }, [dispatch, user]);

  const handleRemoveWallet = async (wallet:any) => {
    const data={
      userId:wallet.userId,
      walletId:wallet.walletId
    }
    await RemoveWallet(data,dispatch)
  }
  const hasWallets = listWallet && listWallet.length > 0;
  return ( 
    <>
          <div className="ml-11 min-h-16 mb-6 bg-yellow-500 w-fit py-2 pr-11 pl-4 rounded-xl flex items-center gap-2">
            <p className="text-base text-white font-normal">Total balance:</p>
            
            {/* Hiển thị số dư hoặc ****** */}
              {isHidden 
                ? (<span className="text-lg font-bold text-white relative pt-2">*********</span>)
                : (<p className="text-lg font-bold text-white relative">{ userBalance >0 ? addDotsToCurrency(userBalance):"0"}<span className="text-sm font-light absolute top-0 right-[-30px]">VND</span></p>)}
    
            {/* Icon con mắt để ẩn/hiện số dư */}
            <button onClick={toggleBalanceVisibility} className="focus:outline-none ml-6">
              {isHidden ? (
                <EyeSlashIcon className="h-6 w-6 text-white" />
              ) : (
                <EyeIcon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
      {
         hasWallets ? (
          <div>
            <h1 className="font-medium">Payment method</h1>
            <div className=" grid mt-8 grid-cols-2 max-w-3xl m-auto gap-11 mb-16">
            {listWallet.map((wallet: any) => (
              <div key={wallet.walletId} className=" overflow-hidden border-[1px] bg-white shadow-2xl border-slate-200 rounded-xl text-center pt-8">
                  <Image
                  alt={wallet.name}
                  className="m-auto w-32 duration-300 ease-in-out"
                  src={wallet.walletImage}
                  width={100}
                  height={100}
                  quality={100}
                />
                 <p className=" mt-4 font-normal">{wallet.cardNumber}</p>
                 <div className=" border-t-[1px] border-slate-200 mt-8">
                  <div className=" flex items-center">
                  <button
                  onClick={()=>handleRemoveWallet(wallet)}
                   className="text-red-500 font-medium py-3 cursor-pointer w-1/2 m-auto duration-300 ease-in-out hover:bg-slate-200">Remove</button>
                  <DialogDisbursement wallet={wallet}></DialogDisbursement>
                  </div>
                 </div>
              </div>
            ))}
          </div>
          <PopupPurchase open={open} setOpen={setOpen} />
          <FullScreenDialogBanking open={open} setOpen={setOpen}></FullScreenDialogBanking>
          </div>
        ) : (
          <div>
            <h1 className="font-medium">Payment method</h1>
            <p className="text-slate-500 text-sm mt-2">
              Add your preferred payment method for future purchases
            </p>
            <div className="text-center py-11 w-full text-sm font-light text-slate-400 border-2 border-dashed border-slate-400 rounded-2xl mt-6">
              No payment method provided
              <PopupPurchase open={open} setOpen={setOpen}/>
              <FullScreenDialogBanking open={open} setOpen={setOpen}></FullScreenDialogBanking>
            </div>
          </div>
        )
      }
    </>
  );
}
