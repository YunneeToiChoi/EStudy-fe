import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: "question",
    initialState:{
        questions:{
            data:null,
            isFetching: false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        getQuestionsStart: (state) =>{
            state.questions.isFetching = true;
        },
        getQuestionsSuccess: (state,action) => {
            state.questions.isFetching = false;
            state.questions.data = action.payload;
            state.questions.error = false;
        },
        getQuestionsFailed: (state,action) =>{
            state.questions.isFetching = false;
            state.questions.error = true;
            state.msg = action.payload;
        },
    }
});

export const {
    getQuestionsStart,
    getQuestionsFailed,
    getQuestionsSuccess
} = questionSlice.actions;

export default questionSlice.reducer;