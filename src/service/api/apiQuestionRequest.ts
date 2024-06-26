
import * as request from "@/lib/utils/request";
import {
  getQuestionsStart,
  getQuestionsFailed,
  getQuestionsSuccess,
  getFillWordStart,
  getFillWordFailed,
  getFillWordSuccess,
  getDoubleChoiceStart,
  getDoubleChoiceFailed,
  getDoubleChoiceSuccess,
  getReadingStart,
  getReadingFailed,
  getReadingSuccess
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

export const getAllFillWord = async (lessonId:any,dispatch:any) => {
  dispatch(getFillWordStart());
  try {
    const res = await request.post('/VocabFlashCard_API/Get_AllVocabFillWorld', lessonId);
    dispatch(getFillWordSuccess(res));
  } catch (err:any) {
    dispatch(getFillWordFailed(err.response.data));
  }
}


export const getAllDoubleChoice = async (lessonId:any,dispatch:any) => {
  dispatch(getDoubleChoiceStart());
  try {
    const res = await request.post('/Question_API/Get_AllQuestionDoubleChoice', lessonId);
    dispatch(getDoubleChoiceSuccess(res));
  } catch (err:any) {
    dispatch(getDoubleChoiceFailed(err.response.data));
  }
}

export const getAllReadingQuest = async (lessonId:any,dispatch:any) => {
  dispatch(getReadingStart());
  try {
    const res = await request.post('/Question_API/Get_AllQuestionReading', lessonId);
    dispatch(getReadingSuccess(res));
  } catch (err:any) {
    dispatch(getReadingFailed(err.response.data));
  }
}