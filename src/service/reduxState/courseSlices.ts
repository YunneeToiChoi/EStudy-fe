import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: "courses",
    initialState:{
        course:{
            data:null,
            isFetching: false,
            error:false,
        },
        AllUserCourse:{
            data: null,
            isFetching: false,
            error: false,
        },
        AllCourseByUsers:{
            data:null,
            isFetching:false,
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
            state.course.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.course.error = false;
        },
        getCourseFailed: (state,action) =>{
            state.course.isFetching = false;
            state.course.error = true;
            state.msg = action.payload;
        },
        getAllUsersByCourseStart: (state) =>{
            state.AllUserCourse.isFetching=true;
        },
        getAllUsersByCourseSuccess: (state,action) =>{
            state.AllUserCourse.isFetching = false;
            state.AllUserCourse.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.AllUserCourse.error = false;
        },
        getAllUsersByCourseFailed: (state,action) =>{
            state.AllUserCourse.isFetching = false;
            state.AllUserCourse.error = true;
            state.msg = action.payload;
        },
        getAllCourseByUsersStart: (state)=>{
            state.AllCourseByUsers.isFetching = true;
        },
        getAllCourseByUsersSuccess: (state,action) =>{
            state.AllCourseByUsers.isFetching = false;
            state.AllCourseByUsers.data = action.payload;
        },
        getAllCourseByUsersFailed: (state,action) =>{
            state.AllCourseByUsers.isFetching = false;
            state.AllCourseByUsers.error = true;
            state.msg = action.payload;
        }
    }
});

export const {
    getCourseStart,
    getCourseFailed,
    getCourseSuccess,
    getAllUsersByCourseStart,
    getAllUsersByCourseSuccess,
    getAllUsersByCourseFailed,
    getAllCourseByUsersStart,
    getAllCourseByUsersSuccess,
    getAllCourseByUsersFailed,
} = courseSlice.actions;

export default courseSlice.reducer;