import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: "courses",
    initialState:{
        course:{
            data:null,
            isFetching: false,
            error:false,
        },
        CourseDetail:{
            data: null,
            isFetching: false,
            error: false,
        },
        AllCourseByUsers:{
            data:null,
            isFetching:false,
            error:false,
        },
        UnregisteredCourses:{
            data:null,
            isFetching:false,
            error:false,
        },
        PopularCourse:{
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
        getCourseDetailStart: (state) =>{
            state.CourseDetail.isFetching=true;
        },
        getCourseDetailSuccess: (state,action) =>{
            state.CourseDetail.isFetching = false;
            state.CourseDetail.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.CourseDetail.error = false;
        },
        getCourseDetailFailed: (state,action) =>{
            state.CourseDetail.isFetching = false;
            state.CourseDetail.error = true;
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
        },
        getUnregisteredCoursesStart: (state)=>{
            state.UnregisteredCourses.isFetching = true;
        },
        getUnregisteredCoursesSuccess: (state,action) =>{
            state.UnregisteredCourses.isFetching = false;
            state.UnregisteredCourses.data = action.payload;
        },
        getUnregisteredCoursesFailed: (state,action) =>{
            state.UnregisteredCourses.isFetching = false;
            state.UnregisteredCourses.error = true;
            state.msg = action.payload;
        },
        getPopularCourseStart: (state)=>{
            state.PopularCourse.isFetching = true;
        },
        getPopularCourseSuccess: (state,action) =>{
            state.PopularCourse.isFetching = false;
            state.PopularCourse.data = action.payload;
        },
        getPopularCourseFailed: (state,action) =>{
            state.PopularCourse.isFetching = false;
            state.PopularCourse.error = true;
            state.msg = action.payload;
        },
    }
});

export const {
    getCourseStart,
    getCourseFailed,
    getCourseSuccess,
    getCourseDetailStart,
    getCourseDetailSuccess,
    getCourseDetailFailed,
    getAllCourseByUsersStart,
    getAllCourseByUsersSuccess,
    getAllCourseByUsersFailed,
    getUnregisteredCoursesStart,
    getUnregisteredCoursesSuccess,
    getUnregisteredCoursesFailed,
    getPopularCourseStart,
    getPopularCourseSuccess,
    getPopularCourseFailed,
} = courseSlice.actions;

export default courseSlice.reducer;