import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { reducer as todoReducer } from './Todos/reducer';
import {reducer as authReducer} from "./Auth/reducer"

const rootReducer = combineReducers({ todoReducer: todoReducer, authReducer: authReducer })
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log("entire store",store.getState())