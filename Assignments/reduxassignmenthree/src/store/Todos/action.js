import { ADD_TODO_ERROR, ADD_TODO_LOADING,UPDATE_TODO,ADD_TODO_SUCCESS, UPDATE_TODO_ERROR, UPDATE_TODO_LOADING, UPDATE_TODO_SUCCESS, REMOVE_TODO_ERROR, REMOVE_TODO_LOADING, REMOVE_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_SUCCESS, GET_TODO_LOADING} from "./actionTypes"; 

export const addTodoError = (err) => 
{
    return {
         type: ADD_TODO_ERROR, payload: err 
        };
};
export const addTodoLoading = () => 
{
  return {
       type: ADD_TODO_LOADING 
    };
};
export const addTodoSuccess = (data) => 
{
  return {
       type: ADD_TODO_SUCCESS, payload: data 
    };
};
export const updateTodoError = (err) => 
{
  return {
       type: UPDATE_TODO_ERROR, payload: err 
    };
};
export const updateTodoLoading = () => 
{
  return {
       type: UPDATE_TODO_LOADING 
    };
};
export const updateTodoSuccess = (payload) => 
{
   
  return {
       type: UPDATE_TODO_SUCCESS, payload: payload 
    };
};
export const removeTodoError = (err) => 
{
  return {
       type: REMOVE_TODO_ERROR, payload: err 
    };
};
export const removeTodoLoading = () => 
{
  return {
       type: REMOVE_TODO_LOADING 
    };
};
export const removeTodoSuccess = (id) => 
{
  return {
       type: REMOVE_TODO_SUCCESS, payload: id 
    }
       ;
};
export const getTodoError = (err) => 
{
  return {
       type: GET_TODO_ERROR, payload: err 
    };
};
export const getTodoLoading = () => 
{
  return {
       type: GET_TODO_LOADING 
    };
};
export const getTodoSuccess = (data) => 
{
  return {
       type: GET_TODO_SUCCESS, payload: data 
    };
}; 
export const updateTodo = (data) => {
   return {
      type:UPDATE_TODO,payload:data
   }
}
