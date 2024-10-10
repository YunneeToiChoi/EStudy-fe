import { createSlice } from "@reduxjs/toolkit";

const documentSlice = createSlice({
    name: "courses",
    initialState:{
        cateOfDocuments:{
            data:null,
            isFetching: false,
            error:false,
        },
        courseOfDocuments:{
            data:null,
            isFetching: false,
            error:false,
        },
        editDocument:{
            data:null,
            isFetching: false,
            error:false,
        },
        allDocuments:{
            data:null,
            isFetching: false,
            error:false,
        },
        userDoc:{
            data:null,
            isFetching: false,
            error:false,
        },
        courseDoc:{
            data:null,
            isFetching: false,
            error:false,
        },
        previewDoc:{
            data: null,
            isFetching: false,
            error: false,
        },
        msg:"",
    },
    reducers:{
        getCategoryOfDocumentsStart: (state) =>{
            state.cateOfDocuments.isFetching = true;
        },
        getCategoryOfDocumentsSuccess: (state,action) => {
            state.cateOfDocuments.isFetching = false;
            state.cateOfDocuments.data = action.payload;
            state.cateOfDocuments.error = false;
        },
        getCategoryOfDocumentsFailed: (state,action) =>{
            state.cateOfDocuments.isFetching = false;
            state.cateOfDocuments.error = true;
            state.msg = action.payload;
        },
        getCourseOfDocumentsStart: (state) =>{
            state.courseOfDocuments.isFetching = true;
        },
        getCourseOfDocumentsSuccess: (state,action) => {
            state.courseOfDocuments.isFetching = false;
            state.courseOfDocuments.data = action.payload;
            state.courseOfDocuments.error = false;
        },
        getCourseOfDocumentsFailed: (state,action) =>{
            state.courseOfDocuments.isFetching = false;
            state.courseOfDocuments.error = true;
            state.msg = action.payload;
        },
        editDocumentStart: (state) =>{
            state.editDocument.isFetching = true;
        },
        editDocumentSuccess: (state,action) => {
            state.editDocument.isFetching = false;
            state.editDocument.data = action.payload;
            state.editDocument.error = false;
        },
        editDocumentFailed: (state,action) =>{
            state.editDocument.isFetching = false;
            state.editDocument.error = true;
            state.msg = action.payload;
        },
        getAllDocumentsStart: (state) =>{
            state.allDocuments.isFetching = true;
        },
        getAllDocumentsSuccess: (state,action) => {
            state.allDocuments.isFetching = false;
            state.allDocuments.data = action.payload;
            state.allDocuments.error = false;
        },
        getAllDocumentsFailed: (state,action) =>{
            state.allDocuments.isFetching = false;
            state.allDocuments.error = true;
            state.msg = action.payload;
        },
        getUserDocumentsStart: (state) =>{
            state.userDoc.isFetching = true;
        },
        getUserDocumentsSuccess: (state,action) => {
            state.userDoc.isFetching = false;
            state.userDoc.data = action.payload;
            state.userDoc.error = false;
        },
        getUserDocumentsFailed: (state,action) =>{
            state.userDoc.isFetching = false;
            state.userDoc.error = true;
            state.msg = action.payload;
        },
        getCourseDocumentsStart: (state) =>{
            state.courseDoc.isFetching = true;
        },
        getCourseDocumentsSuccess: (state,action) => {
            state.courseDoc.isFetching = false;
            state.courseDoc.data = action.payload;
            state.courseDoc.error = false;
        },
        getCourseDocumentsFailed: (state,action) =>{
            state.courseDoc.isFetching = false;
            state.courseDoc.error = true;
            state.msg = action.payload;
        },
        previewDocStart: (state) =>{
            state.previewDoc.isFetching = true;
        },
        previewDocSuccess: (state,action) => {
            state.previewDoc.isFetching = false;
            state.previewDoc.data = action.payload;
            state.previewDoc.error = false;
        },
        previewDocFailed: (state,action) =>{
            state.previewDoc.isFetching = false;
            state.previewDoc.error = true;
            state.msg = action.payload;
        },
    }
});

export const {
    getCategoryOfDocumentsStart,
    getCategoryOfDocumentsSuccess,
    getCategoryOfDocumentsFailed,
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
} = documentSlice.actions;

export default documentSlice.reducer;