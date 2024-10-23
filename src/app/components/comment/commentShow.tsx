import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentParent,fetchAllReplies,resetRating,getCommentParentRealtime,getCommentReplyRealtime} from "@/service/api/apiCommentRequest";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { usePusher } from '@/app/pusherProvider';

interface ShowListCommentProps {
  dataId: number;
  type: "Document" | "Course";
}

const ShowListComment: React.FC<ShowListCommentProps> = ({ dataId, type }) => {
  const pusher = usePusher();
  const dispatch = useDispatch();
  const [comments, setComments] = useState<any[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [pageNumbers, setPageNumbers] = useState<{ [ratingId: string]: number }>({});
  const [remainingReplies, setRemainingReplies] = useState<{ [ratingId: string]: number }>({});

  const fetchedComments = useSelector((state: any) =>
    state.ThunkReducer.rating.rating.data
  );

  useEffect(() => {
    const channelName = type === "Course" ? `course_${dataId}` : `document_${dataId}`;
    const channel = pusher.subscribe(channelName);  
    

    channel.bind('new-rating',async (data: any) => {
      await getCommentParentRealtime(data,dispatch)
    });

    channel.bind('new-reply', async (data: any) => {
      await getCommentReplyRealtime(data,dispatch)
    });
  
    return () => {
      channel.unbind_all();
      pusher.unsubscribe(channelName);
    };
  }, [pusher, dataId, type,dispatch]);
  
  useEffect(() => {
    return () => {
        resetRating(dispatch);
    };
}, [dispatch]);

  useEffect(() => {
    const fetchComments = async () => {
      let data;
      if (type === "Document") {
        data = { documentId: dataId };
      } else if (type === "Course") {
        data = { courseId: dataId };
      }
      await getCommentParent(data, dispatch);
    };

    fetchComments();
  }, [dataId, type, dispatch]);

  useEffect(() => {
    if (fetchedComments) {
      setComments(fetchedComments);

    }
  }, [fetchedComments]);

  const handlePageNumberIncrement = (rating: any) => {
    setPageNumbers((prevPageNumbers) => ({
      ...prevPageNumbers,
      [rating.ratingId]: (prevPageNumbers[rating.ratingId] || 1) + 1,
    }));
    setRemainingReplies((prev) => {
      const currentRemaining = prev[rating.ratingId] || rating.childAmount;
      return {
        ...prev,
        [rating.ratingId]: currentRemaining - 5 > 0 ? currentRemaining - 5 : 0,
      };
    });
  
    fetchRepliesForComment(rating);
  };
  const fetchRepliesForComment = async (rating:any) => {
    const pageNumber = pageNumbers[rating.ratingId] || 1;
    const requestData = {
      ...rating,
      ratingId: rating.ratingId,
      pageNumber: pageNumber,
      pageSize: 5,
    };
    await fetchAllReplies(requestData,dispatch);
  };

  const renderComments = (comments: Comment[]) => {
    return comments.map((rating:any) => (
      <article key={rating.ratingId} className="px-6 pt-6 pb-2 text-base bg-white">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex w-full items-center">
          <img className="mr-2 w-11 h-11 rounded-full" src={rating.userImage} alt={rating.userId} />
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <p className="pl-2 items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold max-w-60 whitespace-nowrap overflow-hidden truncate text-ellipsis">
                {rating.userName}
              </p>
              <p className="text-sm ml-auto text-gray-600 dark:text-gray-400">
                <span>{new Date(rating.ratingRatingDate).toLocaleDateString()}</span>
              </p>
            </div>
            {rating.ratingValue !== 0 && (
              <Box sx={{ "& > legend": { mt: 2 } }}>
                <Rating name="read-only" value={rating.ratingValue} readOnly />
              </Box>
            )}
          </div>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400 mb-6">{rating.ratingReview}</p>
      <PhotoProvider loop={true}>
        <div className="max-w-xl flex-wrap flex items-center gap-4">
          {rating.ratingImageUrls.map((url:string, idx:any) => (
            <div key={idx} className="relative w-24 shadow-xl cursor-pointer h-24">
              <PhotoView src={url}>
                <img src={url} alt={`Preview ${idx}`} className="w-full h-full object-cover rounded-lg" />
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>
      {/* Nếu có các bình luận con thì render đệ quy */}
      {rating.replies && rating.replies.length > 0 && (
        <div className="pl-20 my-4 border-t-2 border-slate-200">
          {renderComments(rating.replies)}
        </div>
      )}
      <div className="flex items-center justify-center mt-4 space-x-4">
         {rating.replyExist && (remainingReplies[rating.ratingId] == null || remainingReplies[rating.ratingId] > 0) && (
          <button
            type="button"
            className="flex items-center pb-3 text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
            onClick={() => handlePageNumberIncrement(rating)}
          >
            <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h2m1-9h1a1 1 0 0 1 1 1v1m-6 0H5a1 1 0 0 0-1 1v1m5 0h5m-4 4h2m1-9h1a1 1 0 0 1 1 1v1m-1 4h3m1 5h-1m-2 0h-1m-1 0H8" />
            </svg>
            Xem ({remainingReplies[rating.ratingId] || rating.childAmount}) phản hồi
          </button>
        )}
      </div>
       
    </article>
      
    ));
  };
  
  return (
    <>
      {comments.length > 0 ? (
        <><div
          className={`transition-all duration-300 ${showMore ? "" : "max-h-[500px] overflow-hidden"}`}>
          {renderComments(comments.slice(0, showMore ? comments.length : 3))}
        </div>
        <button onClick={() => setShowMore(!showMore)} className="text-blue-500 text-center mt-5 font-extrabold w-full hover:underline">
        {showMore ? "Ẩn bình luận" : "Xem thêm bình luận"}
      </button>
        </>

        
        
      ) : (
        <p className=" text-center">Chưa có bình luận nào.</p>
      )}
    </>
  );
};

export default ShowListComment;
