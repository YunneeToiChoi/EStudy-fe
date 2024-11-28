"use client"
import Image from 'next/image';
import  Link  from 'next/link';

import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularExam } from "@/service/api/apiExamRequest";


export default function GetPopularExams() {
  const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const dispatch = useDispatch();
  const listExam = useSelector((state: any) => state.ThunkReducer.exam.popularExam?.data?.outstandingExams);
    useEffect(() => {
        if (!listExam) {
            const data = { 
                userId: user?.userId||"",
                amountOutstanding: 4
            }
            getPopularExam(data, dispatch);
        }
    }, [dispatch, listExam, user]);

    return(
    <>
    {listExam && listExam?.length > 0 ?(
      <>
         <h2 className=" font-semibold text-3xl text-center text-primary-bg-color">Đề thi TOEIC</h2>
     <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-14 mt-16">
     {listExam?.map((exam:any) =>{
                return(
                    <div key={exam.examId} className='shadow-xl hover:shadow-2xl transition duration-300 ease-in bg-white/55 rounded-lg px-4'>
                    <Link
                      href={`/exam/${exam.examId}/examDetails`}
                      className="no-underline text-black ">
                      <div className=" p-3 flex flex-col items-center">
                        <div className='w-full'>
                        <Image
                          width={1000}
                          height={1000}
                          src={exam.examImage}
                          alt=""
                          className=" w-full aspect-square object-cover p-3"
                        />
                        </div>
                        <h4 className=" text-xl font-medium text-center mt-4 tracking-wide">
                          {exam.examName}
                        </h4>
                        <div className=" flex flex-col w-full text-sm text-exam-text-color my-4 items-center">
                          <div className='w-full flex items-center justify-between'>
                            <div className=' flex gap-2 items-center'>
                              <i className="fa-regular fa-clock"></i>
                              <span className=" text-sm text-slate-700 font-semibold">
                                {exam.totalMinutes} phút
                              </span>
                            </div>
                            <div className='flex gap-2 items-center'>
                              <i className="fa-solid fa-user-pen"></i>
                              <span className="text-sm text-slate-700 font-semibold">
                                {exam.totalUsersTest}
                              </span>
                            </div>
                            <div className='flex gap-2 items-center'>
                              <i className="fa-regular fa-comment"></i>
                              <span className="text-sm text-slate-700 font-semibold">
                                {exam.totalComments}  
                              </span>
                            </div>
                          </div>
                          <div>
                          </div>
                        </div>
                        <div className=" flex gap-6">
                          <div className=" rounded-md bg-[#F4EEFA] text-sm p-2 text-[#A482D6] inline-block">#IELTS Academic</div>
                          <div className=" rounded-md bg-[#E6F4FF] text-sm p-2 text-[#1A9BFC] inline-block">#Listening</div>
                        </div>
                        <div className=' group mt-4'>
                          <button className=" hover:bg-slate-100 px-5 py-2 cursor-pointer bg-transparent rounded-full border-[2px] border-[#C0E3EB] text-lg flex items-center gap-4">Chi tiết
                          <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
      </div>
      </>
    ):(
      <></>
    )}
    </>
    )
}