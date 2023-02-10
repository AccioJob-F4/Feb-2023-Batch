import React, { useState } from "react";

import "./Login.css";

const Login = ({ validCreds }) => {
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

    const email = event.target.email.value;
    const password = event.target.password.value;

    validateForm(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label>
            Email : <input type="email" name="email" />
          </label>
        </div>

        <div className="container">
          <label>
            Password : <input type="text" name="password" />
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

export default Login;
