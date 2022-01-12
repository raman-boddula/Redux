import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../redux/action";
import {StyledButton,Div,H1} from "./Style"
import {Button} from "antd"
export const Todo = () => {
    const [text, setText] = React.useState("");
    const data = useSelector((state) => state.todos);
    // console.log("data", data);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
            <H1>Add todo here</H1>
            <input type="text" placeholder="type something here" value={text} onChange={(e) => setText(e.target.value)} />
            <StyledButton type="danger" onClick={()=>dispatch(addTodo(text))}>ADD-TODO</StyledButton>
            </div>
            <div>
                {
                    data.map((el) => {
                        return (
                            <Div>
                                <div>Title ---> {el.data}</div>
                                <div>Status ---> {el.status==="true" ? "Completed":"Not Completed"}</div>
                                <Button type="primary" onClick={() => dispatch(removeTodo(el.id))}>DELETE</Button>
                                <Button type="dashed" onClick={()=>dispatch(updateTodo(el.id))}>TOGGLE</Button>  
                            </Div>
                        )
                    })
                }
            </div>
            </div>
    )
}