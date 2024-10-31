"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { historyTransactionWallet } from "@/service/api/apiWalletRequest";
import  addDotsToCurrency  from "@/lib/utils/currency";
import Image from "next/image";
export default function PurchaseHistory() {
    const dispatch = useDispatch();
    const user = useSelector(
        (state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user
    );
    const listHistoryTransactions = useSelector(
        (state: any) => state.ThunkReducer.wallet.historyTransaction?.data
    );

    useEffect(() => {
        const fetchWallet = async () => {
            if (user?.userId) {
                await historyTransactionWallet(user.userId, dispatch);
            }
        };
        fetchWallet();
    }, [dispatch, user]);

    return (
        <div>
            {listHistoryTransactions && listHistoryTransactions.length > 0 ? (
                <table className="w-2/3 m-auto mt-6 border-collapse border border-slate-400">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 p-2">wallet method</th>
                            <th className="border border-slate-300 p-2">Order Date</th>
                            <th className="border border-slate-300 p-2">Total Amount</th>
                            <th className="border border-slate-300 p-2">State</th>
            
                        </tr>
                    </thead>
                    <tbody>
                        {listHistoryTransactions.map((transaction: any, index: number) => (
                            <tr key={index}>
                                <td className="border overflow-hidden border-slate-300 text-center p-2">
                                    <Image
                                    alt="wallet"
                                    width={100}
                                    height={100}
                                    quality={100}
                                    src={transaction.walletImage}
                                    className=" w-full h-full object-cover"
                                    >
                                    </Image>
                                </td>
                                <td className="border border-slate-300 text-center p-2">{new Date(transaction.orderDate).toLocaleString()}</td>
                                <td className="border border-slate-300 text-center p-2">{addDotsToCurrency(transaction.totalAmount)} vnd</td>
                                <td className="border border-slate-300 text-center p-2">{transaction.state ? "Completed" : "Pending"}</td>
                          
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <>
                <h1 className="font-medium">Purchase History</h1>
                <div className="text-center py-11 w-full text-sm font-light text-slate-400 border-2 border-dashed border-slate-400 rounded-2xl mt-6">
                No purchase history
                </div>
                </>
                
            )}
        </div>
    );
}
