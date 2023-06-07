// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

import {
    LOGIN_SUCCESS,
    LOADING,
    LOGIN_FAIL,
    LOGOUT,
    AUTH_ERROR,
    LOGIN_TEACHER_SUCCESS
} from '../types/types';

interface ReducerAction {
    type: string;
    payload?: any;
}

const AuthReducer = ( state:any, action:ReducerAction ) => {
    console.log(action, 'action .>>>>>>>')
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action?.payload?.token?.accessToken);
            // localStorage.setItem('refreshToken', action?.payload?.token?.refreshToken);
            // localStorage.setItem('user', action?.payload?.user);
            localStorage.setItem('expiry', action?.payload?.token?.expiresIn);
            //console.log(action?.payload?.user,'user detail');
            // window.location.replace(`${process.env.REACT_APP_FRONTEND_URL}/students-dashboard`);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: action.payload.isAuthenticated,
                loading: false,
            };
            case LOGIN_TEACHER_SUCCESS:
                localStorage.setItem('token', action?.payload?.token?.accessToken);
                // localStorage.setItem('refreshToken', action?.payload?.token?.refreshToken);
                // localStorage.setItem('user', action?.payload?.user);
                localStorage.setItem('expiry', action?.payload?.token?.expiresIn);
                //console.log(action?.payload?.user,'user detail');
                // window.location.replace(`${process.env.REACT_APP_FRONTEND_URL}/students-dashboard`);
                return {
                    ...state,
                    ...action.payload,
                    isAuthenticated: action.payload.isAuthenticated,
                    loading: false,
                };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            // localStorage.removeItem('token');
            // localStorage.removeItem('refreshToken');
            // localStorage.removeItem('user');
            // localStorage.removeItem('expiry');
            
            // //Removing for social signin too
            // localStorage.removeItem("name");
            // localStorage.removeItem("email");
            // localStorage.removeItem("picture");
            localStorage.clear();
            window.location.replace(`${process.env.REACT_APP_FRONTEND_URL}`);
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
            };
        default:
            return state;
    }
}

export default AuthReducer;