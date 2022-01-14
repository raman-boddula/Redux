import React from 'react';
import {useDispatch,useSelector} from "react-redux"
import { Form, Input, Button, Checkbox } from 'antd';
import { loginSuccess, loginFailure } from '../store/Auth/action';
import { Navigate,Link } from "react-router-dom"
export const Login = () => {
    const [form, setformData] = React.useState([]);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => ({
    token: state.authReducer.token,
    isAuth: state.authReducer.isAuth,
  }));
  if (isAuth) {
    return <Navigate to="/" />;
  }
    const handleChange = (e) => {
        // console.log(e.target)
        let { value, name, id } = e.target;
        id=id==="basic_email"?"email":"password"
        setformData({ ...form, [id]: value })
    }
  const handleSubmit = (e) =>
  {
        e.preventDefault();
      console.log("formdata", form)
          fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          })
            .then((res) => res.json())
            .then((res) => dispatch(loginSuccess(res)))
            .catch((err) => dispatch(loginFailure(err)));
          alert(`${form.email} has been successfully registered now :) `)
  }
  return (
    <div>
      <h1>Please login here</h1>
    <Form onSubmit={handleSubmit}
      name="basic"
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 5,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="emain"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
        onChange={handleChange}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        onChange={handleChange}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 9,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 9,
        }}
      >
                <Button type="primary" onClick={handleSubmit} htmlType="submit">
          Submit
          </Button>
        <Link to={'/'}><Button type="dashed" >Home</Button> </Link>
      </Form.Item>
      </Form>
      </div>
  );
};
 