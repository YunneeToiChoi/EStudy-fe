'use client';

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import GetLoadingCourse from "@/app/components/course/loadingCourse";
import { getUserDocuments } from "@/service/api/apiDocumentRequest";

export default function GetDocByUser() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const checkNoDocument = useSelector((state: any) => state.ThunkReducer.document.userDoc?.data);
  const listDocuments = useSelector((state: any) => state.ThunkReducer.document.userDoc?.data?.userDoc);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user?.userId) {
      const UserId = { userId: user?.userId };
      getUserDocuments(UserId, dispatch).then(() => {
        setIsLoading(false);
      });
    }
  }, [dispatch, user?.userId]);

  if (isLoading && !checkNoDocument) {
    return <GetLoadingCourse />;
  }

  return (
    <div className="container mx-auto px-4">
      {checkNoDocument?.status === 404 || listDocuments == null||listDocuments.length<=0 ? (
        <div className="text-center mt-10 text-gray-500">Học viên chưa có tài liệu nào</div>
      ) : (
        <>
          <h2 className="font-semibold text-3xl text-[#17165B] text-center mt-10">Tài liệu của tôi</h2>
          <div className="mt-10 gap-8 grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {listDocuments.map((document: any) => {
              return (
                <Link key={document.documentId} href={`/document/${document.documentId}`} className="group w-fit m-auto">
                  <div className="bg-white shadow-md border-2 border-slate-300 w-fit overflow-hidden transition transform hover:scale-105 hover:shadow-lg mx-auto">
                    <div className="relative h-40 w-48 overflow-hidden bg-gray-100">
                      <Image
                        className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:scale-110"
                        width={1000}
                        height={1000}
                        quality={100}
                        alt="Document Thumbnail"
                        src={document.thumbnailUrl}
                      />
                      <div className="absolute top-0 right-0 bg-slate-300 text-black shadow-inner text-sm font-semibold px-2 py-1 rounded-bl-lg">
                      {document?.categoryName}
                      </div>
                    </div>
                    <div className="p-4 text-center border-[1px] border-t-slate-300">
                      <h3 className="font-medium text-primary-bg-color group-hover:text-blue-600 transition w-40 truncate overflow-hidden whitespace-nowrap text-ellipsis">{document?.title}</h3>
                      <div className=" mt-2 flex gap-2 items-center">
                        <i className="fa-regular fa-file-pdf text-lg text-red-600"></i>
                        <p className="text-sm text-gray-500"> 
                        {new Date(document?.uploadDate).toLocaleDateString('vi-VN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                      </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
