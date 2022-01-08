import React from "react";
import { Counter } from "./components/Counter";
import { AppContext } from "./redux/AppContextProvider";
import "./App.css";

export default function App() {
  const { getState } = React.useContext(AppContext);

  const { counter } = getState();
  return (
    <div className="App">
      <Counter />
      <div> {counter}</div>
    </div>
  );
}
