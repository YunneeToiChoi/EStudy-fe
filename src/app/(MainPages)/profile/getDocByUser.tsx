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
    <div className="relative">
      {checkNoDocument?.status === 404 || listDocuments == null ? (
        <div>Học viên chưa có tài liệu nào</div>
      ) : (
        <>
          <h2 className="font-semibold text-3xl text-[#17165B]">Tài liệu của tôi</h2>
          <div className="mt-16 grid grid-cols-3 gap-14">
            {listDocuments.map((document: any) => {
              return (
                <Link key={document.documentId} href={`/document/${document.documentId}`} className="group h-full">
                  <div className="shadow-md flex flex-col items-center group-hover:shadow-lg transition duration-500 delay-75 ease-in-out bg-white p-4 rounded-xl mb-5 h-full">
                    <div className="mb-5 w-full h-72 group relative overflow-hidden rounded-[10px]">
                      <Image
                        className="object-cover h-full transition duration-500 ease group-hover:brightness-[95%] group-hover:scale-105"
                        width={1000}
                        height={1000}
                        quality={100}
                        alt="image"
                        src={document.documentImage}
                      />
                    </div>
                    <h3 className="text-base font-medium text-center">{document.documentName}</h3>
                    <div className="mt-3 rounded-xl px-4 py-2 bg-green-500 text-white text-base font-medium w-fit">
                      Đã tải lên
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
