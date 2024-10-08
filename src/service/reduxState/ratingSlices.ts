import { createSlice } from "@reduxjs/toolkit";

const ratingSlice = createSlice({
    name: "ratings",
    initialState:{
        ratingCourse:{
            data:null,
            isFetching: false,
            error:false,
        },
        ratingDocument:{
            data:null,
            isFetching: false,
            error:false,
        },
        ratingPost:{
            data:null,
            isFetching: false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        getRatingCourseStart: (state) =>{
            state.ratingCourse.isFetching = true;
        },
        getRatingCourseSuccess: (state,action) => {
            state.ratingCourse.isFetching = false;
            state.ratingCourse.data = action.payload;
            state.ratingCourse.error = false;
        },
        getRatingCourseFailed: (state,action) =>{
            state.ratingCourse.isFetching = false;
            state.ratingCourse.error = true;
            state.msg = action.payload;
        },
        getRatingDocumentStart: (state) =>{
            state.ratingDocument.isFetching = true;
        },
        getRatingDocumentSuccess: (state,action) => {
            state.ratingDocument.isFetching = false;
            state.ratingDocument.data = action.payload;
            state.ratingDocument.error = false;
        },
        getRatingDocumentFailed: (state,action) =>{
            state.ratingDocument.isFetching = false;
            state.ratingDocument.error = true;
            state.msg = action.payload;
        },
        getRatingPostStart: (state) =>{
            state.ratingPost.isFetching = true;
        },
        getRatingPostSuccess: (state,action) => {
            state.ratingPost.isFetching = false;
            state.ratingPost.data = action.payload;
            state.ratingPost.error = false;
        },
        getRatingPostFailed: (state,action) =>{
            state.ratingPost.isFetching = false;
            state.ratingPost.error = true;
            state.msg = action.payload;
        },

    }
});

export const {
    getRatingCourseStart,
    getRatingCourseFailed,
    getRatingCourseSuccess,
    getRatingDocumentStart,
    getRatingDocumentFailed,
    getRatingDocumentSuccess,
    getRatingPostStart,
    getRatingPostFailed,
    getRatingPostSuccess,
} = ratingSlice.actions;

export default ratingSlice.reducer;