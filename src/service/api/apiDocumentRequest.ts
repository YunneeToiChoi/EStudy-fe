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
    getAllDocumentsStart,
    getAllDocumentsSuccess,
    getAllDocumentsFailed,
    getUserDocumentsStart,
    getUserDocumentsSuccess,
    getUserDocumentsFailed,
    getCourseDocumentsStart,
    getCourseDocumentsSuccess,
    getCourseDocumentsFailed,
    previewDocStart,
    previewDocSuccess,
    previewDocFailed,
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
        const res = await request.post('UserDocumentAPI/UploadDetail', data);
        dispatch(editDocumentSuccess(res));
    } catch (err:any) {
        dispatch(editDocumentFailed(err.response?.data));
    }
};

export const getAllDocuments = async ( dispatch: any) => {
    dispatch(getAllDocumentsStart());
    try {
        const res = await request.get('/UserDocumentAPI/GetAllDoc');
        dispatch(getAllDocumentsSuccess(res));
    } catch (err:any) {
        dispatch(getAllDocumentsFailed(err.response?.data));
    }
};

export const getUserDocuments = async (userId: any, dispatch: any) => {
    dispatch(getUserDocumentsStart());
    try {
        const res = await request.post('/UserDocumentAPI/GetDocByUser', userId);
        dispatch(getUserDocumentsSuccess(res));
    } catch (err:any) {
        dispatch(getUserDocumentsFailed(err.response?.data));
    }
};

export const getCourseDocuments = async (courseId: any, dispatch: any) => {
    dispatch(getCourseDocumentsStart());
    try {
        const res = await request.post('UserDocumentAPI/GetDocByCourse', courseId);
        dispatch(getCourseDocumentsSuccess(res));
    } catch (err:any) {
        dispatch(getCourseDocumentsFailed(err.response?.data));
    }
};

export const previewDoc = async (docId: any, dispatch: any) => {
    dispatch(previewDocStart());
    try {
        const res = await request.get(`UserDocumentAPI/DocumentDetail/${docId}`);
        dispatch(previewDocSuccess(res));
    } catch (err:any) {
        dispatch(previewDocFailed(err.response?.data));
    }
};