import { ADD_TODO,DELETE_TODO} from "./actionTypes.js";

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload:
    {
        title: payload,
        status: false
    }
});


export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload
});
