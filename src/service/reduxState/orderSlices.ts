import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
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
            state.order.data= null;
        },
    }
});

export const {
    OrderStart,
    OrderFailed,
    OrderSuccess,
} = orderSlice.actions;

export default orderSlice.reducer;