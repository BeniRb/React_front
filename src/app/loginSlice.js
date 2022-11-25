import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signin,signUp,myLogout } from './loginAPI';
import jwt_decode from "jwt-decode";

const initialState = {
    userName: "",
    email: "",
    token: "",
    logged: false,
    isAdmin: false,
};

export const doSigninAsync = createAsyncThunk(
    'login/signin',
    async (cred) => {
        const response = await signin(cred);
        return response.data;
    }
);

export const doSignupAsync = createAsyncThunk(
    'login/signUp',
    async (cred) => {
        const response = await signUp(cred);
        return response.data;
    }
);

export const doSignOutAsync = createAsyncThunk(
    'login/myLogout',
    async (token) => {
        const response = await myLogout(token);
        return response.data;
    }
);

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state,action) => {
            state.token = ""
                    state.logged = false;
                    state.userName= ""
                    state.email=""
                    state.isAdmin= false;
          },
    },
    //  async  (3)
    //   happens when async done - callback
    extraReducers: (builder) => {
        builder
            .addCase(doSigninAsync.fulfilled, (state, action) => {
                if (action.payload.access) {
                    state.token = action.payload.access
                    state.logged = true;
                    state.userName= jwt_decode(action.payload.access).username
                    state.email=jwt_decode(action.payload.access).email
                    state.isAdmin=jwt_decode(action.payload.access).adminn
                    
                    // console.log( state.email)
                }
            }).addCase(doSignupAsync.fulfilled, (state, action) => {
                if (action.payload.access) {
                     state.token = action.payload.access
                     state.logged = true;
                     state.userName= jwt_decode(action.payload.access).username
                     state.email=jwt_decode(action.payload.access).email
                     state.isAdmin=jwt_decode(action.payload.access).adminn
                     
                }
            }).addCase(doSignOutAsync.fulfilled, (state, action) => {
                    state.token =""
                    state.logged = false;
                    state.userName= ""
                    state.email=""
                    state.isAdmin=false;
                    // console.log( state.email)
            });
    },
});

// export sync method
export const { logout } = loginSlice.actions;

// export any part of the state
export const selectLogged = (state) => state.login.logged;
export const selectEmail = (state) => state.login.email;
export const selectUserName = (state) => state.login.userName;
export const selectToken = (state) => state.login.token;
export const selectAdmin = (state) => state.login.isAdmin;
// export the reducer to the applicaion
export default loginSlice.reducer;

