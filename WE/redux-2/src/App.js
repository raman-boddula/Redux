import './App.css';
import { useSelector } from "react-redux";
import { Todo } from "./components/Todo";
function App() {
  const data = useSelector((state)=>state.counter);
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
