import { createStore, combineReducers } from "redux";
import { reducer as TodosReducer } from "../features/todos/reducer";
import { reducer as CounterReducer } from "../features/counter/reducer";


const rootReducer = combineReducers({
    counterState: CounterReducer,
    todoState :TodosReducer
})
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__());
console.log("entire store",store.getState());