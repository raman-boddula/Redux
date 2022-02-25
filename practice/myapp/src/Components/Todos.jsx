import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";
import { Input, Button } from "antd";
export const Todos = () => {
    const [todo, setTodo] = React.useState("");
    const todos= useSelector((state) => state.todos);
    const dispatch = useDispatch((state) => state.todos);
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    return (
        <div >
            <Input type="text" placeholder="add todos" onChange={handleChange} />
            <Button onClick={() => dispatch(addTodo(todo))}>ADD TODO</Button>
            {
                todos.length>0 ? todos.map((el)=>{
                return (<h1>{el}</h1>)
            }):null}
        </div>
    )
}