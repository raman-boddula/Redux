import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodoSuccess, getTodoLoading, getTodoError, removeTodoSuccess, removeTodoLoading, removeTodoError, updateTodoSuccess, updateTodoLoading, updateTodoError, addTodoSuccess, addTodoLoading, addTodoError } from "../store/action";
import { Link } from 'react-router-dom';
import { Button, H5 } from "antd";
import { Div} from "./Style"
import { Total } from './Total';
export const Todo = () => {
const [text, setText] = React.useState("");
    const { loading, todos, error } = useSelector((state) => ({ loading: state.loading, todos: state.todos, error: state.error }));
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getTodoLoading());
        getTodos();
    }, []);
    const getTodos = async () => {
        try {
            const data = await fetch(`http://localhost:3001/todos`);
            const res = await data.json();
            dispatch(getTodoSuccess(res));
        }
        catch (e)
        {
            dispatch(getTodoError(e));
        }
    };
    const addTodos = () => {
        dispatch(addTodoLoading());
        fetch(`http://localhost:3001/todos`, {
            method: "POST",
            body: JSON.stringify({ status: false, title: text }),
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json()).then((res) => {
            return dispatch(addTodoSuccess(res));
        });
        getTodos();
    }
    console.log('TotalTodos',todos)
    const handleDelete = (id) => {
        console.log(id)
        dispatch(removeTodoSuccess(id));
    }
    const handleToggle = (id) => {
        // console.log(id)
        dispatch(updateTodoSuccess(id));
        getTodos();
    }
    return loading ? <div>Loading... </div> : error ? <div>something failed</div> : (
        <div>
            <h1><strong> ADD TODO'S LIST </strong> {< Total data={todos} /> }  </h1> 
            <input type="text" placeholder="Enter your todos" value={text} onChange={(e) => setText(e.target.value)} />
            <Button type="dashed" onClick={addTodos}>Add Todo</Button>
            {todos.map((e,i) =>
            ( <Div key={i}><Link to={`/todos/${e.id}`}>
                <h4>{e.title}</h4> <h4>{e.status?"COMPLETED":"NOT_COMPLETED"} </h4> 
            </Link><Button type="primary" onClick={()=>handleToggle(e)}>TOGGLE</Button><Button type="danger" onClick={()=>handleDelete(e)}>DELETE</Button> <Link to={`/todo/${e.id}/edit`}>
              <Button type="dashed">Edit</Button>
            </Link></Div>
            ))}
        </div>
    )
}