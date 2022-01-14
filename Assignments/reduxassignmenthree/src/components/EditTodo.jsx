import React from "react";
import { useParams } from "react-router-dom";
import { Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateTodo } from "../store/Todos/action";
export const EditTodo = () => {
    const [updateData, setUpdateData] = React.useState("");
    const { id } = useParams();
    const handeEdit = () => {
        // console.log("received data",updateData)
        fetch(`http://localhost:3001/todos/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({title:updateData,status:false})
        }).then(res => res.json()).then(res => console.log(res))
        setTimeout(() => {
            alert(`You have successfully updated the todo of id -${id}`);
        }, 3000)
        
    }
    
    return (
        <div>
         <h1>Return to</h1> <Link to={'/'}><Button >Home</Button> </Link><h1>Edit todo's page</h1>
            <Input style={{width:"40%"}} type="text" onChange={(e)=>setUpdateData(e.target.value)} placeholder="Update / Edit the TODO here"/>
            <Button type="primary" onClick={handeEdit}>Edit</Button>
        </div>
    )//<Link to={`/todo/${e.id}/edit`}
}