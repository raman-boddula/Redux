import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todos'
import { Routes, Route,Link } from "react-router-dom";
import { TodoItem } from "./components/ItemDetails";
import { EditTodo } from './components/EditTodo';
import { Login } from './components/Login';
import {Button} from "antd"
import {PrivateRoutes} from "./components/PrivateRoute"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Todo />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/todos/:id" element={<TodoItem />}></Route>
        <Route path="/todo/:id/edit" element={<EditTodo />}></Route>
        <Route path="*" element={<h1>page not found</h1>}></Route>
      </Routes>
      {/* <Todo /> */}
    </div>
  );
}

export default App;
