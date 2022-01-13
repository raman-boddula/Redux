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
  UPDATE_TODO
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
        error: true
      };
    case UPDATE_TODO_SUCCESS:
      // console.log(payload)
      fetch(`http://localhost:3001/todos/${payload.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({ status: !payload.status }),
      });
      return {
        ...state,
        todos: state.todos.map((e) =>
          e.id === payload.id ? { ...e, status: !e.status } : e
        ),
      };
    case UPDATE_TODO_LOADING:
      return {
        ...state,
        loading: true
      };
    case REMOVE_TODO_LOADING:
      return {
        ...state,
        loading: true
      };
    case REMOVE_TODO_SUCCESS:
      fetch(`http://localhost:3001/todos/${payload.id}`, {
        method: "DELETE"
      })
      //  console.log("got it")
      return {
        ...state,
        todos: state.todos.filter((el) => {
          return el.id !== payload.id;
        })
      };
    case REMOVE_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((e) =>
          e.id === payload.id ? { title:payload.title,status:payload.status } : e
        ),
      };
      default:
        return state;
    }
};
