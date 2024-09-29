"use client"
import Image from "next/image"
import { getAllPlans } from "@/service/api/apiPlansRequest"
import { useEffect,useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import OrderDialog from "@/app/components/plans/dialogOrderPlan"
export default function PlanUser(){
    const dispatch=useDispatch();
    const listPlans=useSelector((state:any)=>state.ThunkReducer.plan.getAllPlan.data?.data)
    console.log(listPlans) 
     useEffect(()=>{
        getAllPlans(dispatch)
     },[dispatch])

    return(
        <div>
            <div className=" w- full ">
                <ul className=" grid grid-cols-3 gap-9">
                    {listPlans && listPlans?.map((plan:any)=>{
                        return (
                            <li  key={plan.planId} className=" rounded-2xl min-h-24 bg-white shadow-2xl p-4 flex flex-col gap-3 ">
                        <div className='flex items-center'>
                            <Image
                            className=" w-8 h-8"
                            src="/img/.svg/logo.svg"
                            alt="Logo"
                            width={50}
                            height={50}
                            quality={100}
                            />
                            <h1 className='ml-2 text-lg font-semibold tracking-wide'>
                            E-<span className='text-primary-bg-color'>Study</span>
                            </h1>
                        </div>
                        <div className=" text-3xl font-semibold"> {plan.planName}</div>
                        <div className=" text-base text-slate-500 font-bold " >{plan.planPrice}<span>đ cho </span>{plan.planDuration} <span>ngày</span> </div>
                        <span className="w-full bg-slate-300 p-[1px]"></span>
                        <div>
                            {plan.planDescription}
                        </div>
                        <OrderDialog planId={plan.planId } planDuration={plan.planDuration} planName={plan.planName} PlanPrice={plan.planPrice} ></OrderDialog>
                    </li> 
                        )
                    })}
                    <li></li>
                    <li></li> 

                </ul>
            </div>
        </div>
    )
}