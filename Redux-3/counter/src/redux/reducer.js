import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes.js";

const initState = {
    counter: 1
}
export const reducer = (state = initState, { type, payload }) => {
    console.log(state,type,payload)
    switch (type) {
        case ADD_COUNTER:
            return {
                ...state, counter: state.counter + payload
            };
        case REDUCE_COUNTER:
            return {
                ...state, counter: state.counter - payload
            };
        default: return state;
    }
};