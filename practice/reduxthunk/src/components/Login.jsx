import { Button, Input } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {loginFailure,loginSuccess} from "../Redux/Login/action";


export const Login = () => {
    const [details, setDetails] = React.useState({});
    const { token, error } = useSelector((state) => ({ token: state.loginReducer.token, error: state.loginReducer.error }));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setDetails({ ...details, [e.target.id]: e.target.value });
    }
    const handleClick = () => {
        console.log(details);
        fetch("https://reqres.in/api/login/", {
            body: JSON.stringify(details),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json()
        )
        .then((res) => {
            console.log("response", res)
            dispatch(loginSuccess(res.token));
            navigate('/dashboard')
            })
            .catch((error) =>
            console.log("error",error),
            dispatch(loginFailure(error)));
    }
    return (
        <div style={{ width: "30%", marginLeft: "35%" }}>
            <h1>Login here!</h1>
            <Input type="text" id="email" placeholder="Enter your Email" onChange={handleChange}/><br/><br/>
            <Input type="password" id = "password" placeholder="Enter your Password" onChange={handleChange} /><br/><br/>
            <Button type="submit" onClick={handleClick}>Submit</Button> 
        </div>
    )
}