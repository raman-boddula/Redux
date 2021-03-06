import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todos'
import { Routes, Route,Link } from "react-router-dom";
import { TodoItem } from "./components/ItemDetails";
import { EditTodo } from './components/EditTodo';
import { Login } from './components/Login';
import {Button} from "antd"

function App() {
  return (
    <div className="App">
      <Link to={"/login"}><Button type="">Login</Button></Link>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/todos/:id" element={<TodoItem />}></Route>
        <Route path="/todo/:id/edit" element={<EditTodo />}></Route>
        <Route path="/login" element={< Login />}></Route>
      </Routes>
      {/* <Todo /> */}
    </div>
  );
}

export default App;
