import {
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
    GET_TODO_LOADING
} from "./actionTypes";

export const addTodoLoading = (payload) => {
    return {
        type:ADD_TODO_LOADING
    }
}
export const addTodoSuccess = (data) => {
   return {
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
        loading: true,
    }
}
export const getTodoSuccess = (data) => {
    return {
        type: GET_TODO_SUCCESS,
        payload: data,
        loading:false
    }
}
export const getData = () => (dispatch) => {
  dispatch(getTodoLoading());
    fetch("http://localhost:3001/todos")
        .then((d) => d.json())
        .then((data) => {
            dispatch(getTodoSuccess(data));
        })
        .catch((err) => {
            dispatch(getTodoError(err));
        });
};
export const getTodoError = (err) => {
    return {
        type: GET_TODO_ERROR,
        err:true,
    }
}