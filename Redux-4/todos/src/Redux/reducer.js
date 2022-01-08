import {
  ADD_TODO,
  DELETE_TODO
} from "./actionTypes";

export const initState = {
  todo: []
};

export default (state = initState, { type, payload }) => {
  console.log(type, payload);
    switch (type)
    {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== payload)
      };
    default:
      return state;
  }
};
