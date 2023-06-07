import { useContext, useReducer } from "react";
import jwt_decode from 'jwt-decode';
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {
    LOADING,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGIN_FAIL,
    LOGOUT_FAIL,
    LOGIN_TEACHER_SUCCESS,
} from "../types/types";
import { apiPost } from "../utils/apiHelpers";

type FormDataType = {
    email: string;
    password: string;
}

const AuthState = ({ children }:any) => {
    const initialState = {
        token: localStorage?.getItem('token'),
        isAuthenticated: localStorage?.getItem('token') 
        ? true : 
        false,
        loading: false,
        user: null,
        error: null,
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);
    
    // const setUserType = (token: string) => {
    //     const { user }:any = jwt_decode(token);
    //     if(user.role === 'admin'){
    //         localStorage.setItem('userType','admin')
    //     }else if(user.role === 'user'){
    //         localStorage.setItem('userType', 'user');
    //     }
    // }

    const config = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    };

    const login = async (formData:FormDataType) => {
        dispatch({
            type: LOADING,
            payload: true
        });
        try {
            //If there is need to do any conditional stuff.
            const response = await apiPost(`/auth/login`, formData, config, false);
            const {exp}:any = jwt_decode(response.data.token.accessToken);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    ...response.data,
                    isAuthenticated: true,
                    expiresIn: exp
                }
            })
        } catch (error: any) {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.message,
            });
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const teacher_login = async (formData:FormDataType) => {
        dispatch({
            type: LOADING,
            payload: true
        });
        try {
            //If there is need to do any conditional stuff.
            const response = await apiPost(`/auth/teacher-login`, formData, config, false);
            const {exp}:any = jwt_decode(response.data.token.accessToken);
            dispatch({
                type: LOGIN_TEACHER_SUCCESS,
                payload: {
                    ...response.data,
                    isAuthenticated: true,
                    expiresIn: exp
                }
            })
        } catch (error: any) {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.message,
            });
        }
    }

    const logout = async (data:any) => {
        try {
            dispatch({
                type: LOGOUT,
                payload: data
            });
        }catch (err: any){
            dispatch({
                type: LOGOUT_FAIL,
                payload: err.message
            });
        }
    }

    return (
        <AuthContext.Provider
        value={{
            loading: state.loading,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            error: state.error,
            login,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined ){
        throw new Error("UseAuth must be used in an AuthProvider");
    }
    return context;
}

export default AuthState;