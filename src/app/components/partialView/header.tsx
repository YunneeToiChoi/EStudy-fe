"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSelector } from "react-redux";
import Link from 'next/link';
import Image from "next/image";   
import { DropdownMenuDemo } from "./propDown";

export default function Header() {
  const user = useSelector((state: any) => state.persistedReducer.auth.login.data);
  const userInfo = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser.data);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentPathname, setCurrentPathname] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const header: any = document.querySelector('.header');
      const container: any = document.querySelector('.ParentLayout');
      const currentScrollPosition = container ? container.scrollTop : 0;

      if (currentScrollPosition > 0) {
        header.classList.add('shadow-md', 'bg-white');
      } else {
        if (!currentPathname.startsWith('/course/') && !currentPathname.startsWith('/exam/')) {
          header.classList.remove('shadow-md', 'bg-white');
        }
      }

      setScrollPosition(currentScrollPosition);
    };

    const container = document.querySelector('.ParentLayout');
    container?.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [currentPathname]); // Sử dụng currentPathname thay vì pathname

  return (
    <div className='header sticky z-20 top-0 left-0 right-0 transition duration-500 ease-in-out'>
      <nav className="w-full py-5">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full flex items-center justify-between">
            <div>
              <Link className='flex gap-2 items-center' href="/">
                <Image
                  className="nav__img"
                  src="/img/.svg/logo.svg"
                  alt="Logo"
                  width={80}
                  height={80}
                  quality={100}
                />
                <h1 className='text-2xl font-semibold tracking-wide'>
                  E-<span className='text-primary-bg-color'>Study</span>
                </h1>
              </Link>
            </div>
            <div>
              <ul className="list-none flex items-center max-lg:hidden gap-6">
                <li className={user ? "group":"hidden"}>
                  <Link href="/profile" className="group-hover:text-primary-bg-color group-hover:duration-75 delay-75 transition ease-linear no-underline font-medium text-black text-lg tracking-normal">
                    Tài liệu chia sẻ
                  </Link>
                </li>
                <li className="group">
                  <Link href="/courseOnline" className="group-hover:text-primary-bg-color group-hover:duration-75 delay-75 transition ease-linear no-underline font-medium text-black text-lg tracking-normal">
                    Khóa học online
                  </Link>
                </li>
                <li className="group">
                  <Link href="/examOnline" className="group-hover:text-primary-bg-color group-hover:duration-75 delay-75 transition ease-linear no-underline font-medium text-black text-lg tracking-normal">
                    Đề thi online
                  </Link>
                </li>
                <li className="group">
                  <Link href="/activeCourse" className="group-hover:text-primary-bg-color group-hover:duration-75 delay-75 transition ease-linear no-underline font-medium text-black text-lg tracking-normal">
                    Kích hoạt khóa học
                  </Link>
                </li>
              </ul>
            </div>
            {userInfo ?(
              <Link href={"/document/upload"} className=' py-2 px-4 flex justify-center hover:cursor-pointer text-white items-center gap-2 rounded-xl group cursor-pointer bg-primary-bg-color hover:bg-white border-[1px] border-transparent hover:border-primary-bg-color duration-75 shadow-md ease-linear'>
                <i className="fa-solid fa-cloud-arrow-up text-white group-hover:text-primary-bg-color text-xl"></i>  
                <p className=' text-lg font-medium group-hover:text-primary-bg-color '>Upload</p>
              </Link>
            ):(
              <></>
            )}
            <div>
            <div className=' relative flex gap-4 px-2'>
                {userInfo ? (
                  <>
                  <span className=' absolute bottom-[-5px] right-1 w-5 h-5 flex justify-center items-center bg-white shadow-md rounded-full z-10 animate-bounce'><i className="fa-solid fa-caret-down text-black text-sm"></i></span>
                  <DropdownMenuDemo UserName={userInfo.user?.userName} UserImage={userInfo.user?.userImage}></DropdownMenuDemo>
                  </>
                ) : (
                  <>
                <Link href="/login" className="cursor-pointer hover:scale-110 px-[20px] py-[8px] border-[1px] border-primary-bg-color rounded-md max-lg:hidden hover:bg-slate-100 duration-500 shadow-md ease-in-out">
                  <span className="text-base no-underline font-medium text-primary-bg-color tracking-wide">Đăng Nhập</span>
                </Link>
                <Link href={`${userInfo ? '/' : '/register'}`} className="cursor-pointer hover:scale-110 px-[20px] py-[8px] bg-primary-bg-color rounded-md max-lg:hidden hover:bg-primary-bg-color-hover duration-500 shadow-md ease-in-out">
                  <span className="text-base no-underline font-medium text-white tracking-wide">Đăng ký</span>
                </Link>
                  </>
                )}
            </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
