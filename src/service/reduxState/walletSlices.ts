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
        walletUser:{
            data:null,
            isFetching: false,
            error:false,
        },
        allBankLink:{
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
        walletUserStart: (state) =>{
            state.walletUser.isFetching = true;
        },
        walletUserSuccess: (state,action) => {
            state.walletUser.isFetching = false;
            state.walletUser.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.walletUser.error = false;
        },
        walletUserFailed: (state) =>{
            state.walletUser.isFetching = false;
            state.walletUser.error = true;
            state.walletUser.data= null;
        },
        allBankLinkStart: (state) =>{
            state.allBankLink.isFetching = true;
        },
        allBankLinkSuccess: (state,action) => {
            state.allBankLink.isFetching = false;
            state.allBankLink.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.allBankLink.error = false;
        },
        allBankLinkFailed: (state) =>{
            state.allBankLink.isFetching = false;
            state.allBankLink.error = true;
            state.allBankLink.data= null;
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
    walletUserStart,
    walletUserSuccess,
    walletUserFailed,
    allBankLinkStart,
    allBankLinkSuccess,
    allBankLinkFailed,
} = walletSlice.actions;

export default walletSlice.reducer;