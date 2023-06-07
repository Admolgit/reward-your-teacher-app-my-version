import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { auth } from "../api/index";

// const login = createAsyncThunk('auth/login', async (data) =>{
//     auth.login(data);
// };

const initialState = {auth:false, user:null};

const authReducer = createSlice({
    initialState,
    name: "auth",
    reducers: {
        login: (state, action) => {
            
            if (action.payload){
                localStorage.setItem("token", action.payload.token.accessToken);
                localStorage.setItem('email', action.payload?.user?.email);
                state.auth = true;
                state.user = action.payload.user;
            }},
            
        logout: (state) => {
            localStorage.removeItem("token");
            localStorage.clear();
            state.auth = false;
            state.user = null;
        }
    }

})

export const AUTH_ACTIONS = {...authReducer.actions};
export default authReducer.reducer;