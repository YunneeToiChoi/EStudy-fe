import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        users: {
            allUsers:null,
            isFetching:false,
            error:false
        },
        msg:"",
    },
    reducers:{
        getUsersStart: (state)=>{
            state.users.isFetching = true;
        },
        getUsersSuccess: (state,action) =>{
            state.users.isFetching = false;
            state.users.allUsers = action.payload;
        },
        getUsersFailed: (state,action) => {
            state.users.isFetching = false;
            state.users.error = true;
            state.msg = action.payload;
        },
        deleteUserStart: (state)=>{
            state.users.isFetching = true;
        },
        deleteUsersSuccess: (state,action)=>{
            state.users.isFetching = false;
            state.msg = action.payload;
        },
        deleteUserFailed: (state,action)=>{
            state.users.isFetching = false;
            state.users.error = true;
            state.msg = action.payload;
        },
        resetMsg: (state)=>{
            state.users.allUsers=null,
            state.users.isFetching=false,
            state.users.error=false,
            state.msg = ""
        }
    }
})

export const {
    getUsersStart,
    getUsersSuccess,
    getUsersFailed,
    deleteUserStart,
    deleteUsersSuccess,
    deleteUserFailed,
    resetMsg
} = userSlice.actions;

export default userSlice.reducer;