import React, { useState } from "react";

import "./Login.css";

const LoginControlled = ({ validCreds }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSuccessLogIn, setIsSuccessLogIn] = useState(false);

  const validateForm = (email, password) => {
    setError("");
    setIsSuccessLogIn(false);

    if (!email) setError("Email field can't be empty !");
    else if (password.length < 8) setError("Password is too short!");
    else if (password.length > 20) setError("Password is too long!");
    else if (password.includes(email))
      setError("Password can't contain email!");
    else if (
      !(
        email === validCreds.validEmail && password === validCreds.validPassword
      )
    )
      setError("Invalid Credentials");
    else setIsSuccessLogIn(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = formData.email;
    const password = formData.password;

    validateForm(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    const updatedFormData = { ...formData };
    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label>
            Email :{" "}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="container">
          <label>
            Password :{" "}
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-btn">
          <button type="submit">Login</button>
        </div>
      </form>

      <div className={`error-msg ${error ? "error" : "success"}`}>
        {isSuccessLogIn ? "Sucessfully logged in !" : error}
      </div>
    </div>
  );
};

export default LoginControlled;
