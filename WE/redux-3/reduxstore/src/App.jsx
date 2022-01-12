import logo from './logo.svg';
import './App.css';
import { Counter } from "./components/Counter";
import {Todo} from "./components/Todos"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Todo />
      </header>
    </div>
  );
}

export default App;
