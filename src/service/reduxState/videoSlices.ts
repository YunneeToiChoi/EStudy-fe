import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState:{
        videos:{
            data:null,
            isFetching: false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        getVideoStart: (state) =>{
            state.videos.isFetching = true;
        },
        getVideoSuccess: (state,action) => {
            state.videos.isFetching = false;
            state.videos.data = action.payload;
            state.videos.error = false;
        },
        getVideoFailed: (state,action) =>{
            state.videos.isFetching = false;
            state.videos.error = true;
            state.msg = action.payload;
        },
    }
});

export const {
    getVideoStart,
    getVideoFailed,
    getVideoSuccess,
} = videoSlice.actions;

export default videoSlice.reducer;