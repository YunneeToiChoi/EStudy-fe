import * as request from "@/lib/utils/request";
import {
    getCategoryOfDocumentsStart,
    getCategoryOfDocumentsFailed,
    getCategoryOfDocumentsSuccess,
    getCourseOfDocumentsStart,
    getCourseOfDocumentsSuccess,
    getCourseOfDocumentsFailed,
    editDocumentStart,
    editDocumentSuccess,
    editDocumentFailed,
} from "@/service/reduxState/documentUserSlices";

export const UploadFiles = async (file: File, userId: any, onUploadProgress: (progressEvent: any) => void) => {
    const formData = new FormData();
    formData.append('files', file);
    formData.append('userId', userId);
    try {
        const res = await request.post('/UserDocumentAPI/Upload', formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
              },
              onUploadProgress,
        });
        if(res?.status === 200 && res)
        {
            return res?.files[0];
        }
    } catch (err:any) {
        return err;
  }
};

export const GetCategoryOfDocuments = async (dispatch: any) => {
    dispatch(getCategoryOfDocumentsStart());
    try {
        const res = await request.get('UserDocumentAPI/GetAllCate');
        dispatch(getCategoryOfDocumentsSuccess(res));
    } catch (err:any) {
        dispatch(getCategoryOfDocumentsFailed(err.response?.data));
    }
};

export const GetCourseOfDocuments = async (userId:any,dispatch: any) => {
    dispatch(getCourseOfDocumentsStart());
    try {
        const res = await request.post('UserDocumentAPI/GetCourseOfUser',userId);
        dispatch(getCourseOfDocumentsSuccess(res));
    } catch (err:any) {
        dispatch(getCourseOfDocumentsFailed(err.response?.data));
    }
};

export const editDocument = async ( data: any, dispatch: any) => {
    dispatch(editDocumentStart());
    try {
        const res = await request.post('UserDocumentAPI/Detail', data);
        dispatch(editDocumentSuccess(res));
    } catch (err:any) {
        dispatch(editDocumentFailed(err.response?.data));
    }
};
