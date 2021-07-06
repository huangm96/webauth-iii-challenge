import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import UsersData from "./components/UsersData";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <h1>User Register and Login Form</h1>

      <div className="TabNav">
        <NavLink className="navButton" to="/">
          <div className="buttonApp">Login</div>
        </NavLink>

        <NavLink className="navButton" to="/register">
          <div className="buttonApp">Register</div>
        </NavLink>
      </div>
      <Route
        exact
        path="/register"
        render={props => <RegisterForm {...props} />}
      />
      <Route exact path="/" render={props => <LoginForm {...props} />} />
      <PrivateRoute exact path="/data" component={UsersData} />
    </div>
  );
}

export default App;
