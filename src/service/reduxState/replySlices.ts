import { createSlice } from "@reduxjs/toolkit";

const ratingReplySlice = createSlice({
    name: "ratingReply",
    initialState: {
        replies: {},
        isFetching: false,
        error: false,
        msg: "",
    },
    reducers: {
        getRatingReplyStart: (state) => {
            state.isFetching = true;
        },
        getRatingReplySuccess: (state:any, action) => {
            state.isFetching = false;
            const { ratingId, data } = action.payload;
            state.replies[ratingId] = state.replies[ratingId]
                ? [...state.replies[ratingId], ...data]
                : data;
            state.error = false;
        },
        getRatingReplyFailed: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.msg = action.payload;
        },
    },
});

export const {
    getRatingReplyStart,
    getRatingReplySuccess,
    getRatingReplyFailed,
} = ratingReplySlice.actions;

export default ratingReplySlice.reducer;
