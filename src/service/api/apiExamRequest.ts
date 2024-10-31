import * as request from "@/lib/utils/request";
import {
    getAllExamStart,
    getAllExamFailed,
    getAllExamSuccess,
    getDetailExamStart,
    getDetailExamSuccess,
    getDetailExamFailed,
    getAudioExamStart,
    getAudioExamSuccess,
    getAudioExamFailed,
    getCompleteExamStart,
    getCompleteExamSuccess,
    getCompleteExamFailed,
    getPopularExamStart,
    getPopularExamSuccess,
    getPopularExamFailed,
    getPart1Start,
    getPart1Success,
    getPart1Failed,
    getPart2Start,
    getPart2Success,
    getPart2Failed,
    getPart3Start,
    getPart3Success,
    getPart3Failed,
    getPart4Start,
    getPart4Success,
    getPart4Failed,
    getPart5Start,
    getPart5Success,
    getPart5Failed,
    getPart6Start,
    getPart6Success,
    getPart6Failed,
    getPart7Start,
    getPart7Success,
    getPart7Failed,
    getPart8Start,
    getPart8Success,
    getPart8Failed,
    getPart9Start,
    getPart9Success,
    getPart9Failed,
    getExamRevisionStart,
    getExamRevisionSuccess,
    getExamRevisionFailed,
    getUserExamStart,
    getUserExamSuccess,
    getUserExamFailed,
} from "@/service/reduxState/examSlices";

export const getAllExams = async (dispatch:any) => {
    dispatch(getAllExamStart());
    try {
        const res = await request.get('/Exam_API/Get_AllExams');
        dispatch(getAllExamSuccess(res));
    } catch (err:any) {
        dispatch(getAllExamFailed(err.response?.data));
    }
};

export const getDetailExam = async (data:any, dispatch:any) => {
    dispatch(getDetailExamStart());
    try {
        const res = await request.post(`/Exam_API/Get_ExamDetailById`,data);
        dispatch(getDetailExamSuccess(res));
    } catch (err:any) {
        dispatch(getDetailExamFailed(err.response?.data));
    }
};

export const getAudioExam = async (data:any, dispatch:any) => {
    dispatch(getAudioExamStart());
    try {
        const res = await request.post(`/Exam_API/Get_AudioExam`,{examId:data});
        dispatch(getAudioExamSuccess(res));
    } catch (err:any) {
        dispatch(getAudioExamFailed(err.response?.data));
    }
};

export const getCompleteExam = async (data: any, dispatch: any) => {
    dispatch(getCompleteExamStart());
    try {
        const res = await request.post(`/Exam_API/SubmitExam`, data);
        dispatch(getCompleteExamSuccess(res));
        return res; // Trả về toàn bộ dữ liệu để lấy userExamId
    } catch (err: any) {
        dispatch(getCompleteExamFailed(err.response?.data));
        return err?.response?.status;
    }
};

// Hàm gửi Part 9 lên endpoint EvaluateQuestionBatch
export const submitPart9 = async (formData: FormData) => {
    try {
        const res = await request.post(`/Speaking/EvaluateQuestionBatch`, formData);
        return res.status;
    } catch (err: any) {
        console.log("Error submitting part 9:", err);
        return err?.response?.status;
    }
};

export const getPopularExam = async (data:any, dispatch:any) => {
    dispatch(getPopularExamStart());
    try {
        const res = await request.post(`/Exam_API/OutstandingExamsUserNotTest`,data);
        dispatch(getPopularExamSuccess(res));
    } catch (err:any) {
        dispatch(getPopularExamFailed(err.response?.data));
    }
};

export const fetchAllParts = async (examId: string, dispatch: any) => {
    const parts = [
        { part: "Part 1", actionStart: getPart1Start, actionSuccess: getPart1Success, actionFailed: getPart1Failed },
        { part: "Part 2", actionStart: getPart2Start, actionSuccess: getPart2Success, actionFailed: getPart2Failed },
        { part: "Part 3", actionStart: getPart3Start, actionSuccess: getPart3Success, actionFailed: getPart3Failed },
        { part: "Part 4", actionStart: getPart4Start, actionSuccess: getPart4Success, actionFailed: getPart4Failed },
        { part: "Part 5", actionStart: getPart5Start, actionSuccess: getPart5Success, actionFailed: getPart5Failed },
        { part: "Part 6", actionStart: getPart6Start, actionSuccess: getPart6Success, actionFailed: getPart6Failed },
        { part: "Part 7", actionStart: getPart7Start, actionSuccess: getPart7Success, actionFailed: getPart7Failed },
        { part: "Part 8", actionStart: getPart8Start, actionSuccess: getPart8Success, actionFailed: getPart8Failed },
        { part: "Part 9", actionStart: getPart9Start, actionSuccess: getPart9Success, actionFailed: getPart9Failed },
    ];
    parts.forEach(({ actionStart }) => dispatch(actionStart()));

    try {
        const requests = parts.map(({ part }) => 
            request.post(`/Exam_API/Get_Exam${part.replace(' ', '')}`, { examId, tagName: part })
        );

        const responses = await Promise.all(requests);

        responses.forEach((response, index) => {
            const { actionSuccess } = parts[index];
            dispatch(actionSuccess(response));
        });
    } catch (err: any) {
        parts.forEach(({ actionFailed }) => dispatch(actionFailed(err.response?.data)));
    }
};

export const getExamRevision = async (userExamId: string, dispatch: any) => {
    dispatch(getExamRevisionStart());
    try {
        const res = await request.get(`/Exam_API/ReviewQuestions/userExamId=${userExamId}`);
        dispatch(getExamRevisionSuccess(res));
    } catch (err: any) {
        dispatch(getExamRevisionFailed(err.response?.data));
    }
};

export const getUserExam = async (userId:any, dispatch: any) => {
    dispatch(getUserExamStart());
    try {
        const res = await request.post('/Exam_API/Get_UserExams',userId);
        dispatch(getUserExamSuccess(res));
    } catch (err: any) {
        dispatch(getUserExamFailed(err.response?.data));
    }
}