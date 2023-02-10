import React from "react";

const UnControlledComponents = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const userName = event.target.userName.value;
    const email = event.target.email.value;

    console.log(userName, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input type="text" name="userName" />
      </label>
      <br />
      <label>
        Email : <input type="email" name="email" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UnControlledComponents;
