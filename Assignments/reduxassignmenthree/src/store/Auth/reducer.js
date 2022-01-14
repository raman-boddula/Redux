import { LOGIN_SUCCESS,LOGIN_FAILURE } from "./actiontypes"
// const authToken = localStorage.getItem("TOKEN")
const localAuth = localStorage.getItem("Auth")
const initState = {
    isAuth: localAuth || false,
    token: ""
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("Auth", true);
            localStorage.setItem("TOKEN", payload)
            console('token',payload)
            return {
                ...state,
                isAuth:true,
                token:payload
            }
        case LOGIN_FAILURE:
            return {
                isAuth:false,
                token:""
            }
        default: return state;
    }
}