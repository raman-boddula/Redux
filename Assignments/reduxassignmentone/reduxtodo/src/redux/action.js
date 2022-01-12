import { nanoid } from "nanoid"
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./actionTypes"
export const addTodo = (data) => {
    return {
        type: ADD_TODO, 
        payload: {
            id: nanoid(7),
            data: data,
            status:"false"
        }
    }
}
export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload:id,
    }
}
export const updateTodo = (id) => {
    return {
        type: UPDATE_TODO,
        payload:id

    }
}