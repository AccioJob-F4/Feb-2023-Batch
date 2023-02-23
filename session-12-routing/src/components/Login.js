import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const client = axios.create({
  baseURL: "https://reqres.in/api/",
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = () => {
    setError(null);
    const body = { email: email, password: password };

    client
      .post("login", body)
      .then((resp) => {
        window.localStorage.setItem("token", resp?.data?.token);
        navigate("/home");
      })
      .catch((err) => {
        setError(err.response.data.error);
        window.localStorage.clear();
      });
  };

  return (
    <div>
      <input type="text" name="email" value={email} onChange={handleChange} />
      <br />
      <input
        type="text"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Login</button>

      <h3>{error && error}</h3>
    </div>
  );
};

export default Login;
