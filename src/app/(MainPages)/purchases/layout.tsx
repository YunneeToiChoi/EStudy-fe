"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();// Lấy thông tin về đường dẫn hiện tại
  const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const isActive = (path: string) => pathname === path;
  if (!user) {
    toast.info('Hãy đăng nhập tài khoản !', {
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
    router.push("/login");
  }
  return (
    <div className='p-6 mx-11'>
      <div className=''>
        <div className='px-40 border-b-[1px] border-slate-300 pb-12'>
          <h1 className='text-3xl font-normal'>Payments</h1>
          <p className='mt-2 text-base font-light text-slate-500'>
            Review your subscriptions, purchases, and manage your preferred payment method
          </p>
        </div>

        <ul className='flex items-center justify-start px-40 border-b-[1px] border-slate-300'>
          <Link href="/purchases/purchase-history">
            <li
              className={`px-6 py-2 text-base font-light cursor-pointer transition duration-500 ${
                isActive('/purchases/purchase-history')
                  ? ' font-medium border-b-2 border-primary-bg-color'
                  : 'border-transparent'
              }`}
            >
              Purchase history
            </li>
          </Link>

          <Link href="/purchases/subscriptions">
            <li
              className={`px-6 py-2 text-base font-light cursor-pointer transition duration-500 ${
                isActive('/purchases/subscriptions')
                  ? ' font-medium border-b-2 border-primary-bg-color'
                  : 'border-transparent'
              }`}
            >
              Subscription
            </li>
          </Link>

          <Link href="/purchases/payment-method">
            <li
              className={`px-6 py-2 text-base font-light cursor-pointer transition duration-500 ${
                isActive('/purchases/payment-method')
                  ? ' font-medium border-b-2 border-primary-bg-color'
                  : 'border-transparent'
              }`}
            >
              Payment method
            </li>
          </Link>
        </ul>
      </div>
      <div className=' px-40 py-11'>
         {children}
      </div>
    </div>
  );
};

export default MainLayout;
