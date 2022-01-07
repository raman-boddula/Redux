import { INC_COUNT, DEC_COUNT,MUL_COUNT,DIV_COUNT } from "./actionTypes.js";

export const reducer = (state, { type, payload }) => {
  
    switch (type) {
        case INC_COUNT:
            return { ...state, counter: state.counter + payload }
        case "ADD_TODO":
            return {...state,todos:[...state.todos,payload]}
        case DEC_COUNT:
            return {...state,counter:state.counter-payload}
        case MUL_COUNT:
            return {...state,counter:state.counter*payload}
        case DIV_COUNT:
            return {...state,counter:state.counter/payload}
        default: return state;
    }
}
