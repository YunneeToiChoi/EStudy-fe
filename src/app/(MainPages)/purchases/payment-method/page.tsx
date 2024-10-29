"use client";
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestWalletOfUser } from "@/service/api/apiWalletRequest";
import { PopupPurchase } from "./popupMethod";
import Image from "next/image";
import {FullScreenDialogBanking}from "./popupBanking";
export default function PaymentMethodLayout() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const user = useSelector(
    (state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user
  );
  const listWallet = useSelector(
    (state: any) => state.ThunkReducer.wallet.walletUser.data?.data
  );

  useEffect(() => {
    const fetchWallet = async () => {
      if (user?.userId) {
        await RequestWalletOfUser(user.userId,dispatch);
      }
    };
    fetchWallet();
  }, [dispatch, user]);

  const getWalletImage = (walletType: string) => {
    switch (walletType) {
      case "linkWallet":
        return (
            <Image
            alt="MoMo"
            className="m-auto  shadow-2xl duration-300 ease-in-out"
            src="https://paymentsdk.spotifycdn.com/svg/providers/momo.svg"
            width={48}
            height={48}
            quality={100}
          />
        );
      case "vnpay":
        return (
            <Image
            alt="VnPay"
            className="m-auto  shadow-2xl duration-300 ease-in-out rounded-xl"
            src="https://vinadesign.vn/uploads/thumbnails/800/2023/05/vnpay-logo-vinadesign-25-12-59-16.jpg"
            width={48}
            height={48}
            quality={100}
          />
        );
      case "zalopay":
        return (
            <div
            className="w-12 h-12 flex justify-center items-center m-auto  shadow-2xl duration-300 ease-in-out rounded-xl p-2"
          >
            <Image
              alt="ZaLoPay"
              src="https://simg.zalopay.com.vn/zst/zlp-website/resources/images/new-landing-page/revamped-zalopay-logo.svg"
              width={100}
              height={100}
              quality={100}
            />
          </div>
        );
      case "Bank":
        return (
            <div
            className="w-12 h-12 flex flex-col justify-center items-center m-auto  shadow-2xl duration-300 ease-in-out rounded-xl p-2"
          >
            <Image
              alt="Bank"
              src="https://th.bing.com/th/id/OIP.r-QugNKSpxLaMNDp7bHwUAHaHa?w=626&h=626&dpr=1.3&pid=ImgDetMain"
              width={100}
              height={100}
              quality={100}
            />
          </div>
        );
      default:
        return "";
    }
  };

  const hasWallets = listWallet && listWallet.length > 0;

  return hasWallets ? (
    <div>
         <div className=" grid grid-cols-2 max-w-3xl m-auto gap-11 mb-16">
      {listWallet.map((wallet: any) => (
        <div key={wallet.walletId} className=" border-[1px] bg-white shadow-2xl border-slate-200 rounded-xl text-center pt-8">
           {getWalletImage(wallet.type)}
           <p className=" mt-4 font-normal">{wallet.cardNumber}</p>
           <div className=" border-t-[1px] border-slate-200 mt-8">
            <p className="text-red-500 font-medium py-3 cursor-pointer w-fit m-auto">Remove</p>
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
  );
}
