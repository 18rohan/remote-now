import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export interface user{
    name:string | null;
    lastname:string | null;
    email:string | null;
    uid:string | null;
}

export interface userState {
    loading:boolean;
    user:user | null;
    // userToken:any;
    // error:any;
    // success:boolean;
}

const initialState: userState ={
    loading:false,
    user:null,
    // userToken:null,
    // error:null,
    // success:false,
}

export const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        login:(state, action:PayloadAction<any>)=>{
            state.user = action.payload;

        },
        logout:(state)=>{
           state.user = null;
        }
    },
    extraReducers:{},
})

export const {login,logout} = userSlice.actions;

// Selectors
// export const selectUser = useSelector((state:RootState)=>state.user.user);

export default userSlice.reducer;