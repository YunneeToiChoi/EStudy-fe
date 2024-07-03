"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import GetCoursesByUser from "./getCourseByUser"
import { useEffect } from 'react';

export default function Profile() {
  const navigate = useRouter();
  const user = useSelector((state: any) => state.persistedReducer.auth.login.data);
  const infoUser=useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);

  useEffect(() => {
    if (!user) {
      navigate.push("/login");
    }
  }, [user, navigate, infoUser]);

    return(
        <div className="grid wide">
        <div className="img__container">
          <div className="avatar__container">
            <Image
              src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg"
              width={1000}
              height={100}
              alt=""
              className=" w-full rounded-xl drop-shadow-2xl h-[300px] object-cover"/>
              <div  className='absolute bottom-0 left-0 right-0 translate-y-1/2'>
              <div className=' m-auto relative w-fit'>
              <Image
              width={100}
              height={100}
              src={infoUser?.userImage}
              alt=""
              className="rounded-full w-36"
            />
            <Link href="/UpdateAccount" className=" shadow-lg absolute bottom-0 right-0 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white transition duration-300 ease-in-out hover:bg-slate-200"
              ><i className="fa-solid fa-pencil"></i
            ></Link>
              </div>
              </div>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-11">
          <h1 className=" text-3xl font-bold text-primary-bg-color">Xin chào {infoUser?.userName} !</h1>
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
          <GetCoursesByUser></GetCoursesByUser>
        </div>
      </div>
    )
}