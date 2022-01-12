import { INC_COUNT, DEC_COUNT } from "./actionTypes";
export const addCounter = (payload) => {
    return {
        type: INC_COUNT,
        payload
    }
}
export const reducerCounter = (payload) => {
    return {
        type: DEC_COUNT,
        payload
    }
}
