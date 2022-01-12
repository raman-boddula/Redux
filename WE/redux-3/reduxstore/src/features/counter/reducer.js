import { INC_COUNT, DEC_COUNT } from "./actionTypes";
const init = {
  count: 0,
};
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return {
        ...state,
        count: state.count + payload,
      };
      case DEC_COUNT:
          return {
              ...state,
              count:state.count-payload
          }
    default:
      return state;
  }
};
