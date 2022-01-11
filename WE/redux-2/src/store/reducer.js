import { ADD_TODO, DELETE_TODO,ADD_TODO_LOADING, ADD_TODO_SUCCESS,ADD_TODO_ERROR,GET_TODO_LOADING,GET_TODO_ERROR,GET_TODO_SUCCESS} from "./actionTypes";

const init = { counter: 10 };
const initState = { loading: false,todos: [],error:false };
export const reducer = (state=initState, {type,payload })=>{
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                Todo:[...state.Todo,payload]
            }
        case ADD_TODO_LOADING:
            return {
                ...state,
                loading: true
                
            };
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos.push, payload],
                loading: false,
            };
        case ADD_TODO_ERROR:
            return {
                ...state,
                error: true,
                loading: false
            };    
        case GET_TODO_LOADING:
            return {
                loading: true
            };
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos: payload,
                loading:false,
            };
        case GET_TODO_ERROR:
            return {
                ...state,
                error: true
            }
        default: return state;
    }
}