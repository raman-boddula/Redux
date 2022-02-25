import { INC_COUNT, DEC_COUNT, ADD_TODO } from "./actionTypes";

const initState = {
  counter: 0,
  totalClick: 0,
  todos: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return {
        ...state,
        counter: state.counter + payload,
        totalClick: state.totalClick + 1,
      };
    case DEC_COUNT:
      return {
        ...state,
        counter: state.counter - payload,
        totalClick: state.totalClick + 1,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    default:
      return state;
  }
};
