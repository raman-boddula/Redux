import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actiontypes";

export const loginSuccess = (data) => {
    return {
        type:LOGIN_SUCCESS,payload:data.token
    }    
}
export const loginFailure = (err) => {
    return {
        type:LOGIN_FAILURE,payload:err
    }
}