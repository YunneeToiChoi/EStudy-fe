"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import {useDispatch, useSelector} from "react-redux";
import { logOut } from "../../../redux/features/apiRequest";
import { createAxios } from "../../../redux/createInstance";
import { logOutSuccess } from "../../../redux/features/authSlices";
import  Link  from 'next/link';
import Image from "next/image";

export default function Header() {
  const user = useSelector((state:any)=> state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useRouter();
  let axiosJWT = createAxios(user,dispatch,logOutSuccess);

  const handleLogout = () =>{
    logOut(dispatch,id,navigate.push, accessToken,axiosJWT);
  }
  return (
   <div>
     <nav className=" fixed top-0 z-20 h-28 w-full pt-7">
      <div className="w-full block max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className=' flex gap-2 items-center'>
            <Link href="/">
              <Image
                className="nav__img"
                src="/img/.svg/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                quality={100}
              />
            </Link>
            <h1 className=' text-2xl font-semibold tracking-wide'>
              E-
              <span className='text-primary-bg-color'>Study</span>
            </h1>
          </div>
          <div className=''>
            <ul className=" list-none flex items-center max-lg:hidden gap-6">
                <li className=" group">
                  <Link href="/courseOnline" className=" group-hover:text-primary-bg-color group-hover:duration-75 delay-75 transition ease-linear no-underline font-medium text-black text-lg tracking-normal "
                    >Khóa học online</Link>
                </li>
                <li className=" group">
                  <Link href="/examOnline" className=" group-hover:text-primary-bg-color group-hover:duration-75 delay-75 transition ease-linear no-underline font-medium text-black text-lg tracking-normal "
                    >Đề thi online</Link>
                </li>
                <li className=" group">
                  <Link href="/flashCard" className=" group-hover:text-primary-bg-color group-hover:duration-75 delay-75 transition ease-linear no-underline font-medium text-black text-lg tracking-normal ">Flashcards</Link>
                </li>
                <li className=" group">
                  <Link href="/dashBoard/getAllUser" className=" group-hover:text-primary-bg-color group-hover:duration-75 delay-75 transition ease-linear no-underline font-medium text-black text-lg tracking-normal ">Blog</Link>
                </li>
                <li className=" group">
                  <Link href="/activeCourse" className=" group-hover:text-primary-bg-color group-hover:duration-75 delay-75 transition ease-linear no-underline font-medium text-black text-lg tracking-normal "
                    >Kích hoạt khóa học</Link>
                </li>
            </ul>
          </div>
          <div className="">
          <div className=' flex gap-4'>
            <div className={`${user?'hidden':'block'} cursor-pointer hover:scale-110 px-[20px] py-[8px] border-[1px] border-primary-bg-color rounded-md max-lg:hidden hover:bg-slate-100 duration-500 shadow-md ease-in-out`}>
            <Link href="/login" className=" text-base no-underline font-medium text-primary-bg-color tracking-wide">Sign in</Link>
            </div>
            <div className=" cursor-pointer hover:scale-110 px-[20px] py-[8px] bg-primary-bg-color rounded-md max-lg:hidden hover:bg-primary-bg-color-hover duration-500 shadow-md ease-in-out">
                  {user?(
                      <>
                      <p>Hi <span>{user.username}</span></p>
                      <Link href="/" className="navbar-logout" onClick={handleLogout}> Log out</Link>
                      </>
                      ):(
                        <Link href="/register" className=" text-base no-underline font-medium text-white tracking-wide">Get Started</Link>
                      )}
            </div>
          </div>
            <label htmlFor="nav-mobile-input" className="menubar__icon hide">
              <i className="fa-solid fa-bars nav__icon"></i>
            </label>
            <input type="checkbox" id="nav-mobile-input" className="nav__input" />
            <label htmlFor="nav-mobile-input" className="nav__overlay"></label>
            <div className="nav__mobile hide">
              <ul className="nav__list-mobile">
                <li className="nav__item-mobile">
                  <Link href="/courseOnline" className="nav__link-mobile"
                    >Khóa học online</Link>
                </li>
                <li className="nav__item-mobile">
                  <Link href="/examOnline" className="nav__link-mobile"
                    >Đề thi online</Link>
                </li>
                <li className="nav__item-mobile">
                  <Link href="/flashCard" className="nav__link-mobile"
                    >Flashcards</Link>
                </li>
                <li className="nav__item-mobile">
                  <Link href="/dashBoard/getAllUser" className="nav__link-mobile">Blog</Link>
                </li>
                <li className="nav__item-mobile">
                  <Link href="/activeCourse" className="nav__link-mobile"
                    >Kích hoạt khóa học</Link>
                </li>
                <li className="nav__item-mobile nav__item-login nav__item-login-mobile">
                {user?(
                  <>
                  <p>Hi <span>{user.username}</span></p>
                  <Link href="/" className="navbar-logout" onClick={handleLogout}> Log out</Link>
                  </>
                  ):(
                    <Link href="/login" className="nav__link-login">Đăng nhập</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
   </div>
  )
}
