import { useSelector, useDispatch } from "react-redux";
import { addCounter, reducerCounter } from "../features/counter/action";
export const Counter = () => {
    const counter = useSelector((state) => state.counterState.count);
    const dispatch = useDispatch();
    return (
      <div>
        <h1>Counter :{counter}</h1>
        <button onClick={() => dispatch(addCounter(7))}>INC</button>
        <button onClick={() => dispatch(reducerCounter(7))}>DEC</button>
      </div>
    );
}