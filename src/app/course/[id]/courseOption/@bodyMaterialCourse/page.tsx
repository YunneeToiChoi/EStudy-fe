"use client" 
import  Link  from 'next/link';
import {BreadcrumbWithCustomSeparator} from '@/components/handicraft/params/paramsCourseLearn';
import ListUnitsComponent from "../@navLeft/getUnits"

export default function BodyCourseOption({ params }: { params: {id: string } }){
    return(
        <div>
             <nav className=" fixed bg-white border-b-[1px] border-b-course-border-color w-full p-6 flex items-center justify-between ">
             <BreadcrumbWithCustomSeparator></BreadcrumbWithCustomSeparator>
            <label className="lg:hidden" htmlFor="content_checkbox"
              ><i className="fa-solid fa-bars text-xl mr-5 cursor-pointer"></i>
              </label>
          </nav>
          <input
            type="checkbox"
            id="content_checkbox"
            className=" peer/blockMenu nav-mobile-course__input"
          />
          <div className="peer-checked/blockMenu:-translate-x-0 fixed bg-white pt-[120px] h-full top-0 bottom-0 right-0 left-0 -translate-x-full transition duration-500 ease-in-out">
            <ListUnitsComponent params={params}></ListUnitsComponent>
          </div>
          <div className=" flex py-[60px]">
            <div className=" mx-auto max-2xl:mx-[40px] w-[1000px] grid">
              <h1 className=" text-3xl font-semibold mt-[50px]">Bài học thử</h1>
              <div className=" bg-white p-5 border-[1px] border-course-border-color rounded-[10px] shadow-lg text-base my-[40px] w-full">
                <h2 className="content__box-header">Tiến độ học tập</h2>
                <p className="content__box-percent">0%</p>
                <div className=" p-1 w-full bg-[#e0e0e0] rounded-[10px]"></div>
              </div>
              <div className="bg-white p-5 border-[1px] border-course-border-color rounded-[10px] shadow-lg text-base my-[40px] w-full">
                <h2 className="content__box-header">Hướng dẫn làm dạng T/F/NG</h2>
                <Link href="" className=" flex items-center text-base p-3 no-underline text-black hover:bg-exam-bg-color transition duration-100">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className=" mx-2">Video bài giảng:</h3>
                  <span className=" text-xl"> Lý thuyết</span>
                </Link>
                <Link href="" className="flex items-center text-base p-3 no-underline text-black hover:bg-exam-bg-color transition duration-100">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="mx-2">Video bài giảng:</h3>
                  <span className="text-xl"> Lý thuyết</span>
                </Link>
              </div>
              <div className="bg-white p-5 border-[1px] border-course-border-color rounded-[10px] shadow-lg text-base my-[40px] w-full">
                <h2 className="content__box-header">Hướng dẫn làm dạng T/F/NG</h2>
                <Link href="" className=" flex items-center text-base p-3 no-underline text-black hover:bg-exam-bg-color transition duration-100">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className=" mx-2">Video bài giảng:</h3>
                  <span className=" text-xl"> Lý thuyết</span>
                </Link>
                <Link href="" className="flex items-center text-base p-3 no-underline text-black hover:bg-exam-bg-color transition duration-100">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="mx-2">Video bài giảng:</h3>
                  <span className="text-xl"> Lý thuyết</span>
                </Link>
              </div>
              <div className="bg-white p-5 border-[1px] border-course-border-color rounded-[10px] shadow-lg text-base my-[40px] w-full">
                <h2 className="content__box-header">Hướng dẫn làm dạng T/F/NG</h2>
                <Link href="" className=" flex items-center text-base p-3 no-underline text-black hover:bg-exam-bg-color transition duration-100">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className=" mx-2">Video bài giảng:</h3>
                  <span className=" text-xl"> Lý thuyết</span>
                </Link>
                <Link href="" className="flex items-center text-base p-3 no-underline text-black hover:bg-exam-bg-color transition duration-100">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="mx-2">Video bài giảng:</h3>
                  <span className="text-xl"> Lý thuyết</span>
                </Link>
              </div>
              <div className="bg-white p-5 border-[1px] border-course-border-color rounded-[10px] shadow-lg text-base my-[40px] w-full">
                <h2 className="content__box-header">Hướng dẫn làm dạng T/F/NG</h2>
                <Link href="" className=" flex items-center text-base p-3 no-underline text-black hover:bg-exam-bg-color transition duration-100">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className=" mx-2">Video bài giảng:</h3>
                  <span className=" text-xl"> Lý thuyết</span>
                </Link>
                <Link href="" className="flex items-center text-base p-3 no-underline text-black hover:bg-exam-bg-color transition duration-100">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="mx-2">Video bài giảng:</h3>
                  <span className="text-xl"> Lý thuyết</span>
                </Link>
              </div>
              <Link href="" className=" mt-[30px] text-base text-white bg-nav-hover-text-color px-[14px] py-[10px] rounded no-underline w-fit">1</Link>
            </div>
          </div>
        </div>
    )
}