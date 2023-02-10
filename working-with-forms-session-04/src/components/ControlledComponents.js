import React, { useState } from "react";

const ControlledComponents = () => {
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // if (name === "userName") setUserName(value);
    // else if (name === "email") setEmail(value);

    const updatedFormData = { ...formData };
    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name :
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email :
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledComponents;
