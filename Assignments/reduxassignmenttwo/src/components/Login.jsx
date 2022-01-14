import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
export const Login = () => {
    const [form, setformData] = React.useState([]);

    const handleChange = (e) => {
        // console.log(e.target)
        let { value, name, id } = e.target;
        id=id==="basic_email"?"email":"password"
        setformData({ ...form, [id]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formdata",form)
    }
    return (
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
      </Form.Item>
    </Form>
  );
};
 