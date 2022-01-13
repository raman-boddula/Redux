import { createStore, combineReducers, applyMiddleware ,compose} from "redux";
import { reducer as TodosReducer } from "../features/todos/reducer";
import { reducer as CounterReducer } from "../features/counter/reducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    counterState: CounterReducer,
    todoState :TodosReducer
})
// const logger1 = (state) => (next) => (action) => {
//     // console.log("before insider logger1");
//     if (typeof action === "function") {
//         return action(store.dispatch)
//      }
//     next(action);
//     // console.log("after insider logger1");

// }
// const logger2 = (state) => (next) => (action) => {
//   console.log("before insider logger2");
//     next(action);
//     console.log("after insider logger2");
    
// };
export const store = createStore(rootReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__()));
console.log("entire store",store.getState());