import { createSlice } from "@reduxjs/toolkit";

const listenSlice = createSlice({
    name: "listen",
    initialState:{
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
            state.ListenQuestRes.data = null;
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
            state.ListenSpeech.data = null;
            state.msg = action.payload;
        },
    }
});

export const {
    getListenQuestResStart,
    getListenQuestResFailed,
    getListenQuestResSuccess,
    getListenSpeechStart,
    getListenSpeechFailed,
    getListenSpeechSuccess,
} = listenSlice.actions;

export default listenSlice.reducer;