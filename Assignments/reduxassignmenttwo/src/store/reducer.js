import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
  REMOVE_TODO_LOADING,
  REMOVE_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_SUCCESS,
  GET_TODO_LOADING,
} from "./actionTypes";
const init = { loading: false, todos: [], error: false };
export const reducer = (state = init, { type, payload }) => {
    switch (type) {
      case ADD_TODO_LOADING:
        return {
          ...state,
          loading: true,
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
        };
      case GET_TODO_LOADING:
        return {
          ...state,
          loading: true,
        };
      case GET_TODO_SUCCESS:
        return {
          ...state,
          todos: payload,
          loading: false,
        };
      case GET_TODO_ERROR:
        return {
          ...state,
          error: true,
        };
        case UPDATE_TODO_ERROR:
            return {
              ...state,
              //
            };
        case UPDATE_TODO_SUCCESS:
            return {
              ...state,
              ///
            };
        case UPDATE_TODO_LOADING:
            return {
              ...state,
              ////
            };
        case REMOVE_TODO_ERROR:
            return {
              ...state,
            };
        case REMOVE_TODO_SUCCESS:
            return {
              ...state,
            };
        case REMOVE_TODO_LOADING:
            return {
              ...state,
            };
      default:
        return state;
    }
};
