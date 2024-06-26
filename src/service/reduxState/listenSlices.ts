import { createSlice } from "@reduxjs/toolkit";

const listenSlice = createSlice({
    name: "listen",
    initialState:{
        listenPicture:{
            data:null,
            isFetching: false,
            error:false,
        },
        ListenQuestRes:{
            data:null,
            isFetching: false,
            error:false,
        },
        ListenSpeech:{
            data:null,
            isFetching: false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        getListenPicStart: (state) =>{
            state.listenPicture.isFetching = true;
        },
        getListenPicSuccess: (state,action) => {
            state.listenPicture.isFetching = false;
            state.listenPicture.data = action.payload;
            state.listenPicture.error = false;
        },
        getListenPicFailed: (state,action) =>{
            state.listenPicture.isFetching = false;
            state.listenPicture.error = true;
            state.msg = action.payload;
        },
        getListenQuestResStart: (state) =>{
            state.ListenQuestRes.isFetching = true;
        },
        getListenQuestResSuccess: (state,action) => {
            state.ListenQuestRes.isFetching = false;
            state.ListenQuestRes.data = action.payload;
            state.ListenQuestRes.error = false;
        },
        getListenQuestResFailed: (state,action) =>{
            state.ListenQuestRes.isFetching = false;
            state.ListenQuestRes.error = true;
            state.msg = action.payload;
        },
        getListenSpeechStart: (state) =>{
            state.ListenSpeech.isFetching = true;
        },
        getListenSpeechSuccess: (state,action) => {
            state.ListenSpeech.isFetching = false;
            state.ListenSpeech.data = action.payload;
            state.ListenSpeech.error = false;
        },
        getListenSpeechFailed: (state,action) =>{
            state.ListenSpeech.isFetching = false;
            state.ListenSpeech.error = true;
            state.msg = action.payload;
        },
    }
});

export const {
    getListenPicStart,
    getListenPicFailed,
    getListenPicSuccess,
    getListenQuestResStart,
    getListenQuestResFailed,
    getListenQuestResSuccess,
    getListenSpeechStart,
    getListenSpeechFailed,
    getListenSpeechSuccess,
} = listenSlice.actions;

export default listenSlice.reducer;