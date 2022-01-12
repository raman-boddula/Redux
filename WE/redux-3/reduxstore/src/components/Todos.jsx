import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodoSuccess, addTodoError, addTodoLoading, getTodoSuccess, getTodoError, getTodoLoading } from "../features/todos/action";
export const Todo = () => {
    const [text, setText] = React.useState("");
    const { todos, loading, error } = useSelector((state) => ({ loading: state.todoState.loading, todos: state.todoState.todos, error: state.todoState.error }) );
    const dispatch = useDispatch();
    React.useEffect(() => {
        getTodo();
    }, []);
     async function getTodo() {
            try {
                dispatch(getTodoLoading());
                const data = await fetch("http://localhost:3001/todos");
                const response = await data.json();
                console.log(response)
                dispatch(getTodoSuccess(response));
            }
            catch (e) {
                dispatch(getTodoError(e));
            }
        }
    const addTodo = () => {
        dispatch(addTodoLoading());
        fetch("http://localhost:3001/todos", {
            method: "POST",
            body: JSON.stringify({ status: false, title: text }),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json()).then(res => {
           return dispatch(addTodoSuccess(res)); 
        }).catch(e => dispatch(addTodoError(e)));
        getTodo();
    }
    return loading ? (<div>....Loading </div> ):error ? (<div>something went wrong</div>):(<div>
            <input value={text} type="text" placeholder="add something" onChange={(e)=>setText(e.target.value)} />       
            <button onClick={addTodo}>ADD</button>  
            {todos.map((el) => {
                return (
                    <div>{el.title}-{el.status}</div>
                )
            })}
        </div>)
}