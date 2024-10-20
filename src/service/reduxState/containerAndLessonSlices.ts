import { createSlice } from "@reduxjs/toolkit";

const contentUnitsSlice = createSlice({
    name: "contentUnits",
    initialState:{
        ContentUnit:{
            data:null,
            isFetching: false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        getContentUnitStart: (state) =>{
            state.ContentUnit.isFetching = true;
        },
        getContentUnitSuccess: (state,action) => {
            state.ContentUnit.isFetching = false;
            state.ContentUnit.data = action.payload;
            state.ContentUnit.error = false;
        },
        getContentUnitFailed: (state,action) =>{
            state.ContentUnit.isFetching = false;
            state.ContentUnit.error = true;
            state.msg = action.payload;
            state.ContentUnit.data = null;
        },
    }
});

export const {
    getContentUnitStart,
    getContentUnitFailed,
    getContentUnitSuccess
} = contentUnitsSlice.actions;

export default contentUnitsSlice.reducer;