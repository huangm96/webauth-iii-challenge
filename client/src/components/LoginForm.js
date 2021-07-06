import React, { useState } from "react";
import { Button, Input, Icon, Form } from "antd";
import "antd/dist/antd.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const LoginForm = props => {
  const [form, setForm] = useState({
    userName: "",
    password: ""
  });
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitForm = e => {
    e.preventDefault();
    console.log(form);
    axiosWithAuth()
      .post("http://localhost:5656/api/login", form)
      .then(res => {
        console.log(res);

        localStorage.setItem(
          "token",
         res.data.token
        );
        props.history.push("/data");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="RegisterFrom">
      <h1>Login Form</h1>
      <form onSubmit={submitForm}>
        <Form.Item>
          <Input
            size="large"
            name="userName"
            value={form.userName}
            onChange={handleChange}
            placeholder="User Name"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </Form.Item>
        <Form.Item>
          <Input
            size="large"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
