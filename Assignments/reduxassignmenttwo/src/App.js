import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todos'
import { Routes, Route } from "react-router-dom";
import { TodoItem } from "./components/ItemDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/todos" element={<Todo />}></Route>
        <Route path="/todos/:id" element={<TodoItem />}></Route>
      </Routes>
      {/* <Todo /> */}
    </div>
  );
}

export default App;
