import { createSlice } from "@reduxjs/toolkit";
const plansSlice = createSlice({
    name: "plan",
    initialState:{
        getAllPlan:{
            data:null,
            isFetching: false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        getAllPlanStart: (state) =>{
            state.getAllPlan.isFetching = true;
        },
        getAllPlanSuccess: (state,action) => {
            state.getAllPlan.isFetching = false;
            state.getAllPlan.data = action.payload;//nhan du lieu dc truyen vao apirequest
            state.getAllPlan.error = false;
            state.msg = "";
        },
        getAllPlanFailed: (state) =>{
            state.getAllPlan.isFetching = false;
            state.getAllPlan.error = true;
        }
    }
});

export const {
    getAllPlanStart,
    getAllPlanSuccess,
    getAllPlanFailed,
} = plansSlice.actions;

export default plansSlice.reducer;