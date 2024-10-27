import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
    name: "wallet",
    initialState:{
        addWallet:{
                data:null,
                isFetching: false,
                error:false,
            },
            trackingWallet:{
                data:null,
                isFetching: false,
                error:false,
            },
        msg:"",
    },
    reducers:{
        addWalletStart: (state) =>{
            state.addWallet.isFetching = true;
        },
        addWalletSuccess: (state,action) => {
            state.addWallet.isFetching = false;
            state.addWallet.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.addWallet.error = false;
        },
        addWalletFailed: (state) =>{
            state.addWallet.isFetching = false;
            state.addWallet.error = true;
            state.addWallet.data= null;
        },
        trackingWalletStart: (state) =>{
            state.trackingWallet.isFetching = true;
        },
        trackingWalletSuccess: (state,action) => {
            state.trackingWallet.isFetching = false;
            state.trackingWallet.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.trackingWallet.error = false;
        },
        trackingWalletFailed: (state) =>{
            state.trackingWallet.isFetching = false;
            state.trackingWallet.error = true;
            state.trackingWallet.data= null;
        },
    }
});

export const {
    addWalletStart,
    addWalletSuccess,
    addWalletFailed,
    trackingWalletStart,
    trackingWalletSuccess,
    trackingWalletFailed,
} = walletSlice.actions;

export default walletSlice.reducer;