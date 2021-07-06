import React, { useState } from "react";
import { Button, Input, Icon, Form } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

const RegisterForm = props => {
  const [form, setForm] = useState({
    userName: "",
      password: "",
    department:""
  });
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitForm = e => {
    e.preventDefault();
    console.log(form);
    axios
      .post("http://localhost:5656/api/register", form)
      .then(res => {
        console.log(res);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="RegisterFrom">
      <h1>Register Form</h1>
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
        <Form.Item>
          <Input
            size="large"
            name="department"
            value={form.department}
            onChange={handleChange}
            placeholder="department"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
