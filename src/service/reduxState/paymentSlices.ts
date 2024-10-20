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
        MomoFailed: (state) =>{
            state.Momo.isFetching = false;
            state.Momo.error = true;
            state.Momo.data= null;
        },
        NotifyMomoStart: (state) =>{
            state.NotifyMomo.isFetching = true;
        },
        NotifyMomoSuccess: (state,action) => {
            state.NotifyMomo.isFetching = false;
            state.NotifyMomo.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.NotifyMomo.error = false;
        },
        NotifyMomoFailed: (state,action) =>{
            state.NotifyMomo.isFetching = false;
            state.NotifyMomo.error = true;
            state.NotifyMomo.data= null;
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