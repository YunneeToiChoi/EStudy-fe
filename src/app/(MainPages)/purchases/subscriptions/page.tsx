"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestWalletOfUser } from "@/service/api/apiWalletRequest";
import {DialogDisbursement} from "./popupDisbursement"
import Image from "next/image";
export default function Subscription(){
    const dispatch = useDispatch();
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
              className="m-auto cursor-pointer hover:scale-105  shadow-2xl duration-300 ease-in-out"
              src="https://paymentsdk.spotifycdn.com/svg/providers/momo.svg"
              width={112}
              height={112}
              quality={100}
            />
          );
        case "vnpay":
          return (
              <Image
              alt="VnPay"
              className="m-auto  shadow-2xl duration-300 ease-in-out rounded-xl"
              src="https://vinadesign.vn/uploads/thumbnails/800/2023/05/vnpay-logo-vinadesign-25-12-59-16.jpg"
              width={112}
              height={112}
              quality={100}
            />
          );
        case "zalopay":
          return (
              <div
              className="w-28 h-28 flex justify-center items-center m-auto  shadow-2xl duration-300 ease-in-out rounded-xl p-2"
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
        case "credit_card":
          return (
              <div
              className="w-28 h-28 flex flex-col justify-center items-center m-auto  shadow-2xl duration-300 ease-in-out rounded-xl p-2"
            >
              <Image
                alt="Credit Cards"
                src="https://pngimg.com/uploads/credit_card/credit_card_PNG4.png"
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
        <h1 className=" font-medium">Active subscriptions</h1>
        <p className=" text-slate-500 text-sm mt-2">Choose the wallet type to withdraw money</p>
           <div className=" grid grid-cols-4 mt-11 max-w-3xl m-auto gap-11 mb-16">
        {listWallet.map((wallet: any) => (
          <div key={wallet.walletId} className="">
             <DialogDisbursement Component={()=>getWalletImage(wallet.type)} wallet={wallet}></DialogDisbursement>
          </div>
        ))}
      </div>
      </div>
    ) : (
        <div>
        <h1 className=" font-medium">Active subscriptions</h1>
        <p className=" text-slate-500 text-sm mt-2">Review your subscriptions</p>
        <div className=" text-center py-11 w-full text-sm font-light text-slate-400 border-2 border-dashed border-slate-400 rounded-2xl mt-6">
        You have no subscriptions yet
        </div>
    </div>
    )
}