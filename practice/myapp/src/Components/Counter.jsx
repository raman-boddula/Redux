import React from 'react';
import { incCounter, decCounter } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const totalClick = useSelector((state) => state.totalClick);
    console.log('counter', counter);
    return (
        <div>
            <h1>Number of Clicks :{ totalClick }</h1>
            <h1>Counter :{ counter}</h1>
            <Button onClick={()=>dispatch(incCounter(1))}>INC</Button>
            <Button onClick={()=>dispatch(decCounter(1))}>DEC</Button>
        </div>
    )
}