"use client"
import  Link  from 'next/link';
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

import {getAllCoursesByUser} from "@/service/api/apiCourseRequest"
export default function Profile()
{
  const dispatch = useDispatch();
  const navigate = useRouter();

  const user = useSelector((state:any)=> state.persistedReducer.auth.login.data);
  useEffect(() => {
    if (!user) {
      navigate.push("/login");
    }
    else{
      const UserId = {
        userId : user.user.userId,
      }
      getAllCoursesByUser(UserId, dispatch);
      setIsLoading(false);
    }
}, [dispatch, navigate,user]);
  const [isLoading, setIsLoading] = useState(true);

  const listCourses = useSelector((state: any) => state.ThunkReducer.courses.getAllCoursesByUser?.data?.courses);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return(
        <div className="grid wide">
        <div className="img__container">
          <div className="avatar__container">
            <Image
              src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg"
              width={100}
              height={120}
              alt=""
              className="backgroud__avt"/>
            <Image
              width={100}
              height={100}
              src="https://static.vecteezy.com/system/resources/previews/030/504/836/non_2x/avatar-account-flat-isolated-on-transparent-background-for-graphic-and-web-design-default-social-media-profile-photo-symbol-profile-and-people-silhouette-user-icon-vector.jpg"
              alt=""
              className="avt__user"
            />
            <Link href="" className="avatar__change"
              ><i className="fa-solid fa-pencil avatar__icon"></i
            ></Link>
          </div>
        </div>
        <div className="user__name-container">
          <h1 className="name__user">thaigiabao122</h1>
          <Link href="" className="user__public">Trang công khai</Link>
        </div>
        <ul className="tag-search__transition">
          <li className="tag-search__transition-item">
            <Link
              href=""
              className="tag-search__transition-link tag-search__transition-link--chosen"
              >Khóa học</Link>
          </li>
          <li className="tag-search__transition-item">
            <Link href="" className="tag-search__transition-link">Kết quả luyện thi</Link>
          </li>
          <li className="tag-search__transition-item">
            <Link href="" className="tag-search__transition-link">Posts</Link>
          </li>
        </ul>
        <div className="course__registed-container">
          <p style={{display:'none'}} className="course__registed--dont-have-course">
            Bạn chưa đăng ký học khoá học nào!
          </p>
          <h3 className="course__registed-header">Các khóa đã kích hoạt</h3>
          <div className=" mt-16 grid grid-cols-4 gap-14">
              <Link href="#" className=" group">
                <div className=" shadow-md flex flex-col items-center group-hover:shadow-lg transition duration-500 delay-75 ease-in-out bg-white p-4 rounded-xl mb-5">
                <div className='mb-5 w-full h-72 group relative overflow-hidden rounded-[10px] '>
                  <Image className='object-fill transition duration-500 ease group-hover:brightness-[95%] group-hover:scale-105' 
                  width={1000} 
                  height={1000} 
                  quality={100}
                  alt='image' 
                  src="/img/E-balck.jpg">
                  </Image>
                </div>
                <h3 className=" text-base font-medium text-center">
                    [IELTS General Training] Intensive Reading: Từ Vựng - Chiến
                    Lược Làm Bài - Chữa đề chi tiết
                  </h3>
                  <div className=" pt-2 flex flex-col">
                    <div className="">
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className=" text-xl font-semibold text-price-color">699.000đ</span>
                    <span className=" text-xl line-through px-3">899.000đ</span>
                    <span className=" py-[3px] px-[6px] text-white font-bold text-sm bg-primary-bg-orange-color rounded-xl my-[10px]">-22%</span>
                  </div>
                </div>
              </Link>
              <Link href="#" className=" group">
                <div className=" shadow-md flex flex-col items-center group-hover:shadow-lg transition duration-500 delay-75 ease-in-out bg-white p-4 rounded-xl mb-5">
                <div className='mb-5 w-full h-72 group relative overflow-hidden rounded-[10px] '>
                  <Image className='object-fill transition duration-500 ease group-hover:brightness-[95%] group-hover:scale-105' 
                  width={1000} 
                  height={1000} 
                  quality={100}
                  alt='image' 
                  src="/img/bg_pro-E.jpg">
                  </Image>
                </div>
                <h3 className=" text-base font-medium text-center">
                    [IELTS General Training] Intensive Reading: Từ Vựng - Chiến
                    Lược Làm Bài - Chữa đề chi tiết
                  </h3>
                  <div className=" pt-2 flex flex-col">
                    <div className="">
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className=" text-xl font-semibold text-price-color">699.000đ</span>
                    <span className=" text-xl line-through px-3">899.000đ</span>
                    <span className=" py-[3px] px-[6px] text-white font-bold text-sm bg-primary-bg-orange-color rounded-xl my-[10px]">-22%</span>
                  </div>
                </div>
              </Link>
              <Link href="#" className=" group">
                <div className=" shadow-md flex flex-col items-center group-hover:shadow-lg transition duration-500 delay-75 ease-in-out bg-white p-4 rounded-xl mb-5">
                <div className=' mb-5 w-full h-72 group relative overflow-hidden rounded-[10px] '>
                  <Image className='object-fill transition duration-500 ease group-hover:brightness-[95%] group-hover:scale-105' 
                  width={1000} 
                  height={1000} 
                  quality={100}
                  alt='image' 
                  src="/img/Speak_E.jpg">
                  </Image>
                </div>
                <h3 className=" text-base font-medium text-center">
                    [IELTS General Training] Intensive Reading: Từ Vựng - Chiến
                    Lược Làm Bài - Chữa đề chi tiết
                  </h3>
                  <div className=" pt-2 flex flex-col">
                    <div className="">
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className=" text-xl font-semibold text-price-color">699.000đ</span>
                    <span className=" text-xl line-through px-3">899.000đ</span>
                    <span className=" py-[3px] px-[6px] text-white font-bold text-sm bg-primary-bg-orange-color rounded-xl my-[10px]">-22%</span>
                  </div>
                </div>
              </Link>
              <Link href="#" className=" group">
                <div className=" shadow-md flex flex-col items-center group-hover:shadow-lg transition duration-500 delay-75 ease-in-out bg-white p-4 rounded-xl mb-5">
                <div className='mb-5 w-full h-72 group relative overflow-hidden rounded-[10px] '>
                  <Image className='object-fill transition duration-500 ease group-hover:brightness-[95%] group-hover:scale-105' 
                  width={1000} 
                  height={1000} 
                  quality={100}
                  alt='image' 
                  src="/img/E-learn.jpg">
                  </Image>
                </div>
                <h3 className=" text-base font-medium text-center">
                    [IELTS General Training] Intensive Reading: Từ Vựng - Chiến
                    Lược Làm Bài - Chữa đề chi tiết
                  </h3>
                  <div className=" pt-2 flex flex-col">
                    <div className="">
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                      <i className="fa-solid fa-star course__icon-star text-sm text-star-color"></i>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className=" text-xl font-semibold text-price-color">699.000đ</span>
                    <span className=" text-xl line-through px-3">899.000đ</span>
                    <span className=" py-[3px] px-[6px] text-white font-bold text-sm bg-primary-bg-orange-color rounded-xl my-[10px]">-22%</span>
                  </div>
                </div>
              </Link>
            </div>
        </div>
      </div>
    )
}