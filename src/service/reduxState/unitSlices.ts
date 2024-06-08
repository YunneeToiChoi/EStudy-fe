import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "unit",
    initialState:{
        units:{
            data:null,
            isFetching: false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        getUnitStart: (state) =>{
            state.units.isFetching = true;
        },
        getUnitSuccess: (state,action) => {
            state.units.isFetching = false;
            state.units.data = action.payload;
            state.units.error = false;
        },
        getUnitFailed: (state,action) =>{
            state.units.isFetching = false;
            state.units.error = true;
            state.msg = action.payload;
        },
    }
});

export const {
    getUnitStart,
    getUnitFailed,
    getUnitSuccess
} = userSlice.actions;

export default userSlice.reducer;