import * as request from "@/lib/utils/request";
 import {
    getVocabByLessonStart,
    getVocabByLessonFailed,
    getVocabByLessonSuccess,
    getVocabFindPairStart,
    getVocabFindPairFailed,
    getVocabFindPairSuccess
 }
 from "@/service/reduxState/vocabSlices"

 export const getVocabOfLesson = async (lessonId:any,dispatch:any) => {
    dispatch(getVocabByLessonStart());
    try {
      const res = await request.post(`/VocabFlashCard_API/Get_AllVocabOfLesson`,lessonId);
      dispatch(getVocabByLessonSuccess(res));
    } catch (err:any) {
      dispatch(getVocabByLessonFailed(err.response.data));
    }
 }

 export const getVocabFindPair = async (lessonId:any,dispatch:any) => {
    dispatch(getVocabFindPairStart());
    try {
      const res = await request.get(`/VocabFlashCard_API/Get_AllVocabFindpair`,lessonId);
      dispatch(getVocabFindPairSuccess(res));
    } catch (err:any) {
      dispatch(getVocabFindPairFailed(err.response.data));
    }
 }