import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface user {
  name: string | null;
  lastname: string | null;
  email: string | null;
  uid: string | null;
  isCandidate: boolean;
}

export interface userState {
  loading: boolean;
  user: user | null;
  // userToken:any;
  // error:any;
  // success:boolean;
}

const initialState: userState = {
  loading: false,
  user: null,
  // userToken:null,
  // error:null,
  // success:false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
