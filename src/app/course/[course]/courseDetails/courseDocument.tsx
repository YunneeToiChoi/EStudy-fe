'use client';

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetLoadingCourse from "@/app/components/course/loadingCourse";
import { getCourseDocuments } from "@/service/api/apiDocumentRequest";
import DocumentCard from "@/app/components/document/DocumentCard";

interface DocumentCourseProps {
  courseId: string;
}

const GetDocByCourse: React.FC<DocumentCourseProps> = ({ courseId }) => {
  const dispatch = useDispatch();
  const checkNoDocument = useSelector((state: any) => state.ThunkReducer.document.courseDoc?.data);
  const listDocuments = useSelector((state: any) => state.ThunkReducer.document.courseDoc?.data?.documents);
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (courseId) {
      const ID = { courseId: courseId };
      getCourseDocuments(ID, dispatch).then(() => {
        setIsLoading(false);
      });
    }
  }, [dispatch]);

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  if (isLoading && !checkNoDocument) {
    return <GetLoadingCourse />;
  }

  return (
    <div className=" m-auto pb-20">
      {checkNoDocument?.status === 404 || listDocuments == null || listDocuments.length <= 0 ? (
        <div className="text-center mt-10 text-gray-500">Chưa có tài liệu nào</div>
      ) : (
        <>
          <h2 className="font-semibold text-3xl text-primary-bg-color text-center mt-10">Tài liệu</h2>
          <div className="relative mt-10">
            <button
              className={`absolute left-0 z-10 bg-blue-600 text-white px-3 py-2 rounded-full hover:bg-blue-700 transition transform -translate-y-1/2 top-1/2 
                ${listDocuments?.length <= 0 ? 'opacity-50 cursor-not-allowed bg-gray-400' : ''}`}
              onClick={handlePrev}
              disabled={listDocuments?.length <= 0}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto scroll-smooth px-4 w-[calc(100%-80px)] mx-auto" 
              style={{ scrollBehavior: 'smooth', overflow: 'hidden' }}
            >
              {listDocuments.map((document: any) => (
                <div className="flex-shrink-0">
                  <DocumentCard key={document.documentId} document={document} />
                </div>
              ))}
            </div>
            <button
              className={`absolute right-0 z-10 bg-blue-600 text-white px-3 py-2 rounded-full hover:bg-blue-700 transition transform -translate-y-1/2 top-1/2
                ${listDocuments?.length <= 0 ? 'opacity-50 cursor-not-allowed bg-gray-400' : ''}`}
              onClick={handleNext}
              disabled={listDocuments?.length <= 0}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GetDocByCourse;
