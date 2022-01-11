import { ADD_TODO,DELETE_TODO ,ADD_TODO_SUCCESS,ADD_TODO_ERROR,ADD_TODO_LOADING,GET_TODO_LOADING,GET_TODO_ERROR,GET_TODO_SUCCESS} from "./actionTypes.js";

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const removeTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}
export const addTodoLoading = () => {
    return {
        type: ADD_TODO_LOADING,
    }
}
export const addTodoSuccess = (data) => {
    return{
        type: ADD_TODO_SUCCESS,
        payload:data
    }
}
export const addTodoError = (err) => {
    return {
        type: ADD_TODO_ERROR,
        payload:err
    }
}
export const getTodoLoading = () => {
    return {
        type: GET_TODO_LOADING,
    }
}
export const getTodoSuccess = (data) => {
    return{
        type: GET_TODO_SUCCESS,
        payload:data
    }
}
export const getTodoError = (err) => {
    return {
        type: GET_TODO_ERROR,
        payload:err
    }
}
