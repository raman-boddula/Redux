import { Button, Input } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from 'react-router-dom';
import {registerSuccess,registerFailed} from "../Redux/Register/action"

export const Register = () => {
    const [form, setForm] = React.useState({});
    const { token } = useSelector((state) => ({token: state.registerReducer.token }));
    
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const {id, value} = e.target;
        setForm({...form,[id]:value});
    }
    const handleClick = () => {
        console.log(form)
        fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
            body: JSON.stringify(form),
            method: "POST",
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            console.log(response);
            dispatch(registerSuccess(response));
        }).catch((error) => {
            dispatch(registerFailed(error.message))
        })
    }
    if (token) {
        return <Navigate to="/login"/>
    }
    return (
        <div style={{ width: "30%", marginLeft: "35%" }}>
            <h1>Register here!</h1>
            <Input type="text" id="Name" placeholder="Enter your Name" onChange={handleChange}/><br/><br/>
            <Input type="text" id="Email" placeholder="Enter your Email" onChange={handleChange}/><br/><br/>
            <Input type="password" id="Password" placeholder="Enter your Password" onChange={handleChange}/><br/><br/>
            <Input type="text" id="Username" placeholder="Enter your Username" onChange={handleChange}/><br/><br/>
            <Input type="text" id="Mobile" placeholder="Enter your Mobile" onChange={handleChange}/><br/><br/>
            <Input type="description" id="Description" placeholder="Enter your Description" onChange={handleChange} /><br/><br/>
            <Button type="primary"  onClick={handleClick}>Register</Button> <br /><br /><br />
            <p>Already Registered ? <Link to="/login"> <Button>Login</Button> </Link></p>
        </div>
    )
}