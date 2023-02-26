import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { client } from "../../axiosClient";
import { PATHS } from "../../paths";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleLogin = () => {
    setError("");
    if (email && password) {
      const body = { email, password };

      client
        .post("login", body)
        .then((resp) => {
          window.localStorage.setItem("token", resp.data.token);
          navigate(PATHS.PRODUCT_LIST);
        })
        .catch((err) => {
          setError(err.response.data.error);
        });
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">Login</div>
      <div className="login-body">
        <Input
          value={email}
          type="email"
          name="email"
          label="Email"
          onChange={handleChange}
        />
        <Input
          value={password}
          type="password"
          name="password"
          label="Password"
          onChange={handleChange}
        />
        <Button label="Login" onClick={handleLogin} />
      </div>
      {error && error}
    </div>
  );
};

export default Login;
