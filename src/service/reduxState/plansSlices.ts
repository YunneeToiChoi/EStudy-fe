import { createSlice } from "@reduxjs/toolkit";
const plansSlice = createSlice({
    name: "plan",
    initialState:{
        getAllPlan:{
            data:null,
            isFetching: false,
            error:false,
        },
        getUserPlan:{
            data:null,
            isFetching: false,
            error:false,
        },
        checkExpirePlan:{
            data:null,
            error:false,
            isFetching: false,
        },
        msg:"",
    },
    reducers:{
        getAllPlanStart: (state) =>{
            state.getAllPlan.isFetching = true;
        },
        getAllPlanSuccess: (state,action) => {
            state.getAllPlan.isFetching = false;
            state.getAllPlan.data = action.payload;
            state.getAllPlan.error = false;
            state.msg = "";
        },
        getAllPlanFailed: (state) =>{
            state.getAllPlan.isFetching = false;
            state.getAllPlan.error = true;
            state.getAllPlan.data = null;
        },
        getUserPlanStart: (state) =>{
            state.getUserPlan.isFetching = true;
        },
        getUserPlanSuccess: (state,action) => {
            state.getUserPlan.isFetching = false;
            state.getUserPlan.data = action.payload;
            state.getUserPlan.error = false;
            state.msg = "";
        },
        getUserPlanFailed: (state) =>{
            state.getUserPlan.isFetching = false;
            state.getUserPlan.error = true;
            state.getUserPlan.data = null;
        },
        checkExpirePlanStart: (state) =>{
            state.checkExpirePlan.isFetching = true;
        },
        checkExpirePlanSuccess: (state,action) => {
            state.checkExpirePlan.isFetching = false;
            state.checkExpirePlan.data = action.payload;
            state.checkExpirePlan.error = false;
            state.msg = "";
        },
        checkExpirePlanFailed: (state) =>{
            state.checkExpirePlan.isFetching = false;
            state.checkExpirePlan.error = true;
            state.checkExpirePlan.data = null;
        },
    }
});

export const {
    getAllPlanStart,
    getAllPlanSuccess,
    getAllPlanFailed,
    getUserPlanStart,
    getUserPlanSuccess,
    getUserPlanFailed,
    checkExpirePlanStart,
    checkExpirePlanSuccess,
    checkExpirePlanFailed,
} = plansSlice.actions;

export default plansSlice.reducer;