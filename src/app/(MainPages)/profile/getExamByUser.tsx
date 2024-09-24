"use client"
import Image from 'next/image';
import  Link  from 'next/link';
import GetLoadingCourse from "@/app/components/course/loadingCourse"

import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserExam } from '@/service/api/apiExamRequest';

export default function GetExamByUser() {

    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
    const checkNoExam =useSelector((state: any) => state.ThunkReducer.exam.userExam?.data);
    const listExam = useSelector((state: any) => state.ThunkReducer.exam.userExam?.data?.exams);
    const [isLoading, setIsLoading] = useState(true);
    console.log(listExam)
    console.log(checkNoExam)

    useEffect(() => {
        if (user?.userId) {
            const UserId = {
                userId: user?.userId
            }
            getUserExam(UserId, dispatch).then(() => {
                setIsLoading(false);
            });
        }
    }, [dispatch,user?.userId]);
    
    if (isLoading && !checkNoExam) {
        return  <GetLoadingCourse></GetLoadingCourse>
    }

    function convertToTimeString(totalSeconds: number): string {
        const hours = Math.floor(totalSeconds / 3600); // Lấy số giờ
        const minutes = Math.floor((totalSeconds % 3600) / 60); // Lấy số phút còn lại
        const seconds = totalSeconds % 60; // Lấy số giây còn lại
      
        return `${hours} giờ ${minutes} phút ${seconds} giây`;
      }


    return(
      <div className="relative text-sm">
         {listExam==null||checkNoExam?.status!=200 ? (<div> Học viên chưa tham gia kì thi thử nào .</div>):(
              <>
               <table className="min-w-full my-6 bg-white border border-gray-200">
               <thead>
                 <tr>
                   <th className="py-2 px-4 border-b border-gray-200 text-left">Tên</th>
                   <th className="py-2 px-4 border-b border-gray-200 text-left">Ngày làm</th>
                   <th className="py-2 px-4 border-b border-gray-200 text-left">Kết quả</th>
                   <th className="py-2 px-4 border-b border-gray-200 text-left">Thời gian làm bài</th>
                   <th className="py-2 px-4 border-b border-gray-200 text-left">Chi tiết</th>
                 </tr>
               </thead>
               <tbody>{
               listExam?.map((detail:any)=>(
                <tr key={detail.userExamId} >
                <Link href={`/exam/${detail.examId}/examDetails`}><td className="py-2 px-4 border-b border-gray-200 duration-200 ease-in-out hover:underline hover:text-primary-bg-color"> {detail.examName}</td></Link>
                <td className="py-2 px-4 border-b border-gray-200">
                  {detail.dateTime}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{detail.score} điểm</td>
                <td className="py-2 px-4 border-b border-gray-200">{convertToTimeString(detail.userTime)}</td>
                <Link href={`/exam/${detail.userExamId}/examRevision`}>
                <td className="py-2 px-4 border-b border-gray-200 text-blue-500 hover:underline cursor-pointer">Xem chi tiết</td>
                </Link>
              </tr>
              ))}
                </tbody>
                </table>
              </>
            )}
      </div>
    )
}