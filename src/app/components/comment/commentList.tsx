// ShowListComment.tsx
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentDocument, getCommentCourse, getCommentReply } from "@/service/api/apiCommentRequest";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import CommentInput from './commentReply'; // Import the new CommentInput component

interface ShowListCommentProps {
  dataId: number;
  type: "document" | "course";
}

const ShowListComment: React.FC<ShowListCommentProps> = ({ dataId, type }) => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState<any[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [replies, setReplies] = useState<{ [key: string]: any[] }>({});
  const [replyTo, setReplyTo] = useState<string | null>(null); // Track which comment is being replied to
  const commentRef = useRef<HTMLDivElement>(null);
  const [replyPageNumbers, setReplyPageNumbers] = useState<{ [key: string]: number }>({});

  const fetchedComments = useSelector((state: any) =>
    type === "document"
      ? state.ThunkReducer.rating.ratingDocument.data?.data
      : state.ThunkReducer.rating.ratingCourse.data?.data
  );

  const fetchedReplies = useSelector((state: any) => state.ThunkReducer.replies.replies);

  useEffect(() => {
    const fetchComments = async () => {
      if (type === "document") {
        await getCommentDocument({ documentId: dataId }, dispatch);
      } else if (type === "course") {
        await getCommentCourse({ courseId: dataId }, dispatch);
      }
    };

    fetchComments();
  }, [dataId, type, dispatch]);

  useEffect(() => {
    if (fetchedComments) {
      setComments(fetchedComments);
    }
  }, [fetchedComments]);

  useEffect(() => {
    if (fetchedReplies) {
      setReplies((prev) => ({ ...prev, ...fetchedReplies }));
    }
  }, [fetchedReplies]);

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
    if (commentRef.current) {
      commentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

 const handleShowReplies = async (ratingId: string) => {
  const currentPageNumber = replyPageNumbers[ratingId] || 0; // Lấy số trang hiện tại hoặc mặc định là 1
  const nextPageNumber = currentPageNumber + 1; // Tăng lên 1 mỗi lần bấm

  const data = { ratingId, pageNumber: nextPageNumber, pageSize: 5 };
  console.log(currentPageNumber)
  await getCommentReply(data, dispatch);

  setReplyPageNumbers((prev) => ({
    ...prev,
    [ratingId]: nextPageNumber,
  }));
};

  const handleReply = async (formData: FormData) => {
    setReplyTo(null);
  };
  

  return (
    <>
    { comments.length > 0 ?(
      <>
          <div
        ref={commentRef}
        className={`transition-all duration-300 ${showMore ? "" : "max-h-[500px] overflow-hidden"}`}>
        {comments.slice(0, showMore ? comments.length : 3).map((rating) => (
          <article key={rating.ratingId} className="px-6 pt-6 pb-2 text-base bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex w-full items-center">
                <img className="mr-2 w-11 h-11 rounded-full" src={rating?.userImage} alt={rating?.userId} />
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <p className="pl-2 items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold max-w-60 whitespace-nowrap overflow-hidden truncate text-ellipsis">
                      {rating?.userId}
                    </p>
                    <p className="text-sm ml-auto text-gray-600 dark:text-gray-400">
                      <span>{new Date(rating?.ratingRatingDate).toLocaleDateString()}</span>
                    </p>
                  </div>
                  {rating?.ratingValue !== 0 && (
                    <Box sx={{ "& > legend": { mt: 2 } }}>
                      <Rating name="read-only" value={rating?.ratingValue} readOnly />
                    </Box>
                  )}
                </div>
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400 mb-6">{rating?.ratingReview}</p>
            <PhotoProvider loop={true}>
              <div className="max-w-xl flex-wrap flex items-center gap-4">
                {rating?.ratingImageUrls?.map((url: string, idx: number) => (
                  <div key={idx} className="relative w-24 shadow-xl cursor-pointer h-24">
                    <PhotoView src={url}>
                      <img src={url} alt={`Preview ${idx}`} className="w-full h-full object-cover rounded-lg" />
                    </PhotoView>
                  </div>
                ))}
              </div>
            </PhotoProvider>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex pb-3 items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                onClick={() => setReplyTo(rating?.ratingId)}
              >
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                </svg>
                Trả lời
              </button>   
            </div>
            {replyTo === rating?.ratingId && (
              <CommentInput 
                ratingId={rating?.ratingId} 
                isReply={true} 
                onSubmit={handleReply} 
                ratingEntityType="Course"
                dataId={dataId}
              />
            )}
             {replies[rating?.ratingId]?.map((reply) =>{
               const parentReply = reply?.parentReplyId
               ? replies[rating?.ratingId]?.find((r) => r?.replyId === reply?.parentReplyId)
               : null;
               return(
                <article key={reply?.replyId} className="px-6 ml-11 pt-6 pb-2 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex w-full items-center">
                    <img className="mr-2 w-11 h-11 rounded-full" src={reply?.user?.userImage} alt={reply?.user?.userId} />
                    <div className="flex w-full flex-col gap-1">
                      <div className="flex items-center">
                        <p className="pl-2 items-center text-sm text-gray-900 dark:text-white font-semibold max-w-60 whitespace-nowrap overflow-hidden truncate text-ellipsis">
                          {reply?.user?.userName}
                        </p>
                        {parentReply && (
                          <p className=" items-center text-sm text-gray-900 dark:text-white font-semibold max-w-60 whitespace-nowrap overflow-hidden truncate text-ellipsis">
                            <span><i className="fa-solid fa-caret-right mx-2"></i>{parentReply?.user?.userName}</span>
                          </p>
                        )}
                        <p className="text-sm ml-auto text-gray-600 dark:text-gray-400">
                          <span>{new Date(reply?.replyDate).toLocaleDateString()}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{reply?.replyContent}</p>
                <PhotoProvider loop={true}>
                  <div className="max-w-xl flex-wrap flex items-center gap-4">
                    {reply?.images?.map((url: any, idx: number) => (
                      <div key={idx} className="relative w-24 shadow-xl cursor-pointer h-24">
                        <PhotoView src={url?.imageUrl}>
                          <img src={url?.imageUrl} alt={`Preview ${idx}`} className="w-full h-full object-cover rounded-lg" />
                        </PhotoView>
                      </div>
                    ))}
                  </div>
                </PhotoProvider>
                <div className="flex items-center mt-4 space-x-4">
                  <button  type="button"
                 className="flex pb-3 items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                 onClick={() => setReplyTo(reply?.replyId)}>
                    <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                    </svg>
                    Trả lời
                  </button>
                </div>
                {replyTo === reply?.replyId && (
               <CommentInput 
                 ratingId={rating?.ratingId} 
                 parentReplyId={reply?.replyId}
                 isReply={true} 
                 onSubmit={handleReply} 
                 ratingEntityType="Course"
                 dataId={dataId}
               />
             )}
              </article>
             )
             })}
               {
                rating?.replyExist==true && (
                    <button
                      type="button"
                      className="flex items-center pb-3 text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                      onClick={() => handleShowReplies(rating?.ratingId)}
                    >
                      <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h2m1-9h1a1 1 0 0 1 1 1v1m-6 0H5a1 1 0 0 0-1 1v1m5 0h5m-4 4h2m1-9h1a1 1 0 0 1 1 1v1m-1 4h3m1 5h-1m-2 0h-1m-1 0H8" />
                      </svg>
                    Xem phản hồi
                    </button>
                )
                }
          </article>
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <button
          onClick={handleShowMore}
          className="text-sm text-blue-500 hover:underline"
        >
          {showMore ? 'Ẩn bình luận cũ' : 'Xem thêm bình luận'}
        </button>
      </div>
      </>
    ):(
      <p className="text-lg font-light mt-3 mb-10 text-slate-500">Chưa có đánh giá nào</p>
    )}
    </>
  );
};

export default ShowListComment;
