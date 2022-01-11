import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodoSuccess, addTodoError, addTodoLoading, getTodoSuccess, getTodoError, getTodoLoading } from "../store/action";
export const Todo = () => {
    const [text, setText] = React.useState("");
    const { todos, loading, error } = useSelector((state) => ({ loading: state.loading, todos: state.todos, error: state.error }) );
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
        addTodoLoading();
        fetch("http://localhost:3001/todos", {
            method: "POST",
            body: JSON.stringify({ status: false, title: text }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json()).then(res => {
            dispatch(addTodoSuccess(res)); getTodo();
        })
        .catch(e => dispatch(addTodoError(e)));
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