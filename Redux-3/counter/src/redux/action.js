import { ADD_COUNTER,REDUCE_COUNTER } from "./actionTypes.js";

export const addCounter = (payload) => {
    return {
        type: ADD_COUNTER,
        payload
    }
}
export const reduceCounter = (payload) => {
    return {
        type: REDUCE_COUNTER,
        payload
    }
}