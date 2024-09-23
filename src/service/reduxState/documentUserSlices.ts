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
} = documentSlice.actions;

export default documentSlice.reducer;