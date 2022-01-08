import './App.css';
import {store} from "./Redux/store.js"
import Todo from "./components/Todo";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO_LIST</h1>
        <Todo />
      </header>
    </div>
  );
}

export default App;
