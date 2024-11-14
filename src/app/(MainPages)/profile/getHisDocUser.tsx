'use client';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetLoadingCourse from "@/app/components/course/loadingCourse";
import { getHistoryDoc } from "@/service/api/apiDocumentRequest";
import DocumentCard from "@/app/components/document/DocumentCard";

export default function GetHisDocByUser() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const checkNoDocument = useSelector((state: any) => state.ThunkReducer.document.historyDoc?.data?.value?.documents);
  const listDocuments = useSelector((state: any) => state.ThunkReducer.document.historyDoc?.data?.value?.documents);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (user?.userId) {
      const UserId = { userId: user?.userId };
      getHistoryDoc(UserId, dispatch).then(() => {
        setIsLoading(false);
      });
    }
  }, [dispatch, user?.userId]);

  if (isLoading && !checkNoDocument) {
    return <GetLoadingCourse />;
  }

  const indexOfLastDocument = currentPage * itemsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - itemsPerPage;
  const currentDocuments = listDocuments?.slice(indexOfFirstDocument, indexOfLastDocument);
  
  const totalPages = Math.ceil(listDocuments?.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4">
      {checkNoDocument?.status === 404 || listDocuments == null || listDocuments.length <= 0 ? (
        <div className="text-center mt-10 text-gray-500">Học viên chưa mua tài liệu nào</div>
      ) : (
        <>
          <h2 className="font-semibold text-3xl text-primary-bg-color text-center mt-10">Tài liệu của tôi</h2>
          <div className="mt-10 gap-8 grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {currentDocuments.map((document: any) => {
              return <DocumentCard key={document.documentId} document={document} />;
            })}
          </div>
          <div className="flex justify-center mt-6">
            <button 
              className={`px-4 py-2 mx-2 font-semibold text-white bg-blue-600 rounded-lg transition duration-300 ease-in-out 
                          ${currentPage === 1 ? 'opacity-50 cursor-not-allowed bg-gray-400' : 'hover:bg-blue-700'}`} 
              onClick={() => setCurrentPage(prev => prev - 1)} 
              disabled={currentPage === 1}>
              Trước
            </button>
            <span className="mx-4 self-center text-lg font-medium">Trang {currentPage} / {totalPages}</span>
            <button 
              className={`px-4 py-2 mx-2 font-semibold text-white bg-blue-600 rounded-lg transition duration-300 ease-in-out 
                          ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed bg-gray-400' : 'hover:bg-blue-700'}`} 
              onClick={() => setCurrentPage(prev => prev + 1)} 
              disabled={currentPage === totalPages}>
              Sau
            </button>
          </div>
        </>
      )}
    </div>
  );
}
