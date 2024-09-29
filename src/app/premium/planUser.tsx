"use client";
import Image from "next/image";
import { getAllPlans } from "@/service/api/apiPlansRequest";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderDialog from "./dialogOrderPlan";

export default function PlanUser() {
  const dispatch = useDispatch();
  const listPlans = useSelector((state: any) => state.ThunkReducer.plan.getAllPlan.data?.data);
  console.log(listPlans);

  useEffect(() => {
    if (!listPlans) {
      getAllPlans(dispatch);
    }
  }, [dispatch]);

  // Danh sách màu sắc
  const colors = [
    "from-purple-500 to-indigo-500",
    "from-blue-500 to-green-500",
    "from-yellow-500 to-orange-500",
    "from-red-500 to-pink-500",
    "from-teal-500 to-cyan-500",
    "from-gray-500 to-gray-700"
  ];

  return (
    <div>
      <div className="w-full">
        <ul className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {listPlans &&
            listPlans?.map((plan: any, index: number) => {
              // Chọn màu ngẫu nhiên từ danh sách
              const colorClass = colors[index % colors.length]; // Đảm bảo chỉ số không vượt quá độ dài của mảng màu
              return (
                   <li key={plan.planId} className={`bg-gradient-to-r ${colorClass} rounded-lg shadow-lg p-8 transition-transform transform duration-300 ease-in-out hover:scale-105`}>
                   <h3 className="text-2xl font-bold mb-2 text-white">{plan.planName}</h3>
                   <p className="text-white mb-4">
                      {plan.planDescription}
                   </p>
                   <p className="text-4xl font-bold text-white">{plan.planPrice} VND </p>
                   <p className="text-xl font-bold text-black mb-4">cho {plan.planDuration} ngày</p>
                   <p className="text-white text-sm mb-4">
                     Thanh toán một lần, không gia hạn tự động.
                   </p>
                   <div>
                   <OrderDialog planId={plan.planId} planDuration={plan.planDuration} planName={plan.planName} PlanPrice={plan.planPrice} PlanDes={plan.planDescription}></OrderDialog>
                   </div>
                 </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
