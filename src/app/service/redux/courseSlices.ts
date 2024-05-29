import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: "courses",
    initialState:{
        course:{
            listCourse:null,
            isFetching: false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        getCourseStart: (state) =>{
            state.course.isFetching = true;
        },
        getCourseSuccess: (state,action) => {
            state.course.isFetching = false;
            state.course.listCourse= action.payload;//nhan du lieu dc truyen vao apirequest
            state.course.error = false;
        },
        getCourseFailed: (state,action) =>{
            state.course.isFetching = false;
            state.course.error = true;
            state.msg = action.payload;
        },
    }
});

export const {
    getCourseStart,
    getCourseFailed,
    getCourseSuccess,
} = courseSlice.actions;

export default courseSlice.reducer;