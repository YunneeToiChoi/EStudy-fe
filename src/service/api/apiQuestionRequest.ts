
import * as request from "@/lib/utils/request";
import {
    getQuestionsStart,
    getQuestionsFailed,
    getQuestionsSuccess
}
from "@/service/reduxState/questionSlices"

export const getAllQuestionOfLesson = async (lessonId:any,dispatch:any) => {
  dispatch(getQuestionsStart());
  try {
    const res = await request.post('/Question_API/Get_AllQuestionOfLesson', lessonId);
    dispatch(getQuestionsSuccess(res));
  } catch (err:any) {
    dispatch(getQuestionsFailed(err.response.data));
  }
}