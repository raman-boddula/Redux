import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./actionTypes";
const init = { todos: [] };
export const reducer = (state=init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:

      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case REMOVE_TODO:
      const newData = state.todos.filter((el)=>el.id!=payload)
      return {
        ...state,
        todos: newData,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((e) => {
          if (e.id === payload) {
            e.status = 'true' 
          }
          return e;
        }),
      };
    default:
      return state;
  }
};
