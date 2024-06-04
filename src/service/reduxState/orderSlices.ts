import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: "order",
    initialState:{
        order:{
                data:null,
                isFetching: false,
                error:false,
            },
        msg:"",
    },
    reducers:{
        OrderStart: (state) =>{
            state.order.isFetching = true;
        },
        OrderSuccess: (state,action) => {
            state.order.isFetching = false;
            state.order.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.order.error = false;
        },
        OrderFailed: (state) =>{
            state.order.isFetching = false;
            state.order.error = true;
        },
    }
});

export const {
    OrderStart,
    OrderFailed,
    OrderSuccess,
} = courseSlice.actions;

export default courseSlice.reducer;