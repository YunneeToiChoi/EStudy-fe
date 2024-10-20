"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPlans} from '@/service/api/apiPlansRequest';
import ShowPlanDialog from "./SubscriptionPopup"

export default function GetPlanByUser(){
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
    const listPlans = useSelector((state: any) => state.ThunkReducer.plan.getUserPlan?.data?.plans);
    useEffect(() => {
        const fetchData = async () => {
            if (user?.userId) {
                const UserId = {
                    userId: user.userId
                };
                   await getUserPlans(UserId,dispatch);
            }
        };
        fetchData();                                                                                                                                                                                                                                                                                                                                       
    },[dispatch,user])
    return(
        <>
        {
            listPlans && listPlans.length > 0 ?(
                <div className=' flex gap-3 items-center'>
                    {listPlans.map((item:any,index:any) => (
                       <ShowPlanDialog planId={item.planId} planName={item.planName} state={item.state}></ShowPlanDialog>
                    ))}
                </div>
            ):(
                <>
                </>
            )
        }
        </>
    )
}