import * as request from "@/lib/utils/request";
import {
    getRatingStart,
    getRatingFailed,
    getRatingSuccess,
    getRatingPostStart,
    getRatingPostFailed,
    getRatingPostSuccess,
    resetRatingState
} from "@/service/reduxState/ratingSlices";

// Hàm lấy đánh giá cha
export const getCommentParent = async (courseId: any, dispatch: any) => {
    dispatch(getRatingStart());
    try {
        const res = await request.post('RatingAPI/RatingOfCourse', courseId);
        const modifiedData = res.data.map((rating: any) => ({
            ratingId: rating.ratingId,
            rootId: rating.ratingId,
            userId: rating.userId,
            userImage: rating.userImage,
            userName: rating.userName,
            ratingValue: rating.ratingValue,
            ratingReview: rating.ratingReview,
            ratingRatingDate: rating.ratingRatingDate,
            ratingImageUrls: rating.ratingImageUrls,
            childAmount: rating.childAmount,
            replyExist: rating.replyExist,
            isRoot: true, 
            replies: [],
        }));
        dispatch(getRatingSuccess(modifiedData));
    } catch (err: any) {
        dispatch(getRatingFailed(err));
    }
};

export const fetchAllReplies = async (rating: any, dispatch: any) => {
    dispatch(getRatingStart());
    const pageNumber = rating.pageNumber;
    const pageSize = 5;

    const requestData = rating.ratingId != rating.rootId
    ? {
        ratingId: rating.rootId,
        pageNumber: pageNumber,
        pageSize: pageSize,
        parentId: rating.ratingId,
      }
    : {
        ratingId: rating.ratingId,
        pageNumber: pageNumber,
        pageSize: pageSize,
      };

    try {
        // Lấy replies từ API
        const replies = await getCommentReply(requestData, dispatch);
        // Dispatch action để cập nhật Redux state với các replies mới
        dispatch(getRatingSuccess([{
            ratingId: rating.ratingId,
            replies: replies // Truyền các replies mới vào payload
        }]));

    } catch (error) {
        dispatch(getRatingFailed(error));
        console.error("Error fetching replies:", error);
    }
};



// Hàm lấy reply cho từng trang
export const getCommentReply = async (data: any, dispatch: any) => {
    try {

        const res = await request.post('RatingAPI/ShowReply', data);
        // Dữ liệu reply trả về từ API
        const repliesData = res?.replies.map((reply: any) => ({
            rootId:reply.ratingId,
            parentId: reply.parentReplyId,
            userId: reply.user.userId,
            userImage: reply.user.userImage,
            userName: reply.user.userName,
            ratingId: reply.replyId,
            ratingReview: reply.replyContent,
            ratingRatingDate: reply.replyDate,
            ratingImageUrls: reply.images.map((img: any) => img.imageUrl),
            childAmount: reply.childAmount,
            replyExist: reply.replyExist,
        }));
        return repliesData; // Trả về dữ liệu replies
    } catch (err: any) {
        throw err;
    }
};

export const resetRating = async (dispatch: any) => {
    dispatch(resetRatingState());
};

// Hàm gửi đánh giá hoặc phản hồi
export const getCommentPost = async (data: any, dispatch: any) => {
    dispatch(getRatingPostStart());
    try {
        const res = await request.post('RatingAPI/SubmitRatingOrReply', data);
        dispatch(getRatingPostSuccess(res));
    } catch (err: any) {
        dispatch(getRatingPostFailed(err.response?.data));
    }
};

export const getCommentParentRealtime = async (data: any, dispatch: any) => {
    dispatch(getRatingStart());
    try{
        const repliesData = [{
            rootId:data.ReferenceId,
            ratingId: data.ReferenceId,
            userId: data.UserId,
            // userImage: data.user.userImage,
            // userName: data.user.userName,
            ratingReview: data.Content,
            // ratingRatingDate: data.replyDate,
            ratingImageUrls: data.RatingImages,
            isRoot: true, 
            replies: [],
        }];
        dispatch(getRatingSuccess( repliesData));
    }
    catch(error){
        dispatch(getRatingFailed(error));
        console.error("Error fetching real-time replies:", error);
    }
}

export const getCommentReplyRealtime = async (data: any, dispatch: any) => {
    console.log(data)
    dispatch(getRatingStart());
    try{
        const parentId = data.ParentId || data.RootId;
        const repliesData = [{
            rootId:data.RootId,
            ratingId: data.ReferenceId,
            userId: data.UserId,
            parentId: data.ParentId,
            // userImage: data.user.userImage,
            // userName: data.user.userName,
            ratingReview: data.Content,
            // ratingRatingDate: data.replyDate,
            ratingImageUrls: data.RatingImages,
        }];
        dispatch(getRatingSuccess([{
            ratingId: parentId,
            replies: repliesData // Truyền các replies mới vào payload
        }]));
    }
    catch(error){
        dispatch(getRatingFailed(error));
        console.error("Error fetching real-time replies:", error);
    }
}
