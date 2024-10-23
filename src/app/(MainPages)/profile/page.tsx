"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import GetCoursesByUser from "./getCourseByUser";
import GetExamByUser from './getExamByUser';
import GetDocByUser from './getDocByUser';
import GetPlanByUser from './getPlansByUser';
import { useEffect, useState } from 'react';

export default function Profile() {
  const navigate = useRouter();
  const user = useSelector((state: any) => state.persistedReducer.auth.login.data);
  const infoUser = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const [currentPage, setCurrentPage] = useState('courses');

  useEffect(() => {
    if (!user || !infoUser) {
      navigate.push("/login");
    }
  }, [user, navigate, infoUser]);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="grid wide">
          <div className="img__container">
          <div className="avatar__container">
            <Image
              src={infoUser?.userBanner ? infoUser?.userBanner : `https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg`}
              width={1000}
              height={100}
              alt=""
              className=" w-full rounded-xl drop-shadow-2xl h-[300px] object-cover"/>
              <div  className='absolute bottom-0 left-0 right-0 translate-y-1/2'>
              <div className=' relative w-fit m-auto'>
              <div className=' overflow-hidden w-32 h-32 rounded-full shadow-xl'>
              <Image
              width={100}
              height={100}
              src={infoUser?.userImage}
              alt=""
              className=" object-cover w-full h-full"
            />
             </div>
            <Link href="/UpdateAccount" className=" shadow-lg absolute bottom-0 right-0 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white transition duration-300 ease-in-out hover:bg-slate-200"
              ><i className="fa-solid fa-pencil"></i
            ></Link>
              </div>
            </div>
          </div>
        </div>
      <div className="flex items-center justify-center mt-11">
        <h1 className="text-3xl font-bold text-primary-bg-color">Xin chào {infoUser?.userName}!</h1>
      </div>
      <div className=' my-5 w-full flex gap-4 items-center justify-center'>
        <GetPlanByUser></GetPlanByUser>
      </div>
      <ul className="tag-search__transition">
        <li className="tag-search__transition-item">
          <button onClick={() => handlePageChange('courses')} className={`tag-search__transition-link ${currentPage === 'courses' ? 'tag-search__transition-link--chosen' : ''}`}>
            Khóa học
          </button>
        </li>
        <li className="tag-search__transition-item">
          <button onClick={() => handlePageChange('results')} className={`tag-search__transition-link ${currentPage === 'results' ? 'tag-search__transition-link--chosen' : ''}`}>
            Kết quả luyện thi
          </button>
        </li>
        <li className="tag-search__transition-item">
          <button onClick={() => handlePageChange('document')} className={`tag-search__transition-link ${currentPage === 'document' ? 'tag-search__transition-link--chosen' : ''}`}>
            Document
          </button>
        </li>
      </ul>
      <div className="course__registed-container">
        {currentPage === 'courses' && <GetCoursesByUser />}
        {currentPage === 'results' && <GetExamByUser/>}
        {currentPage === 'document' && <GetDocByUser/>}
      </div>
    </div>
  );
}
