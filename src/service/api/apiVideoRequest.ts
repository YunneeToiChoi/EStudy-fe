import * as request from "@/lib/utils/request";
import {
    getVideoStart,
    getVideoFailed,
    getVideoSuccess,

}
from "@/service/reduxState/videoSlices"

export const getVideoByLesson = async (lessonId:any,dispatch:any) => {
    dispatch(getVideoStart());
    try {
      const res = await request.post('/Video_API/Get_AllVideoOfLesson', lessonId);
      dispatch(getVideoSuccess(res));
    } catch (err:any) {
      dispatch(getVideoFailed(err.response.data));
    }
  }