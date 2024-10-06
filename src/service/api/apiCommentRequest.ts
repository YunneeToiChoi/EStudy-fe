import * as request from "@/lib/utils/request";

import {
    getRatingCourseStart,
    getRatingCourseFailed,
    getRatingCourseSuccess,
    getRatingDocumentStart,
    getRatingDocumentFailed,
    getRatingDocumentSuccess,
    getRatingPostStart,
    getRatingPostFailed,
    getRatingPostSuccess,
}from "@/service/reduxState/ratingSlices"
import {  getRatingReplyStart, getRatingReplySuccess, getRatingReplyFailed} from "@/service/reduxState/replySlices";

export const getCommentCourse = async (courseId:any, dispatch:any) => {
    dispatch(getRatingCourseStart());
    try {
        const res = await request.post('RatingAPI/RatingOfCourse', courseId);
        dispatch(getRatingCourseSuccess(res));
    } catch (err:any) {
        dispatch(getRatingCourseFailed(err.response?.data));
    }
};

export const getCommentDocument = async (documentId:any, dispatch:any) => {
    dispatch(getRatingDocumentStart());
    try {
        const res = await request.post('RatingAPI/RatingOfDocument', documentId);
        dispatch(getRatingDocumentSuccess(res));
    } catch (err:any) {
        dispatch(getRatingDocumentFailed(err.response?.data));
    }
};

export const getCommentPost = async (data:any, dispatch:any) => {
    dispatch(getRatingPostStart());
    try {
        const res = await request.post('RatingAPI/SubmitRatingOrReply', data);
        dispatch(getRatingPostSuccess(res));
    } catch (err:any) {
        dispatch(getRatingPostFailed(err.response?.data));
    }
};

export const getCommentReply = async (data: any, dispatch: any) => {
    dispatch(getRatingReplyStart());
    try {
        const res = await request.post('RatingAPI/ShowReply', data);

        // Chúng ta cần dispatch với cấu trúc dữ liệu phù hợp
        const repliesData = res.replies.map((reply:any) => ({
            ratingId: reply.ratingId,
            replyId: reply.replyId,
            replyContent: reply.replyContent,
            replyDate: reply.replyDate,
            user: reply.user, // bao gồm thông tin người dùng
            images:reply.images,
        }));

        dispatch(getRatingReplySuccess({ ratingId: data.ratingId, data: repliesData }));
    } catch (err: any) {
        dispatch(getRatingReplyFailed(err.response?.data)); 
    }
};
