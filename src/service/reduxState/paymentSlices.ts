import { createSlice } from "@reduxjs/toolkit";

const PaymentSlice = createSlice({
    name: "Payment",
    initialState:{
        Momo:{
                data:null,
                isFetching: false,
                error:false,
            },
        NotifyMomo:{
            data:null,
            isFetching: false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        MomoStart: (state) =>{
            state.Momo.isFetching = true;
        },
        MomoSuccess: (state,action) => {
            state.Momo.isFetching = false;
            state.Momo.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.Momo.error = false;
        },
        MomoFailed: (state,action) =>{
            state.Momo.isFetching = false;
            state.Momo.error = true;
            state.msg = action.payload;
        },
        NotifyMomoStart: (state) =>{
            state.Momo.isFetching = true;
        },
        NotifyMomoSuccess: (state,action) => {
            state.Momo.isFetching = false;
            state.Momo.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.Momo.error = false;
        },
        NotifyMomoFailed: (state,action) =>{
            state.Momo.isFetching = false;
            state.Momo.error = true;
            state.msg = action.payload;
        },
    }
});

export const {
    MomoStart,
    MomoFailed,
    MomoSuccess,
    NotifyMomoStart,
    NotifyMomoSuccess,
    NotifyMomoFailed
} = PaymentSlice.actions;

export default PaymentSlice.reducer;