import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todos'
import { Routes, Route } from "react-router-dom";
import { TodoItem } from "./components/ItemDetails";
import { EditTodo } from './components/EditTodo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/todos/:id" element={<TodoItem />}></Route>
        <Route path="/todo/:id/edit" element={<EditTodo />}></Route>
      </Routes>
      {/* <Todo /> */}
    </div>
  );
}

export default App;
