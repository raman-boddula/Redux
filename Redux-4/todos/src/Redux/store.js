import { createStore } from "redux";
import { addTodo } from "./action.js";
import reducer from "./reducer.js";

const initState = {
    todo:[]
}
var store = createStore(reducer, initState);
console.log(store.getState());
store.dispatch(addTodo("BUY MILK"));
store.dispatch(addTodo("BUY CURD"));
store.dispatch(addTodo("BUY BREAD"));
console.log(store.getState());

export { store };