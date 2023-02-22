import React, { useState } from "react";

import "./EmailPwForm.css";

import Button from "./Button";
import CircularProgress from "@mui/material/CircularProgress";

const EmailPwForm = ({ btnLabel }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    name === "email" ? setEmail(value) : setPassword(value);
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
      />
      <br />
      <input
        type="text"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <br />
      {/* <Button>
        <CircularProgress />
        {btnLabel}
      </Button> */}
    </div>
  );
};

export default EmailPwForm;
