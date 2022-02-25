import { INC_COUNT, DEC_COUNT, ADD_TODO } from "./actionTypes";

export const incCounter = (payload) => {
  return {
    type: INC_COUNT,
    payload,
  };
};
export const decCounter = (payload) => {
  return {
    type: DEC_COUNT,
    payload,
  };
};
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
