import { createSlice } from "@reduxjs/toolkit";

const vocabSlice = createSlice({
    name: "Vocab",
    initialState:{
        VocabByLesson:{
            data:null,
            isFetching: false,
            error:false,
        },
        VocabFindPair:{
            data:null,
            isFetching: false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        getVocabByLessonStart: (state) =>{
            state.VocabByLesson.isFetching = true;
        },
        getVocabByLessonSuccess: (state,action) => {
            state.VocabByLesson.isFetching = false;
            state.VocabByLesson.data = action.payload;
            state.VocabByLesson.error = false;
        },
        getVocabByLessonFailed: (state,action) =>{
            state.VocabByLesson.isFetching = false;
            state.VocabByLesson.error = true;
            state.msg = action.payload;
        },
        getVocabFindPairStart: (state) =>{
            state.VocabFindPair.isFetching = true;
        },
        getVocabFindPairSuccess: (state,action) => {
            state.VocabFindPair.isFetching = false;
            state.VocabFindPair.data = action.payload;
            state.VocabFindPair.error = false;
        },
        getVocabFindPairFailed: (state,action) =>{
            state.VocabByLesson.isFetching = false;
            state.VocabByLesson.error = true;
            state.msg = action.payload;
        },
    }
});

export const {
    getVocabByLessonStart,
    getVocabByLessonFailed,
    getVocabByLessonSuccess,
    getVocabFindPairStart,
    getVocabFindPairFailed,
    getVocabFindPairSuccess
} = vocabSlice.actions;

export default vocabSlice.reducer;