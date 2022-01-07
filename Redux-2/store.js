import { createStore } from "redux";

import { reducer } from "./reducer.js";

const init = { counter: 10, todos:[]};

const store = createStore(reducer, init);


const action = { type: "INC_COUNT", payload: 1 };

console.log(store.getState())//10

let operations = ["INC_COUNT", "DEC_COUNT", "MUL_COUNT", "DIV_COUNT"];

operations.forEach((e) => {
    store.dispatch({ type: {e}, payload: 10 });
    console.log(store.getState())
})
store.dispatch({ type: "ADD_TODO", payload: {title:"Learn Redux",status:false }});
    console.log(store.getState())
